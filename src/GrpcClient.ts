import { PadLocalClient } from "./PadLocalClient";
import { Metadata, CallCredentials, ClientDuplexStream } from "@grpc/grpc-js";
import { IDEMPOTENT_ID_KEY, TRACE_ID_METADATA_KEY } from "./utils/Constant";
import { IPadLocalClient } from "./proto/padlocal_grpc_pb";
import {
  ActionMessage,
  ActionMessageHeader,
  SystemEventRequest,
  WeChatRequest,
  WeChatResponse,
  SystemEventResponse,
} from "./proto/padlocal_pb";
import cryptoRandomString from "crypto-random-string";
import { Message } from "google-protobuf";
import { getPayload, setPayload } from "./utils/ActionMessageUtils";
import { logDebug } from "./utils/log";
import { PromiseCallback } from "./utils/PromiseUtils";
import { Bytes } from "./utils/ByteUtils";
import { WeChatShortLinkProxy } from "./link/WeChatShortLinkProxy";
import { WeChatSocketProxy } from "./link/WeChatSocketProxy";
import VError from "verror";
import { stringifyPB } from "./utils/Utils";
import { PadLocalClientPlugin } from "./PadLocalClientPlugin";

export type OnMessageCallback = (actionMessage: ActionMessage) => void;
export type OnSystemEventCallback = (systemEventRequest: SystemEventRequest) => void;

export class GrpcClient extends PadLocalClientPlugin {
  private static readonly DEFAULT_REQUEST_TIMEOUT = 60 * 1000;

  private _status: Status;
  private _seqId: number = 0;
  private readonly _requestTimeout: number;
  private _grpcStream: ClientDuplexStream<ActionMessage, ActionMessage>;
  private _pendingCallbacks: Map<number, PromiseCallback> = new Map();

  readonly traceId: string;
  onMessageCallback?: OnMessageCallback;
  onSystemEventCallback?: OnSystemEventCallback;

  constructor(
    client: PadLocalClient,
    stub: IPadLocalClient,
    callCredentials: CallCredentials,
    options?: Partial<Options>
  ) {
    super(client);

    this._status = Status.OK;
    this.traceId = cryptoRandomString({ length: 8 });

    this._requestTimeout = options?.requestTimeout || GrpcClient.DEFAULT_REQUEST_TIMEOUT;

    const metaData = new Metadata();
    metaData.set(TRACE_ID_METADATA_KEY, this.traceId);
    if (options?.idempotentId) {
      metaData.set(IDEMPOTENT_ID_KEY, options.idempotentId);
    }

    this._grpcStream = stub.action(metaData, {
      credentials: callCredentials,
      deadline: Date.now() + this._requestTimeout,
    });

    this._grpcStream.on("data", (serverMessage: ActionMessage) => {
      this._onServerMessage(serverMessage).then();
    });

    this._grpcStream.on("end", () => {
      if (this._status !== Status.OK) {
        return;
      }

      this._failAllPendingRequest(Status.SERVER_COMPLETE, new Error("Server complete"));
      this._status = Status.SERVER_COMPLETE;
    });

    this._grpcStream.on("error", (error: Error) => {
      if (this._status !== Status.OK) {
        return;
      }

      this._failAllPendingRequest(Status.SERVER_ERROR, error);

      this._status = Status.SERVER_ERROR;
    });
  }

  async request<REQ extends Message, RES extends Message>(request: REQ): Promise<RES> {
    const subResponseWrap = (await this.subRequest(request, false)) as SubResponseWrap<RES>;
    return subResponseWrap.payload;
  }

  /**
   * @param request: request payload
   * @param sendOnly: if true, do not wait for server's ask, return null immediately
   * @return response
   */
  async subRequest<REQ extends Message, RES extends Message>(
    request: REQ,
    sendOnly: boolean
  ): Promise<SubResponseWrap<RES> | void> {
    return this._sendMessage(request, sendOnly);
  }

  subReply<T extends Message>(ack: number, replay: T): void {
    this._sendMessage(replay, true, ack).then();
  }

  /**
   * reply to ack, and send request need peer ack too
   * @param ack
   * @param request
   */
  async subReplyAndRequest<REQ extends Message, RES extends Message>(
    ack: number,
    request: REQ
  ): Promise<SubResponseWrap<RES>> {
    return (await this._sendMessage(request, false, ack)) as SubResponseWrap<RES>;
  }

  private async _sendMessage<REQ extends Message, RES extends Message>(
    request: REQ,
    sendOnly: boolean,
    ack?: number
  ): Promise<SubResponseWrap<RES> | void> {
    if (sendOnly) {
      this.__sendMessage(request, undefined, ack);
    } else {
      const newSeqId = ++this._seqId;

      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          this._failPendingRequest(newSeqId, new IOError("subRequest timeout"));
        }, this._requestTimeout);

        this._pendingCallbacks.set(newSeqId, new PromiseCallback(resolve, reject, timeoutId));

        this.__sendMessage(request, newSeqId, ack);
      });
    }
  }

  /**
   * @param payload: message payload
   * @param seq: payload action and require ack reply
   * @param ack: reply action and reply #seq payload with ack
   *
   * Example:
   *  ┌───────┬───────┬───────────────────────────────────────────────┐
   *  │  seq  │  ack  │                  description                  │
   *  ├───────┼───────┼───────────────────────────────────────────────┤
   *  │ null  │ null  │send only action, no ack required              │
   *  ├───────┼───────┼───────────────────────────────────────────────┤
   *  │ null  │notnull│reply action, reply to payload that seq == ack │
   *  ├───────┼───────┼───────────────────────────────────────────────┤
   *  │notnull│ null  │payload action, need ack                       │
   *  ├───────┼───────┼───────────────────────────────────────────────┤
   *  │notnull│notnull│reply action, and also need peer to reply      │
   *  └───────┴───────┴───────────────────────────────────────────────┘
   */
  private __sendMessage<T extends Message>(payload: T, seq?: number, ack?: number) {
    if (this._status !== Status.OK && this._status !== Status.SERVER_COMPLETE) {
      throw new SubRequestCancelError(
        this._status,
        undefined,
        "can not send message while stream status is not illegal"
      );
    }

    const actionMessageHeader = new ActionMessageHeader();
    if (seq !== undefined) {
      actionMessageHeader.setSeq(seq);
    }
    if (ack !== undefined) {
      actionMessageHeader.setAck(ack);
    }

    const actionMessage = new ActionMessage();
    actionMessage.setHeader(actionMessageHeader);
    setPayload(actionMessage, payload);

    logDebug(
      `tid:[${
        this.traceId
      }] send event to server, seq:${seq}, ack:${ack}, type: ${actionMessage.getPayloadCase()}, payload: ${stringifyPB(
        payload
      )}`
    );

    this._grpcStream.write(actionMessage);
  }

  private async _onServerMessage(serverMessage: ActionMessage): Promise<void> {
    const seq = serverMessage.getHeader()!.getSeq();
    const ack = serverMessage.getHeader()!.getAck();

    const payload = getPayload(serverMessage);

    logDebug(
      `[tid:${
        this.traceId
      }] receive event from server, seq:${seq} ack:${ack}, type:${serverMessage.getPayloadCase()}, payload:${stringifyPB(
        payload
      )}`
    );

    // server response, execute on stream executor thread directly
    if (ack) {
      this._completePendingRequest(ack, getPayload(serverMessage), seq);
    } else {
      // forward payload to wechat server, and then forward response to our server
      if (serverMessage.getPayloadCase() === ActionMessage.PayloadCase.WECHATREQUEST) {
        try {
          const weChatRequest = serverMessage.getWechatrequest()!;
          // socket is handled differently, since socket is more complex than simple req -> res mode
          if (weChatRequest.getRequestCase() === WeChatRequest.RequestCase.SOCKETREQUEST) {
            const socketRequest = weChatRequest.getSocketrequest()!;
            const socketProxy = new WeChatSocketProxy(this, socketRequest.getHost()!, seq);
            await socketProxy.send(Buffer.from(socketRequest.getPayload()));
          } else {
            const weChatResponse = await this._sendWeChatRequest(serverMessage.getWechatrequest()!);
            this.subReply(seq, weChatResponse);
          }
        } catch (e) {
          this.error(new IOError(e, `[tid:${this.traceId}] Exception while forwarding message to wechat`));
        }
      } else if (serverMessage.getPayloadCase() === ActionMessage.PayloadCase.SYSTEMEVENTREQUEST) {
        this.subReply(seq, new SystemEventResponse());
        this.onSystemEventCallback?.(serverMessage.getSystemeventrequest()!);
      } else {
        this.onMessageCallback?.(serverMessage);
      }
    }
  }

  private _completePendingRequest(ack: number, payload: Message, seq?: number): void {
    const p = this._pendingCallbacks.get(ack);
    this._pendingCallbacks.delete(ack);

    if (!p) {
      return;
    }

    p.resolve({
      ack: seq,
      payload,
    } as SubResponseWrap<Message>);
  }

  private _failPendingRequest(ack: number, error: Error): void {
    const p = this._pendingCallbacks.get(ack);
    this._pendingCallbacks.delete(ack);

    p?.reject(error);
  }

  private _failAllPendingRequest(status: Status, error: Error): void {
    const e = new SubRequestCancelError(status, error);
    for (const [, p] of this._pendingCallbacks.entries()) {
      p.reject(e);
    }

    this._pendingCallbacks.clear();
  }

  private async _sendWeChatRequest(weChatRequest: WeChatRequest): Promise<WeChatResponse> {
    let responseData: Bytes;

    if (weChatRequest.getRequestCase() === WeChatRequest.RequestCase.LONGLINKREQUEST) {
      const longlinkProxy = await this.client.getLongLinkProxy();
      const longLinkRequest = weChatRequest.getLonglinkrequest()!;
      responseData = await longlinkProxy.send(longLinkRequest.getSeq(), Buffer.from(longLinkRequest.getPayload()));
    } else if (weChatRequest.getRequestCase() === WeChatRequest.RequestCase.SHORTLINKREQUEST) {
      const shortLinkRequest = weChatRequest.getShortlinkrequest()!;
      const shortLinkProxy = new WeChatShortLinkProxy(
        shortLinkRequest.getHost()!.getHost(),
        shortLinkRequest.getHost()!.getPort(),
        this.traceId
      );
      responseData = await shortLinkProxy.send(shortLinkRequest.getPath(), Buffer.from(shortLinkRequest.getPayload()));
    } else {
      throw new Error(`unsupported wechat request case: ${weChatRequest.getRequestCase()}`);
    }

    return new WeChatResponse().setPayload(responseData);
  }

  error(e: Error): void {
    if (this._status !== Status.OK) {
      return;
    }

    this._failAllPendingRequest(Status.CLIENT_ERROR, e);

    // set before requestObserver.onError, because requestObserver.onError will cause onError callback
    this._status = Status.CLIENT_ERROR;

    // whatever exception called in client.onError, server will receive "cancelled before receiving half close" error.
    this._grpcStream.cancel();
  }

  complete(): void {
    if (this._status !== Status.OK) {
      return;
    }

    this._failAllPendingRequest(Status.CLIENT_COMPLETE, new Error("Grpc client complete"));

    // set before requestObserver.onCompleted, because requestObserver.onCompleted will cause onCompleted callback
    this._status = Status.CLIENT_COMPLETE;

    this._grpcStream.end();
  }
}

export interface Options {
  requestTimeout: number;
  idempotentId: string;
}

export enum Status {
  OK,
  SERVER_ERROR,
  SERVER_COMPLETE,
  CLIENT_ERROR,
  CLIENT_COMPLETE,
}

export class SubRequestCancelError extends VError {
  reason: Status;

  constructor(reason: Status, cause?: Error, message?: string) {
    super(`sub request has been cancelled reason: ${reason}, ${message || ""}`, cause);
    this.reason = reason;
  }
}

export class IOError extends VError {}

export interface SubResponseWrap<T extends Message> {
  payload: T;
  ack?: number;
}
