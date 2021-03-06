import { Socket } from "net";
import { RetryStrategy, RetryStrategyRule } from "../utils/RetryStrategy";
import { Bytes, bytesToHexString, joinBytes } from "../utils/ByteUtils";
import { logInfo, logWarn } from "../utils/log";
import VError from "verror";
import { SerialExecutor } from "../utils/SerialExecutor";

export class SocketClient {
  private static readonly CONNECT_TIMEOUT = 10 * 1000;
  private static readonly READ_WRITE_TIMEOUT = 10 * 1000;

  private _socket?: Socket;
  private readonly _callback: Partial<Callback>;
  private _retryOnError: boolean;
  private _callbackExecutor: SerialExecutor;

  readonly host: string;
  readonly port: number;
  readonly traceId: string;
  readonly retryStrategy = RetryStrategy.getStrategy(RetryStrategyRule.FAST, 5); // retry almost 1 min

  constructor(host: string, port: number, traceId: string, callback: Partial<Callback>) {
    this.host = host;
    this.port = port;
    this.traceId = traceId;
    this._callback = callback;
    this._retryOnError = true;
    this._callbackExecutor = new SerialExecutor();
  }

  async send(data: Bytes): Promise<void> {
    this._retryOnError = true;
    this._callbackExecutor.clear();

    try {
      await this._sendImpl(data);
    } catch (error) {
      if (!this._retryOnError || !this.retryStrategy.canRetry()) {
        const des = `[tid:${this.traceId}] Fail to send socket to:\"${this.host}:${
          this.port
        }\", data:${bytesToHexString(data)}, after max retry:${this.retryStrategy.retryCount}`;
        throw new IOError(error, des);
      }

      const delay = this.retryStrategy.nextRetryDelay();

      logInfo(
        `[tid:${this.traceId}] socket #${this.retryStrategy.retryCount} retry send, after delay: ${delay}ms, addr:\"${
          this.host
        }:${this.port}\" data:${bytesToHexString(data)}`
      );

      return new Promise(async (resolve, reject) => {
        setTimeout(() => {
          try {
            this.send(data);
            resolve();
          } catch (e) {
            reject(e);
          }
        }, delay);
      });
    }
  }

  cancel(): void {
    if (!this._socket) {
      return;
    }

    this._socket.destroy();
    this._socket = undefined;

    this._callbackExecutor.execute(async () => {
      this._callback?.onCancel?.();
    });
  }

  private async _sendImpl(sendData: Bytes): Promise<void> {
    if (this._socket) {
      logWarn("can not send again while socket is working");
      return;
    }

    return new Promise((resolve, reject) => {
      const onSocketFinish = (error?: Error, retryOnError: boolean = true) => {
        if (!this._socket) {
          return;
        }

        if (error) {
          this._callbackExecutor.execute(async () => {
            this._callback?.onError?.(error);
          });

          logWarn(`socket on error: ${error}`);

          this._retryOnError = retryOnError;

          reject(error);
        } else {
          resolve();
        }

        this._socket.destroy();
        this._socket = undefined;
      };

      const socket = new Socket();
      socket.setTimeout(SocketClient.READ_WRITE_TIMEOUT);
      this._socket = socket;

      const connectTimeout = setTimeout(() => {
        onSocketFinish(new IOError("socket connect timeout"));
      }, SocketClient.CONNECT_TIMEOUT);

      socket.connect(
        {
          host: this.host,
          port: this.port,
        },
        () => {
          clearTimeout(connectTimeout);

          this._callbackExecutor.execute(async () => {
            this._callback?.onConnect?.();
          });

          socket.write(sendData);
        }
      );

      socket.on("data", async (data) => {
        this._callbackExecutor.execute(async () => {
          try {
            const finished = await this._callback.onReceive!(data);

            if (finished) {
              // do not execute onReceive in queue
              this._callbackExecutor.clear("onReceive");
              onSocketFinish();
            }
          } catch (e) {
            // do not execute onReceive in queue
            this._callbackExecutor.clear("onReceive");
            onSocketFinish(e, false);
          }
        }, "onReceive");
      });

      socket.on("close", () => {
        this._callbackExecutor.execute(async () => {
          this._callback?.onClose?.();
        });

        onSocketFinish();
      });

      socket.on("timeout", () => {
        onSocketFinish(new IOError("socket is read-write timeout"));
      });

      socket.on("error", (error: Error) => {
        onSocketFinish(new IOError(error, "socket error"));
      });
    });
  }
}

export interface Callback {
  onConnect(): Promise<void>;

  // return true, all data are received, be able to close the socket
  onReceive(data: Bytes): Promise<boolean>;

  onClose(): Promise<void>;

  onError(error: Error): Promise<void>;

  onCancel(): Promise<void>;
}

export class IOError extends VError {}
