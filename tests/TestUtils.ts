import { PadLocalClient } from "../src/PadLocalClient";
import { Utils } from "../src/utils/Utils";
import {
  LoginPolicy,
  LoginType,
  QRCodeEvent,
  SyncEvent,
} from "../src/proto/padlocal_pb";
import config from "config";

export namespace TestUtils {
  export async function prepareSignedOnClient(): Promise<PadLocalClient> {
    const host: string = config.get("padLocal.host");
    const port: number = config.get("padLocal.port");
    const token: string = config.get("padLocal.token");
    const padLocalClient = new PadLocalClient(host, port, token);

    await padLocalClient.api.login(LoginPolicy.DEFAULT, {
      onLoginStart: (loginType: LoginType) => {
        console.log(`start login with type: ${loginType}`);
      },

      onOneClickEvent: (oneClickEvent: QRCodeEvent) => {
        console.log(`on one click event: ${Utils.stringifyPB(oneClickEvent)}`);
      },

      onQrCodeEvent: (qrCodeEvent: QRCodeEvent) => {
        console.log(`on qr code event: ${Utils.stringifyPB(qrCodeEvent)}`);
      },

      onSync: (syncEvent: SyncEvent) => {
        for (const contact of syncEvent.getContactList()) {
          console.log(`login on sync contact: ${Utils.stringifyPB(contact)}`);
        }

        for (const message of syncEvent.getMessageList()) {
          console.log(`login on sync message: ${Utils.stringifyPB(message)}`);
        }
      },
    });

    console.log("login succes");

    return padLocalClient;
  }
}