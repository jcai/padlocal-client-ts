// source: padlocal.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.padlocal.AcceptUserRequest', null, global);
goog.exportSymbol('proto.padlocal.AcceptUserResponse', null, global);
goog.exportSymbol('proto.padlocal.ActionMessage', null, global);
goog.exportSymbol('proto.padlocal.ActionMessage.PayloadCase', null, global);
goog.exportSymbol('proto.padlocal.ActionMessageHeader', null, global);
goog.exportSymbol('proto.padlocal.AddChatRoomMemberRequest', null, global);
goog.exportSymbol('proto.padlocal.AddChatRoomMemberResponse', null, global);
goog.exportSymbol('proto.padlocal.AddContactRequest', null, global);
goog.exportSymbol('proto.padlocal.AddContactResponse', null, global);
goog.exportSymbol('proto.padlocal.AddContactScene', null, global);
goog.exportSymbol('proto.padlocal.AddLabelRequest', null, global);
goog.exportSymbol('proto.padlocal.AddLabelResponse', null, global);
goog.exportSymbol('proto.padlocal.AppMessageLink', null, global);
goog.exportSymbol('proto.padlocal.AppMessageMiniProgram', null, global);
goog.exportSymbol('proto.padlocal.AuthInfo', null, global);
goog.exportSymbol('proto.padlocal.CdnRequest', null, global);
goog.exportSymbol('proto.padlocal.ChatRoomMember', null, global);
goog.exportSymbol('proto.padlocal.Contact', null, global);
goog.exportSymbol('proto.padlocal.CreateChatRoomRequest', null, global);
goog.exportSymbol('proto.padlocal.CreateChatRoomResponse', null, global);
goog.exportSymbol('proto.padlocal.DeleteChatRoomMemberRequest', null, global);
goog.exportSymbol('proto.padlocal.DeleteChatRoomMemberResponse', null, global);
goog.exportSymbol('proto.padlocal.DeleteContactRequest', null, global);
goog.exportSymbol('proto.padlocal.DeleteContactResponse', null, global);
goog.exportSymbol('proto.padlocal.ForwardMessageRequest', null, global);
goog.exportSymbol('proto.padlocal.ForwardMessageResponse', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomMemberRequest', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomMemberResponse', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomMembersRequest', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomMembersResponse', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomQrCodeRequest', null, global);
goog.exportSymbol('proto.padlocal.GetChatRoomQrCodeResponse', null, global);
goog.exportSymbol('proto.padlocal.GetContactQRCodeRequest', null, global);
goog.exportSymbol('proto.padlocal.GetContactQRCodeResponse', null, global);
goog.exportSymbol('proto.padlocal.GetContactRequest', null, global);
goog.exportSymbol('proto.padlocal.GetContactResponse', null, global);
goog.exportSymbol('proto.padlocal.GetLabelListRequest', null, global);
goog.exportSymbol('proto.padlocal.GetLabelListResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageAttachRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageAttachResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageAttachThumbRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageAttachThumbResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageImageRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageImageResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVideoRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVideoResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVideoThumbRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVideoThumbResponse', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVoiceRequest', null, global);
goog.exportSymbol('proto.padlocal.GetMessageVoiceResponse', null, global);
goog.exportSymbol('proto.padlocal.Host', null, global);
goog.exportSymbol('proto.padlocal.ImageType', null, global);
goog.exportSymbol('proto.padlocal.InviteChatRoomMemberRequest', null, global);
goog.exportSymbol('proto.padlocal.InviteChatRoomMemberResponse', null, global);
goog.exportSymbol('proto.padlocal.Label', null, global);
goog.exportSymbol('proto.padlocal.LoginPolicy', null, global);
goog.exportSymbol('proto.padlocal.LoginRequest', null, global);
goog.exportSymbol('proto.padlocal.LoginResponse', null, global);
goog.exportSymbol('proto.padlocal.LoginStatus', null, global);
goog.exportSymbol('proto.padlocal.LoginType', null, global);
goog.exportSymbol('proto.padlocal.LoginUpdateEvent', null, global);
goog.exportSymbol('proto.padlocal.LoginUpdateEvent.PayloadCase', null, global);
goog.exportSymbol('proto.padlocal.LogoutRequest', null, global);
goog.exportSymbol('proto.padlocal.LogoutResponse', null, global);
goog.exportSymbol('proto.padlocal.LongLinkHeartBeatRequest', null, global);
goog.exportSymbol('proto.padlocal.LongLinkHeartBeatResponse', null, global);
goog.exportSymbol('proto.padlocal.LongLinkPacket', null, global);
goog.exportSymbol('proto.padlocal.LongLinkPacket.TypeCase', null, global);
goog.exportSymbol('proto.padlocal.LongLinkPacketNormal', null, global);
goog.exportSymbol('proto.padlocal.LongLinkPacketPush', null, global);
goog.exportSymbol('proto.padlocal.LongLinkPacketPushType', null, global);
goog.exportSymbol('proto.padlocal.LongLinkUnpackRequest', null, global);
goog.exportSymbol('proto.padlocal.LongLinkUnpackResponse', null, global);
goog.exportSymbol('proto.padlocal.Message', null, global);
goog.exportSymbol('proto.padlocal.QRCodeEvent', null, global);
goog.exportSymbol('proto.padlocal.QRCodeStatus', null, global);
goog.exportSymbol('proto.padlocal.RemoveLabelRequest', null, global);
goog.exportSymbol('proto.padlocal.RemoveLabelResponse', null, global);
goog.exportSymbol('proto.padlocal.SearchContactRequest', null, global);
goog.exportSymbol('proto.padlocal.SearchContactResponse', null, global);
goog.exportSymbol('proto.padlocal.SendAppMessageRequest', null, global);
goog.exportSymbol('proto.padlocal.SendAppMessageRequest.PayloadCase', null, global);
goog.exportSymbol('proto.padlocal.SendAppMessageResponse', null, global);
goog.exportSymbol('proto.padlocal.SendImageMessageRequest', null, global);
goog.exportSymbol('proto.padlocal.SendImageMessageResponse', null, global);
goog.exportSymbol('proto.padlocal.SendTextMessageRequest', null, global);
goog.exportSymbol('proto.padlocal.SendTextMessageResponse', null, global);
goog.exportSymbol('proto.padlocal.SetChatRoomAnnouncementRequest', null, global);
goog.exportSymbol('proto.padlocal.SetChatRoomAnnouncementResponse', null, global);
goog.exportSymbol('proto.padlocal.SetChatRoomNameRequest', null, global);
goog.exportSymbol('proto.padlocal.SetChatRoomNameResponse', null, global);
goog.exportSymbol('proto.padlocal.SetContactLabelRequest', null, global);
goog.exportSymbol('proto.padlocal.SetContactLabelResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsForwardMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsForwardMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsGetMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsGetMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsGetTimelineRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsGetTimelineResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsGetUserPageRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsGetUserPageResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsImageUrl', null, global);
goog.exportSymbol('proto.padlocal.SnsLikeMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsLikeMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsMakeMomentPrivateRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsMakeMomentPrivateResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsMakeMomentPublicRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsMakeMomentPublicResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsMoment', null, global);
goog.exportSymbol('proto.padlocal.SnsMomentComment', null, global);
goog.exportSymbol('proto.padlocal.SnsRemoveMomentCommentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsRemoveMomentCommentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsRemoveMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsRemoveMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsSendCommentReplyTo', null, global);
goog.exportSymbol('proto.padlocal.SnsSendCommentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsSendCommentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentImages', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentOptions', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentRequest.PayloadCase', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentText', null, global);
goog.exportSymbol('proto.padlocal.SnsSendMomentUrl', null, global);
goog.exportSymbol('proto.padlocal.SnsUnlikeMomentRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsUnlikeMomentResponse', null, global);
goog.exportSymbol('proto.padlocal.SnsUploadImageRequest', null, global);
goog.exportSymbol('proto.padlocal.SnsUploadImageResponse', null, global);
goog.exportSymbol('proto.padlocal.SyncContactRequest', null, global);
goog.exportSymbol('proto.padlocal.SyncContactResponse', null, global);
goog.exportSymbol('proto.padlocal.SyncEvent', null, global);
goog.exportSymbol('proto.padlocal.SyncRequest', null, global);
goog.exportSymbol('proto.padlocal.SyncResponse', null, global);
goog.exportSymbol('proto.padlocal.SystemEventRequest', null, global);
goog.exportSymbol('proto.padlocal.SystemEventRequest.PayloadCase', null, global);
goog.exportSymbol('proto.padlocal.SystemEventResponse', null, global);
goog.exportSymbol('proto.padlocal.SystemEventType', null, global);
goog.exportSymbol('proto.padlocal.SystemKickOutEvent', null, global);
goog.exportSymbol('proto.padlocal.UpdateSelfNickNameRequest', null, global);
goog.exportSymbol('proto.padlocal.UpdateSelfNickNameResponse', null, global);
goog.exportSymbol('proto.padlocal.WeChatRequest', null, global);
goog.exportSymbol('proto.padlocal.WeChatRequestChannel', null, global);
goog.exportSymbol('proto.padlocal.WeChatResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.ActionMessageHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.ActionMessageHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.ActionMessageHeader.displayName = 'proto.padlocal.ActionMessageHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.ActionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.padlocal.ActionMessage.oneofGroups_);
};
goog.inherits(proto.padlocal.ActionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.ActionMessage.displayName = 'proto.padlocal.ActionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.WeChatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.WeChatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.WeChatRequest.displayName = 'proto.padlocal.WeChatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.WeChatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.WeChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.WeChatResponse.displayName = 'proto.padlocal.WeChatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkUnpackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LongLinkUnpackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkUnpackRequest.displayName = 'proto.padlocal.LongLinkUnpackRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkUnpackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.LongLinkUnpackResponse.repeatedFields_, null);
};
goog.inherits(proto.padlocal.LongLinkUnpackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkUnpackResponse.displayName = 'proto.padlocal.LongLinkUnpackResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.padlocal.LongLinkPacket.oneofGroups_);
};
goog.inherits(proto.padlocal.LongLinkPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkPacket.displayName = 'proto.padlocal.LongLinkPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkPacketNormal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LongLinkPacketNormal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkPacketNormal.displayName = 'proto.padlocal.LongLinkPacketNormal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkPacketPush = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LongLinkPacketPush, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkPacketPush.displayName = 'proto.padlocal.LongLinkPacketPush';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LoginRequest.displayName = 'proto.padlocal.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LoginResponse.displayName = 'proto.padlocal.LoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LoginUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.padlocal.LoginUpdateEvent.oneofGroups_);
};
goog.inherits(proto.padlocal.LoginUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LoginUpdateEvent.displayName = 'proto.padlocal.LoginUpdateEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.QRCodeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.QRCodeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.QRCodeEvent.displayName = 'proto.padlocal.QRCodeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AuthInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AuthInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AuthInfo.displayName = 'proto.padlocal.AuthInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LogoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LogoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LogoutRequest.displayName = 'proto.padlocal.LogoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LogoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LogoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LogoutResponse.displayName = 'proto.padlocal.LogoutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkHeartBeatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LongLinkHeartBeatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkHeartBeatRequest.displayName = 'proto.padlocal.LongLinkHeartBeatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.LongLinkHeartBeatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.LongLinkHeartBeatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.LongLinkHeartBeatResponse.displayName = 'proto.padlocal.LongLinkHeartBeatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendTextMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SendTextMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SendTextMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendTextMessageRequest.displayName = 'proto.padlocal.SendTextMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendTextMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SendTextMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendTextMessageResponse.displayName = 'proto.padlocal.SendTextMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendImageMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SendImageMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendImageMessageRequest.displayName = 'proto.padlocal.SendImageMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendImageMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SendImageMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendImageMessageResponse.displayName = 'proto.padlocal.SendImageMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendAppMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.padlocal.SendAppMessageRequest.oneofGroups_);
};
goog.inherits(proto.padlocal.SendAppMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendAppMessageRequest.displayName = 'proto.padlocal.SendAppMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AppMessageLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AppMessageLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AppMessageLink.displayName = 'proto.padlocal.AppMessageLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AppMessageMiniProgram = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AppMessageMiniProgram, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AppMessageMiniProgram.displayName = 'proto.padlocal.AppMessageMiniProgram';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SendAppMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SendAppMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SendAppMessageResponse.displayName = 'proto.padlocal.SendAppMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AcceptUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AcceptUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AcceptUserRequest.displayName = 'proto.padlocal.AcceptUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AcceptUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AcceptUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AcceptUserResponse.displayName = 'proto.padlocal.AcceptUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddContactRequest.displayName = 'proto.padlocal.AddContactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddContactResponse.displayName = 'proto.padlocal.AddContactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.DeleteContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.DeleteContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.DeleteContactRequest.displayName = 'proto.padlocal.DeleteContactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.DeleteContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.DeleteContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.DeleteContactResponse.displayName = 'proto.padlocal.DeleteContactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetContactRequest.displayName = 'proto.padlocal.GetContactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetContactResponse.displayName = 'proto.padlocal.GetContactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetContactQRCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetContactQRCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetContactQRCodeRequest.displayName = 'proto.padlocal.GetContactQRCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetContactQRCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetContactQRCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetContactQRCodeResponse.displayName = 'proto.padlocal.GetContactQRCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SearchContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SearchContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SearchContactRequest.displayName = 'proto.padlocal.SearchContactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SearchContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SearchContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SearchContactResponse.displayName = 'proto.padlocal.SearchContactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.UpdateSelfNickNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.UpdateSelfNickNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.UpdateSelfNickNameRequest.displayName = 'proto.padlocal.UpdateSelfNickNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.UpdateSelfNickNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.UpdateSelfNickNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.UpdateSelfNickNameResponse.displayName = 'proto.padlocal.UpdateSelfNickNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.CreateChatRoomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.CreateChatRoomRequest.repeatedFields_, null);
};
goog.inherits(proto.padlocal.CreateChatRoomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.CreateChatRoomRequest.displayName = 'proto.padlocal.CreateChatRoomRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.CreateChatRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.CreateChatRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.CreateChatRoomResponse.displayName = 'proto.padlocal.CreateChatRoomResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetChatRoomMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomMembersRequest.displayName = 'proto.padlocal.GetChatRoomMembersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.GetChatRoomMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.padlocal.GetChatRoomMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomMembersResponse.displayName = 'proto.padlocal.GetChatRoomMembersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.ChatRoomMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.ChatRoomMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.ChatRoomMember.displayName = 'proto.padlocal.ChatRoomMember';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomQrCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetChatRoomQrCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomQrCodeRequest.displayName = 'proto.padlocal.GetChatRoomQrCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomQrCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetChatRoomQrCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomQrCodeResponse.displayName = 'proto.padlocal.GetChatRoomQrCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetChatRoomMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomMemberRequest.displayName = 'proto.padlocal.GetChatRoomMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetChatRoomMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetChatRoomMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetChatRoomMemberResponse.displayName = 'proto.padlocal.GetChatRoomMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetChatRoomAnnouncementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SetChatRoomAnnouncementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetChatRoomAnnouncementRequest.displayName = 'proto.padlocal.SetChatRoomAnnouncementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetChatRoomAnnouncementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SetChatRoomAnnouncementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetChatRoomAnnouncementResponse.displayName = 'proto.padlocal.SetChatRoomAnnouncementResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddChatRoomMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddChatRoomMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddChatRoomMemberRequest.displayName = 'proto.padlocal.AddChatRoomMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddChatRoomMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddChatRoomMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddChatRoomMemberResponse.displayName = 'proto.padlocal.AddChatRoomMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.InviteChatRoomMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.InviteChatRoomMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.InviteChatRoomMemberRequest.displayName = 'proto.padlocal.InviteChatRoomMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.InviteChatRoomMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.InviteChatRoomMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.InviteChatRoomMemberResponse.displayName = 'proto.padlocal.InviteChatRoomMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.DeleteChatRoomMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.DeleteChatRoomMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.DeleteChatRoomMemberRequest.displayName = 'proto.padlocal.DeleteChatRoomMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.DeleteChatRoomMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.DeleteChatRoomMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.DeleteChatRoomMemberResponse.displayName = 'proto.padlocal.DeleteChatRoomMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetChatRoomNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SetChatRoomNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetChatRoomNameRequest.displayName = 'proto.padlocal.SetChatRoomNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetChatRoomNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SetChatRoomNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetChatRoomNameResponse.displayName = 'proto.padlocal.SetChatRoomNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.padlocal.SnsSendMomentRequest.oneofGroups_);
};
goog.inherits(proto.padlocal.SnsSendMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentRequest.displayName = 'proto.padlocal.SnsSendMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendMomentText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentText.displayName = 'proto.padlocal.SnsSendMomentText';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentImages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SnsSendMomentImages.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SnsSendMomentImages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentImages.displayName = 'proto.padlocal.SnsSendMomentImages';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendMomentUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentUrl.displayName = 'proto.padlocal.SnsSendMomentUrl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentResponse.displayName = 'proto.padlocal.SnsSendMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsImageUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsImageUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsImageUrl.displayName = 'proto.padlocal.SnsImageUrl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendMomentOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SnsSendMomentOptions.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SnsSendMomentOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendMomentOptions.displayName = 'proto.padlocal.SnsSendMomentOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsForwardMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsForwardMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsForwardMomentRequest.displayName = 'proto.padlocal.SnsForwardMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsForwardMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsForwardMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsForwardMomentResponse.displayName = 'proto.padlocal.SnsForwardMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetUserPageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsGetUserPageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetUserPageRequest.displayName = 'proto.padlocal.SnsGetUserPageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetUserPageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SnsGetUserPageResponse.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SnsGetUserPageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetUserPageResponse.displayName = 'proto.padlocal.SnsGetUserPageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendCommentRequest.displayName = 'proto.padlocal.SnsSendCommentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendCommentReplyTo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendCommentReplyTo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendCommentReplyTo.displayName = 'proto.padlocal.SnsSendCommentReplyTo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsSendCommentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsSendCommentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsSendCommentResponse.displayName = 'proto.padlocal.SnsSendCommentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsUploadImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsUploadImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsUploadImageRequest.displayName = 'proto.padlocal.SnsUploadImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsUploadImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsUploadImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsUploadImageResponse.displayName = 'proto.padlocal.SnsUploadImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetTimelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsGetTimelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetTimelineRequest.displayName = 'proto.padlocal.SnsGetTimelineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetTimelineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SnsGetTimelineResponse.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SnsGetTimelineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetTimelineResponse.displayName = 'proto.padlocal.SnsGetTimelineResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsGetMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetMomentRequest.displayName = 'proto.padlocal.SnsGetMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsGetMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsGetMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsGetMomentResponse.displayName = 'proto.padlocal.SnsGetMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsLikeMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsLikeMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsLikeMomentRequest.displayName = 'proto.padlocal.SnsLikeMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsLikeMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsLikeMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsLikeMomentResponse.displayName = 'proto.padlocal.SnsLikeMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsUnlikeMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsUnlikeMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsUnlikeMomentRequest.displayName = 'proto.padlocal.SnsUnlikeMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsUnlikeMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsUnlikeMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsUnlikeMomentResponse.displayName = 'proto.padlocal.SnsUnlikeMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsRemoveMomentCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsRemoveMomentCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsRemoveMomentCommentRequest.displayName = 'proto.padlocal.SnsRemoveMomentCommentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsRemoveMomentCommentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsRemoveMomentCommentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsRemoveMomentCommentResponse.displayName = 'proto.padlocal.SnsRemoveMomentCommentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMakeMomentPrivateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsMakeMomentPrivateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMakeMomentPrivateRequest.displayName = 'proto.padlocal.SnsMakeMomentPrivateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMakeMomentPrivateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsMakeMomentPrivateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMakeMomentPrivateResponse.displayName = 'proto.padlocal.SnsMakeMomentPrivateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMakeMomentPublicRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsMakeMomentPublicRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMakeMomentPublicRequest.displayName = 'proto.padlocal.SnsMakeMomentPublicRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMakeMomentPublicResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsMakeMomentPublicResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMakeMomentPublicResponse.displayName = 'proto.padlocal.SnsMakeMomentPublicResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsRemoveMomentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsRemoveMomentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsRemoveMomentRequest.displayName = 'proto.padlocal.SnsRemoveMomentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsRemoveMomentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsRemoveMomentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsRemoveMomentResponse.displayName = 'proto.padlocal.SnsRemoveMomentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddLabelRequest.displayName = 'proto.padlocal.AddLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.AddLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.AddLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.AddLabelResponse.displayName = 'proto.padlocal.AddLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.RemoveLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.RemoveLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.RemoveLabelRequest.displayName = 'proto.padlocal.RemoveLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.RemoveLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.RemoveLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.RemoveLabelResponse.displayName = 'proto.padlocal.RemoveLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetLabelListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetLabelListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetLabelListRequest.displayName = 'proto.padlocal.GetLabelListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetLabelListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.GetLabelListResponse.repeatedFields_, null);
};
goog.inherits(proto.padlocal.GetLabelListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetLabelListResponse.displayName = 'proto.padlocal.GetLabelListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.Label.displayName = 'proto.padlocal.Label';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetContactLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SetContactLabelRequest.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SetContactLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetContactLabelRequest.displayName = 'proto.padlocal.SetContactLabelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SetContactLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SetContactLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SetContactLabelResponse.displayName = 'proto.padlocal.SetContactLabelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SyncEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SyncEvent.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SyncEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SyncEvent.displayName = 'proto.padlocal.SyncEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.Contact.repeatedFields_, null);
};
goog.inherits(proto.padlocal.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.Contact.displayName = 'proto.padlocal.Contact';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.Message.repeatedFields_, null);
};
goog.inherits(proto.padlocal.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.Message.displayName = 'proto.padlocal.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.Host = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.Host, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.Host.displayName = 'proto.padlocal.Host';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMoment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.padlocal.SnsMoment.repeatedFields_, null);
};
goog.inherits(proto.padlocal.SnsMoment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMoment.displayName = 'proto.padlocal.SnsMoment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SnsMomentComment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SnsMomentComment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SnsMomentComment.displayName = 'proto.padlocal.SnsMomentComment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SystemKickOutEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SystemKickOutEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SystemKickOutEvent.displayName = 'proto.padlocal.SystemKickOutEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SystemEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.padlocal.SystemEventRequest.oneofGroups_);
};
goog.inherits(proto.padlocal.SystemEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SystemEventRequest.displayName = 'proto.padlocal.SystemEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SystemEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SystemEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SystemEventResponse.displayName = 'proto.padlocal.SystemEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SyncRequest.displayName = 'proto.padlocal.SyncRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SyncResponse.displayName = 'proto.padlocal.SyncResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageImageRequest.displayName = 'proto.padlocal.GetMessageImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageImageResponse.displayName = 'proto.padlocal.GetMessageImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.CdnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.CdnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.CdnRequest.displayName = 'proto.padlocal.CdnRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SyncContactRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SyncContactRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SyncContactRequest.displayName = 'proto.padlocal.SyncContactRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.SyncContactResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.SyncContactResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.SyncContactResponse.displayName = 'proto.padlocal.SyncContactResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVoiceRequest.displayName = 'proto.padlocal.GetMessageVoiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVoiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVoiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVoiceResponse.displayName = 'proto.padlocal.GetMessageVoiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVideoThumbRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVideoThumbRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVideoThumbRequest.displayName = 'proto.padlocal.GetMessageVideoThumbRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVideoThumbResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVideoThumbResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVideoThumbResponse.displayName = 'proto.padlocal.GetMessageVideoThumbResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVideoRequest.displayName = 'proto.padlocal.GetMessageVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageVideoResponse.displayName = 'proto.padlocal.GetMessageVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageAttachRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageAttachRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageAttachRequest.displayName = 'proto.padlocal.GetMessageAttachRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageAttachResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageAttachResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageAttachResponse.displayName = 'proto.padlocal.GetMessageAttachResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageAttachThumbRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageAttachThumbRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageAttachThumbRequest.displayName = 'proto.padlocal.GetMessageAttachThumbRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.GetMessageAttachThumbResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.GetMessageAttachThumbResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.GetMessageAttachThumbResponse.displayName = 'proto.padlocal.GetMessageAttachThumbResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.ForwardMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.ForwardMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.ForwardMessageRequest.displayName = 'proto.padlocal.ForwardMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.padlocal.ForwardMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.padlocal.ForwardMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.padlocal.ForwardMessageResponse.displayName = 'proto.padlocal.ForwardMessageResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.ActionMessageHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.ActionMessageHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.ActionMessageHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ActionMessageHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ack: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.ActionMessageHeader}
 */
proto.padlocal.ActionMessageHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.ActionMessageHeader;
  return proto.padlocal.ActionMessageHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.ActionMessageHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.ActionMessageHeader}
 */
proto.padlocal.ActionMessageHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAck(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.ActionMessageHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.ActionMessageHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.ActionMessageHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ActionMessageHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAck();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 seq = 1;
 * @return {number}
 */
proto.padlocal.ActionMessageHeader.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.ActionMessageHeader} returns this
 */
proto.padlocal.ActionMessageHeader.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 ack = 2;
 * @return {number}
 */
proto.padlocal.ActionMessageHeader.prototype.getAck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.ActionMessageHeader} returns this
 */
proto.padlocal.ActionMessageHeader.prototype.setAck = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.ActionMessage.oneofGroups_ = [[10,11,12,13,14,15,16,17,100,101,102,200,201,202,203,204,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,600,601,602,603,604,605,606,607,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725]];

/**
 * @enum {number}
 */
proto.padlocal.ActionMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  WECHATREQUEST: 10,
  WECHATRESPONSE: 11,
  SYSTEMEVENTREQUEST: 12,
  SYSTEMEVENTRESPONSE: 13,
  LONGLINKUNPACKREQUEST: 14,
  LONGLINKUNPACKRESPONSE: 15,
  LONGLINKHEARTBEATREQUEST: 16,
  LONGLINKHEARTBEATRESPONSE: 17,
  SYNCREQUEST: 100,
  SYNCRESPONSE: 101,
  SYNCEVENT: 102,
  LOGINREQUEST: 200,
  LOGINUPDATEEVENT: 201,
  LOGINRESPONSE: 202,
  LOGOUTREQUEST: 203,
  LOGOUTRESPONSE: 204,
  SENDTEXTMESSAGEREQUEST: 300,
  SENDTEXTMESSAGERESPONSE: 301,
  SENDIMAGEMESSAGEREQUEST: 302,
  SENDIMAGEMESSAGERESPONSE: 303,
  SENDAPPMESSAGEREQUEST: 304,
  SENDAPPMESSAGERESPONSE: 305,
  GETMESSAGEIMAGEREQUEST: 306,
  GETMESSAGEIMAGERESPONSE: 307,
  GETMESSAGEVOICEREQUEST: 308,
  GETMESSAGEVOICERESPONSE: 309,
  GETMESSAGEVIDEOTHUMBREQUEST: 310,
  GETMESSAGEVIDEOTHUMBRESPONSE: 311,
  GETMESSAGEVIDEOREQUEST: 312,
  GETMESSAGEVIDEORESPONSE: 313,
  GETMESSAGEATTACHREQUEST: 314,
  GETMESSAGEATTACHRESPONSE: 315,
  FORWARDMESSAGEREQUEST: 316,
  FORWARDMESSAGERESPONSE: 317,
  GETMESSAGEATTACHTHUMBREQUEST: 318,
  GETMESSAGEATTACHTHUMBRESPONSE: 319,
  SYNCCONTACTREQUEST: 400,
  SYNCCONTACTRESPONSE: 401,
  ACCEPTUSERREQUEST: 402,
  ACCEPTUSERRESPONSE: 403,
  ADDCONTACTREQUEST: 404,
  ADDCONTACTRESPONSE: 405,
  DELETECONTACTREQUEST: 406,
  DELETECONTACTRESPONSE: 407,
  GETCONTACTREQUEST: 408,
  GETCONTACTRESPONSE: 409,
  GETCONTACTQRCODEREQUEST: 410,
  GETCONTACTQRCODERESPONSE: 411,
  SEARCHCONTACTREQUEST: 412,
  SEARCHCONTACTRESPONSE: 413,
  UPDATESELFNICKNAMEREQUEST: 414,
  UPDATESELFNICKNAMERESPONSE: 415,
  CREATECHATROOMREQUEST: 500,
  CREATECHATROOMRESPONSE: 501,
  GETCHATROOMMEMBERSREQUEST: 502,
  GETCHATROOMMEMBERSRESPONSE: 503,
  GETCHATROOMQRCODEREQUEST: 504,
  GETCHATROOMQRCODERESPONSE: 505,
  GETCHATROOMMEMBERREQUEST: 506,
  GETCHATROOMMEMBERRESPONSE: 507,
  SETCHATROOMANNOUNCEMENTREQUEST: 508,
  SETCHATROOMANNOUNCEMENTRESPONSE: 509,
  ADDCHATROOMMEMBERREQUEST: 510,
  ADDCHATROOMMEMBERRESPONSE: 511,
  INVITECHATROOMMEMBERREQUEST: 512,
  INVITECHATROOMMEMBERRESPONSE: 513,
  DELETECHATROOMMEMBERREQUEST: 514,
  DELETECHATROOMMEMBERRESPONSE: 515,
  SETCHATROOMNAMEREQUEST: 516,
  SETCHATROOMNAMERESPONSE: 517,
  ADDLABELREQUEST: 600,
  ADDLABELRESPONSE: 601,
  REMOVELABELREQUEST: 602,
  REMOVELABELRESPONSE: 603,
  GETLABELLISTREQUEST: 604,
  GETLABELLISTRESPONSE: 605,
  SETCONTACTLABELREQUEST: 606,
  SETCONTACTLABELRESPONSE: 607,
  SNSSENDMOMENTREQUEST: 700,
  SNSSENDMOMENTRESPONSE: 701,
  SNSFORWARDMOMENTREQUEST: 702,
  SNSFORWARDMOMENTRESPONSE: 703,
  SNSGETUSERPAGEREQUEST: 704,
  SNSGETUSERPAGERESPONSE: 705,
  SNSGETTIMELINEREQUEST: 706,
  SNSGETTIMELINERESPONSE: 707,
  SNSGETMOMENTREQUEST: 708,
  SNSGETMOMENTRESPONSE: 709,
  SNSSENDCOMMENTREQUEST: 710,
  SNSSENDCOMMENTRESPONSE: 711,
  SNSUPLOADIMAGEREQUEST: 712,
  SNSUPLOADIMAGERESPONSE: 713,
  SNSLIKEMOMENTREQUEST: 714,
  SNSLIKEMOMENTRESPONSE: 715,
  SNSUNLIKEMOMENTREQUEST: 716,
  SNSUNLIKEMOMENTRESPONSE: 717,
  SNSREMOVEMOMENTCOMMENTREQUEST: 718,
  SNSREMOVEMOMENTCOMMENTRESPONSE: 719,
  SNSMAKEMOMENTPRIVATEREQUEST: 720,
  SNSMAKEMOMENTPRIVATERESPONSE: 721,
  SNSMAKEMOMENTPUBLICREQUEST: 722,
  SNSMAKEMOMENTPUBLICRESPONSE: 723,
  SNSREMOVEMOMENTREQUEST: 724,
  SNSREMOVEMOMENTRESPONSE: 725
};

/**
 * @return {proto.padlocal.ActionMessage.PayloadCase}
 */
proto.padlocal.ActionMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.padlocal.ActionMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.ActionMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.ActionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.ActionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.ActionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ActionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.padlocal.ActionMessageHeader.toObject(includeInstance, f),
    wechatrequest: (f = msg.getWechatrequest()) && proto.padlocal.WeChatRequest.toObject(includeInstance, f),
    wechatresponse: (f = msg.getWechatresponse()) && proto.padlocal.WeChatResponse.toObject(includeInstance, f),
    systemeventrequest: (f = msg.getSystemeventrequest()) && proto.padlocal.SystemEventRequest.toObject(includeInstance, f),
    systemeventresponse: (f = msg.getSystemeventresponse()) && proto.padlocal.SystemEventResponse.toObject(includeInstance, f),
    longlinkunpackrequest: (f = msg.getLonglinkunpackrequest()) && proto.padlocal.LongLinkUnpackRequest.toObject(includeInstance, f),
    longlinkunpackresponse: (f = msg.getLonglinkunpackresponse()) && proto.padlocal.LongLinkUnpackResponse.toObject(includeInstance, f),
    longlinkheartbeatrequest: (f = msg.getLonglinkheartbeatrequest()) && proto.padlocal.LongLinkHeartBeatRequest.toObject(includeInstance, f),
    longlinkheartbeatresponse: (f = msg.getLonglinkheartbeatresponse()) && proto.padlocal.LongLinkHeartBeatResponse.toObject(includeInstance, f),
    syncrequest: (f = msg.getSyncrequest()) && proto.padlocal.SyncRequest.toObject(includeInstance, f),
    syncresponse: (f = msg.getSyncresponse()) && proto.padlocal.SyncResponse.toObject(includeInstance, f),
    syncevent: (f = msg.getSyncevent()) && proto.padlocal.SyncEvent.toObject(includeInstance, f),
    loginrequest: (f = msg.getLoginrequest()) && proto.padlocal.LoginRequest.toObject(includeInstance, f),
    loginupdateevent: (f = msg.getLoginupdateevent()) && proto.padlocal.LoginUpdateEvent.toObject(includeInstance, f),
    loginresponse: (f = msg.getLoginresponse()) && proto.padlocal.LoginResponse.toObject(includeInstance, f),
    logoutrequest: (f = msg.getLogoutrequest()) && proto.padlocal.LogoutRequest.toObject(includeInstance, f),
    logoutresponse: (f = msg.getLogoutresponse()) && proto.padlocal.LogoutResponse.toObject(includeInstance, f),
    sendtextmessagerequest: (f = msg.getSendtextmessagerequest()) && proto.padlocal.SendTextMessageRequest.toObject(includeInstance, f),
    sendtextmessageresponse: (f = msg.getSendtextmessageresponse()) && proto.padlocal.SendTextMessageResponse.toObject(includeInstance, f),
    sendimagemessagerequest: (f = msg.getSendimagemessagerequest()) && proto.padlocal.SendImageMessageRequest.toObject(includeInstance, f),
    sendimagemessageresponse: (f = msg.getSendimagemessageresponse()) && proto.padlocal.SendImageMessageResponse.toObject(includeInstance, f),
    sendappmessagerequest: (f = msg.getSendappmessagerequest()) && proto.padlocal.SendAppMessageRequest.toObject(includeInstance, f),
    sendappmessageresponse: (f = msg.getSendappmessageresponse()) && proto.padlocal.SendAppMessageResponse.toObject(includeInstance, f),
    getmessageimagerequest: (f = msg.getGetmessageimagerequest()) && proto.padlocal.GetMessageImageRequest.toObject(includeInstance, f),
    getmessageimageresponse: (f = msg.getGetmessageimageresponse()) && proto.padlocal.GetMessageImageResponse.toObject(includeInstance, f),
    getmessagevoicerequest: (f = msg.getGetmessagevoicerequest()) && proto.padlocal.GetMessageVoiceRequest.toObject(includeInstance, f),
    getmessagevoiceresponse: (f = msg.getGetmessagevoiceresponse()) && proto.padlocal.GetMessageVoiceResponse.toObject(includeInstance, f),
    getmessagevideothumbrequest: (f = msg.getGetmessagevideothumbrequest()) && proto.padlocal.GetMessageVideoThumbRequest.toObject(includeInstance, f),
    getmessagevideothumbresponse: (f = msg.getGetmessagevideothumbresponse()) && proto.padlocal.GetMessageVideoThumbResponse.toObject(includeInstance, f),
    getmessagevideorequest: (f = msg.getGetmessagevideorequest()) && proto.padlocal.GetMessageVideoRequest.toObject(includeInstance, f),
    getmessagevideoresponse: (f = msg.getGetmessagevideoresponse()) && proto.padlocal.GetMessageVideoResponse.toObject(includeInstance, f),
    getmessageattachrequest: (f = msg.getGetmessageattachrequest()) && proto.padlocal.GetMessageAttachRequest.toObject(includeInstance, f),
    getmessageattachresponse: (f = msg.getGetmessageattachresponse()) && proto.padlocal.GetMessageAttachResponse.toObject(includeInstance, f),
    forwardmessagerequest: (f = msg.getForwardmessagerequest()) && proto.padlocal.ForwardMessageRequest.toObject(includeInstance, f),
    forwardmessageresponse: (f = msg.getForwardmessageresponse()) && proto.padlocal.ForwardMessageResponse.toObject(includeInstance, f),
    getmessageattachthumbrequest: (f = msg.getGetmessageattachthumbrequest()) && proto.padlocal.GetMessageAttachThumbRequest.toObject(includeInstance, f),
    getmessageattachthumbresponse: (f = msg.getGetmessageattachthumbresponse()) && proto.padlocal.GetMessageAttachThumbResponse.toObject(includeInstance, f),
    synccontactrequest: (f = msg.getSynccontactrequest()) && proto.padlocal.SyncContactRequest.toObject(includeInstance, f),
    synccontactresponse: (f = msg.getSynccontactresponse()) && proto.padlocal.SyncContactResponse.toObject(includeInstance, f),
    acceptuserrequest: (f = msg.getAcceptuserrequest()) && proto.padlocal.AcceptUserRequest.toObject(includeInstance, f),
    acceptuserresponse: (f = msg.getAcceptuserresponse()) && proto.padlocal.AcceptUserResponse.toObject(includeInstance, f),
    addcontactrequest: (f = msg.getAddcontactrequest()) && proto.padlocal.AddContactRequest.toObject(includeInstance, f),
    addcontactresponse: (f = msg.getAddcontactresponse()) && proto.padlocal.AddContactResponse.toObject(includeInstance, f),
    deletecontactrequest: (f = msg.getDeletecontactrequest()) && proto.padlocal.DeleteContactRequest.toObject(includeInstance, f),
    deletecontactresponse: (f = msg.getDeletecontactresponse()) && proto.padlocal.DeleteContactResponse.toObject(includeInstance, f),
    getcontactrequest: (f = msg.getGetcontactrequest()) && proto.padlocal.GetContactRequest.toObject(includeInstance, f),
    getcontactresponse: (f = msg.getGetcontactresponse()) && proto.padlocal.GetContactResponse.toObject(includeInstance, f),
    getcontactqrcoderequest: (f = msg.getGetcontactqrcoderequest()) && proto.padlocal.GetContactQRCodeRequest.toObject(includeInstance, f),
    getcontactqrcoderesponse: (f = msg.getGetcontactqrcoderesponse()) && proto.padlocal.GetContactQRCodeResponse.toObject(includeInstance, f),
    searchcontactrequest: (f = msg.getSearchcontactrequest()) && proto.padlocal.SearchContactRequest.toObject(includeInstance, f),
    searchcontactresponse: (f = msg.getSearchcontactresponse()) && proto.padlocal.SearchContactResponse.toObject(includeInstance, f),
    updateselfnicknamerequest: (f = msg.getUpdateselfnicknamerequest()) && proto.padlocal.UpdateSelfNickNameRequest.toObject(includeInstance, f),
    updateselfnicknameresponse: (f = msg.getUpdateselfnicknameresponse()) && proto.padlocal.UpdateSelfNickNameResponse.toObject(includeInstance, f),
    createchatroomrequest: (f = msg.getCreatechatroomrequest()) && proto.padlocal.CreateChatRoomRequest.toObject(includeInstance, f),
    createchatroomresponse: (f = msg.getCreatechatroomresponse()) && proto.padlocal.CreateChatRoomResponse.toObject(includeInstance, f),
    getchatroommembersrequest: (f = msg.getGetchatroommembersrequest()) && proto.padlocal.GetChatRoomMembersRequest.toObject(includeInstance, f),
    getchatroommembersresponse: (f = msg.getGetchatroommembersresponse()) && proto.padlocal.GetChatRoomMembersResponse.toObject(includeInstance, f),
    getchatroomqrcoderequest: (f = msg.getGetchatroomqrcoderequest()) && proto.padlocal.GetChatRoomQrCodeRequest.toObject(includeInstance, f),
    getchatroomqrcoderesponse: (f = msg.getGetchatroomqrcoderesponse()) && proto.padlocal.GetChatRoomQrCodeResponse.toObject(includeInstance, f),
    getchatroommemberrequest: (f = msg.getGetchatroommemberrequest()) && proto.padlocal.GetChatRoomMemberRequest.toObject(includeInstance, f),
    getchatroommemberresponse: (f = msg.getGetchatroommemberresponse()) && proto.padlocal.GetChatRoomMemberResponse.toObject(includeInstance, f),
    setchatroomannouncementrequest: (f = msg.getSetchatroomannouncementrequest()) && proto.padlocal.SetChatRoomAnnouncementRequest.toObject(includeInstance, f),
    setchatroomannouncementresponse: (f = msg.getSetchatroomannouncementresponse()) && proto.padlocal.SetChatRoomAnnouncementResponse.toObject(includeInstance, f),
    addchatroommemberrequest: (f = msg.getAddchatroommemberrequest()) && proto.padlocal.AddChatRoomMemberRequest.toObject(includeInstance, f),
    addchatroommemberresponse: (f = msg.getAddchatroommemberresponse()) && proto.padlocal.AddChatRoomMemberResponse.toObject(includeInstance, f),
    invitechatroommemberrequest: (f = msg.getInvitechatroommemberrequest()) && proto.padlocal.InviteChatRoomMemberRequest.toObject(includeInstance, f),
    invitechatroommemberresponse: (f = msg.getInvitechatroommemberresponse()) && proto.padlocal.InviteChatRoomMemberResponse.toObject(includeInstance, f),
    deletechatroommemberrequest: (f = msg.getDeletechatroommemberrequest()) && proto.padlocal.DeleteChatRoomMemberRequest.toObject(includeInstance, f),
    deletechatroommemberresponse: (f = msg.getDeletechatroommemberresponse()) && proto.padlocal.DeleteChatRoomMemberResponse.toObject(includeInstance, f),
    setchatroomnamerequest: (f = msg.getSetchatroomnamerequest()) && proto.padlocal.SetChatRoomNameRequest.toObject(includeInstance, f),
    setchatroomnameresponse: (f = msg.getSetchatroomnameresponse()) && proto.padlocal.SetChatRoomNameResponse.toObject(includeInstance, f),
    addlabelrequest: (f = msg.getAddlabelrequest()) && proto.padlocal.AddLabelRequest.toObject(includeInstance, f),
    addlabelresponse: (f = msg.getAddlabelresponse()) && proto.padlocal.AddLabelResponse.toObject(includeInstance, f),
    removelabelrequest: (f = msg.getRemovelabelrequest()) && proto.padlocal.RemoveLabelRequest.toObject(includeInstance, f),
    removelabelresponse: (f = msg.getRemovelabelresponse()) && proto.padlocal.RemoveLabelResponse.toObject(includeInstance, f),
    getlabellistrequest: (f = msg.getGetlabellistrequest()) && proto.padlocal.GetLabelListRequest.toObject(includeInstance, f),
    getlabellistresponse: (f = msg.getGetlabellistresponse()) && proto.padlocal.GetLabelListResponse.toObject(includeInstance, f),
    setcontactlabelrequest: (f = msg.getSetcontactlabelrequest()) && proto.padlocal.SetContactLabelRequest.toObject(includeInstance, f),
    setcontactlabelresponse: (f = msg.getSetcontactlabelresponse()) && proto.padlocal.SetContactLabelResponse.toObject(includeInstance, f),
    snssendmomentrequest: (f = msg.getSnssendmomentrequest()) && proto.padlocal.SnsSendMomentRequest.toObject(includeInstance, f),
    snssendmomentresponse: (f = msg.getSnssendmomentresponse()) && proto.padlocal.SnsSendMomentResponse.toObject(includeInstance, f),
    snsforwardmomentrequest: (f = msg.getSnsforwardmomentrequest()) && proto.padlocal.SnsForwardMomentRequest.toObject(includeInstance, f),
    snsforwardmomentresponse: (f = msg.getSnsforwardmomentresponse()) && proto.padlocal.SnsForwardMomentResponse.toObject(includeInstance, f),
    snsgetuserpagerequest: (f = msg.getSnsgetuserpagerequest()) && proto.padlocal.SnsGetUserPageRequest.toObject(includeInstance, f),
    snsgetuserpageresponse: (f = msg.getSnsgetuserpageresponse()) && proto.padlocal.SnsGetUserPageResponse.toObject(includeInstance, f),
    snsgettimelinerequest: (f = msg.getSnsgettimelinerequest()) && proto.padlocal.SnsGetTimelineRequest.toObject(includeInstance, f),
    snsgettimelineresponse: (f = msg.getSnsgettimelineresponse()) && proto.padlocal.SnsGetTimelineResponse.toObject(includeInstance, f),
    snsgetmomentrequest: (f = msg.getSnsgetmomentrequest()) && proto.padlocal.SnsGetMomentRequest.toObject(includeInstance, f),
    snsgetmomentresponse: (f = msg.getSnsgetmomentresponse()) && proto.padlocal.SnsGetMomentResponse.toObject(includeInstance, f),
    snssendcommentrequest: (f = msg.getSnssendcommentrequest()) && proto.padlocal.SnsSendCommentRequest.toObject(includeInstance, f),
    snssendcommentresponse: (f = msg.getSnssendcommentresponse()) && proto.padlocal.SnsSendCommentResponse.toObject(includeInstance, f),
    snsuploadimagerequest: (f = msg.getSnsuploadimagerequest()) && proto.padlocal.SnsUploadImageRequest.toObject(includeInstance, f),
    snsuploadimageresponse: (f = msg.getSnsuploadimageresponse()) && proto.padlocal.SnsUploadImageResponse.toObject(includeInstance, f),
    snslikemomentrequest: (f = msg.getSnslikemomentrequest()) && proto.padlocal.SnsLikeMomentRequest.toObject(includeInstance, f),
    snslikemomentresponse: (f = msg.getSnslikemomentresponse()) && proto.padlocal.SnsLikeMomentResponse.toObject(includeInstance, f),
    snsunlikemomentrequest: (f = msg.getSnsunlikemomentrequest()) && proto.padlocal.SnsUnlikeMomentRequest.toObject(includeInstance, f),
    snsunlikemomentresponse: (f = msg.getSnsunlikemomentresponse()) && proto.padlocal.SnsUnlikeMomentResponse.toObject(includeInstance, f),
    snsremovemomentcommentrequest: (f = msg.getSnsremovemomentcommentrequest()) && proto.padlocal.SnsRemoveMomentCommentRequest.toObject(includeInstance, f),
    snsremovemomentcommentresponse: (f = msg.getSnsremovemomentcommentresponse()) && proto.padlocal.SnsRemoveMomentCommentResponse.toObject(includeInstance, f),
    snsmakemomentprivaterequest: (f = msg.getSnsmakemomentprivaterequest()) && proto.padlocal.SnsMakeMomentPrivateRequest.toObject(includeInstance, f),
    snsmakemomentprivateresponse: (f = msg.getSnsmakemomentprivateresponse()) && proto.padlocal.SnsMakeMomentPrivateResponse.toObject(includeInstance, f),
    snsmakemomentpublicrequest: (f = msg.getSnsmakemomentpublicrequest()) && proto.padlocal.SnsMakeMomentPublicRequest.toObject(includeInstance, f),
    snsmakemomentpublicresponse: (f = msg.getSnsmakemomentpublicresponse()) && proto.padlocal.SnsMakeMomentPublicResponse.toObject(includeInstance, f),
    snsremovemomentrequest: (f = msg.getSnsremovemomentrequest()) && proto.padlocal.SnsRemoveMomentRequest.toObject(includeInstance, f),
    snsremovemomentresponse: (f = msg.getSnsremovemomentresponse()) && proto.padlocal.SnsRemoveMomentResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.ActionMessage}
 */
proto.padlocal.ActionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.ActionMessage;
  return proto.padlocal.ActionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.ActionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.ActionMessage}
 */
proto.padlocal.ActionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.ActionMessageHeader;
      reader.readMessage(value,proto.padlocal.ActionMessageHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 10:
      var value = new proto.padlocal.WeChatRequest;
      reader.readMessage(value,proto.padlocal.WeChatRequest.deserializeBinaryFromReader);
      msg.setWechatrequest(value);
      break;
    case 11:
      var value = new proto.padlocal.WeChatResponse;
      reader.readMessage(value,proto.padlocal.WeChatResponse.deserializeBinaryFromReader);
      msg.setWechatresponse(value);
      break;
    case 12:
      var value = new proto.padlocal.SystemEventRequest;
      reader.readMessage(value,proto.padlocal.SystemEventRequest.deserializeBinaryFromReader);
      msg.setSystemeventrequest(value);
      break;
    case 13:
      var value = new proto.padlocal.SystemEventResponse;
      reader.readMessage(value,proto.padlocal.SystemEventResponse.deserializeBinaryFromReader);
      msg.setSystemeventresponse(value);
      break;
    case 14:
      var value = new proto.padlocal.LongLinkUnpackRequest;
      reader.readMessage(value,proto.padlocal.LongLinkUnpackRequest.deserializeBinaryFromReader);
      msg.setLonglinkunpackrequest(value);
      break;
    case 15:
      var value = new proto.padlocal.LongLinkUnpackResponse;
      reader.readMessage(value,proto.padlocal.LongLinkUnpackResponse.deserializeBinaryFromReader);
      msg.setLonglinkunpackresponse(value);
      break;
    case 16:
      var value = new proto.padlocal.LongLinkHeartBeatRequest;
      reader.readMessage(value,proto.padlocal.LongLinkHeartBeatRequest.deserializeBinaryFromReader);
      msg.setLonglinkheartbeatrequest(value);
      break;
    case 17:
      var value = new proto.padlocal.LongLinkHeartBeatResponse;
      reader.readMessage(value,proto.padlocal.LongLinkHeartBeatResponse.deserializeBinaryFromReader);
      msg.setLonglinkheartbeatresponse(value);
      break;
    case 100:
      var value = new proto.padlocal.SyncRequest;
      reader.readMessage(value,proto.padlocal.SyncRequest.deserializeBinaryFromReader);
      msg.setSyncrequest(value);
      break;
    case 101:
      var value = new proto.padlocal.SyncResponse;
      reader.readMessage(value,proto.padlocal.SyncResponse.deserializeBinaryFromReader);
      msg.setSyncresponse(value);
      break;
    case 102:
      var value = new proto.padlocal.SyncEvent;
      reader.readMessage(value,proto.padlocal.SyncEvent.deserializeBinaryFromReader);
      msg.setSyncevent(value);
      break;
    case 200:
      var value = new proto.padlocal.LoginRequest;
      reader.readMessage(value,proto.padlocal.LoginRequest.deserializeBinaryFromReader);
      msg.setLoginrequest(value);
      break;
    case 201:
      var value = new proto.padlocal.LoginUpdateEvent;
      reader.readMessage(value,proto.padlocal.LoginUpdateEvent.deserializeBinaryFromReader);
      msg.setLoginupdateevent(value);
      break;
    case 202:
      var value = new proto.padlocal.LoginResponse;
      reader.readMessage(value,proto.padlocal.LoginResponse.deserializeBinaryFromReader);
      msg.setLoginresponse(value);
      break;
    case 203:
      var value = new proto.padlocal.LogoutRequest;
      reader.readMessage(value,proto.padlocal.LogoutRequest.deserializeBinaryFromReader);
      msg.setLogoutrequest(value);
      break;
    case 204:
      var value = new proto.padlocal.LogoutResponse;
      reader.readMessage(value,proto.padlocal.LogoutResponse.deserializeBinaryFromReader);
      msg.setLogoutresponse(value);
      break;
    case 300:
      var value = new proto.padlocal.SendTextMessageRequest;
      reader.readMessage(value,proto.padlocal.SendTextMessageRequest.deserializeBinaryFromReader);
      msg.setSendtextmessagerequest(value);
      break;
    case 301:
      var value = new proto.padlocal.SendTextMessageResponse;
      reader.readMessage(value,proto.padlocal.SendTextMessageResponse.deserializeBinaryFromReader);
      msg.setSendtextmessageresponse(value);
      break;
    case 302:
      var value = new proto.padlocal.SendImageMessageRequest;
      reader.readMessage(value,proto.padlocal.SendImageMessageRequest.deserializeBinaryFromReader);
      msg.setSendimagemessagerequest(value);
      break;
    case 303:
      var value = new proto.padlocal.SendImageMessageResponse;
      reader.readMessage(value,proto.padlocal.SendImageMessageResponse.deserializeBinaryFromReader);
      msg.setSendimagemessageresponse(value);
      break;
    case 304:
      var value = new proto.padlocal.SendAppMessageRequest;
      reader.readMessage(value,proto.padlocal.SendAppMessageRequest.deserializeBinaryFromReader);
      msg.setSendappmessagerequest(value);
      break;
    case 305:
      var value = new proto.padlocal.SendAppMessageResponse;
      reader.readMessage(value,proto.padlocal.SendAppMessageResponse.deserializeBinaryFromReader);
      msg.setSendappmessageresponse(value);
      break;
    case 306:
      var value = new proto.padlocal.GetMessageImageRequest;
      reader.readMessage(value,proto.padlocal.GetMessageImageRequest.deserializeBinaryFromReader);
      msg.setGetmessageimagerequest(value);
      break;
    case 307:
      var value = new proto.padlocal.GetMessageImageResponse;
      reader.readMessage(value,proto.padlocal.GetMessageImageResponse.deserializeBinaryFromReader);
      msg.setGetmessageimageresponse(value);
      break;
    case 308:
      var value = new proto.padlocal.GetMessageVoiceRequest;
      reader.readMessage(value,proto.padlocal.GetMessageVoiceRequest.deserializeBinaryFromReader);
      msg.setGetmessagevoicerequest(value);
      break;
    case 309:
      var value = new proto.padlocal.GetMessageVoiceResponse;
      reader.readMessage(value,proto.padlocal.GetMessageVoiceResponse.deserializeBinaryFromReader);
      msg.setGetmessagevoiceresponse(value);
      break;
    case 310:
      var value = new proto.padlocal.GetMessageVideoThumbRequest;
      reader.readMessage(value,proto.padlocal.GetMessageVideoThumbRequest.deserializeBinaryFromReader);
      msg.setGetmessagevideothumbrequest(value);
      break;
    case 311:
      var value = new proto.padlocal.GetMessageVideoThumbResponse;
      reader.readMessage(value,proto.padlocal.GetMessageVideoThumbResponse.deserializeBinaryFromReader);
      msg.setGetmessagevideothumbresponse(value);
      break;
    case 312:
      var value = new proto.padlocal.GetMessageVideoRequest;
      reader.readMessage(value,proto.padlocal.GetMessageVideoRequest.deserializeBinaryFromReader);
      msg.setGetmessagevideorequest(value);
      break;
    case 313:
      var value = new proto.padlocal.GetMessageVideoResponse;
      reader.readMessage(value,proto.padlocal.GetMessageVideoResponse.deserializeBinaryFromReader);
      msg.setGetmessagevideoresponse(value);
      break;
    case 314:
      var value = new proto.padlocal.GetMessageAttachRequest;
      reader.readMessage(value,proto.padlocal.GetMessageAttachRequest.deserializeBinaryFromReader);
      msg.setGetmessageattachrequest(value);
      break;
    case 315:
      var value = new proto.padlocal.GetMessageAttachResponse;
      reader.readMessage(value,proto.padlocal.GetMessageAttachResponse.deserializeBinaryFromReader);
      msg.setGetmessageattachresponse(value);
      break;
    case 316:
      var value = new proto.padlocal.ForwardMessageRequest;
      reader.readMessage(value,proto.padlocal.ForwardMessageRequest.deserializeBinaryFromReader);
      msg.setForwardmessagerequest(value);
      break;
    case 317:
      var value = new proto.padlocal.ForwardMessageResponse;
      reader.readMessage(value,proto.padlocal.ForwardMessageResponse.deserializeBinaryFromReader);
      msg.setForwardmessageresponse(value);
      break;
    case 318:
      var value = new proto.padlocal.GetMessageAttachThumbRequest;
      reader.readMessage(value,proto.padlocal.GetMessageAttachThumbRequest.deserializeBinaryFromReader);
      msg.setGetmessageattachthumbrequest(value);
      break;
    case 319:
      var value = new proto.padlocal.GetMessageAttachThumbResponse;
      reader.readMessage(value,proto.padlocal.GetMessageAttachThumbResponse.deserializeBinaryFromReader);
      msg.setGetmessageattachthumbresponse(value);
      break;
    case 400:
      var value = new proto.padlocal.SyncContactRequest;
      reader.readMessage(value,proto.padlocal.SyncContactRequest.deserializeBinaryFromReader);
      msg.setSynccontactrequest(value);
      break;
    case 401:
      var value = new proto.padlocal.SyncContactResponse;
      reader.readMessage(value,proto.padlocal.SyncContactResponse.deserializeBinaryFromReader);
      msg.setSynccontactresponse(value);
      break;
    case 402:
      var value = new proto.padlocal.AcceptUserRequest;
      reader.readMessage(value,proto.padlocal.AcceptUserRequest.deserializeBinaryFromReader);
      msg.setAcceptuserrequest(value);
      break;
    case 403:
      var value = new proto.padlocal.AcceptUserResponse;
      reader.readMessage(value,proto.padlocal.AcceptUserResponse.deserializeBinaryFromReader);
      msg.setAcceptuserresponse(value);
      break;
    case 404:
      var value = new proto.padlocal.AddContactRequest;
      reader.readMessage(value,proto.padlocal.AddContactRequest.deserializeBinaryFromReader);
      msg.setAddcontactrequest(value);
      break;
    case 405:
      var value = new proto.padlocal.AddContactResponse;
      reader.readMessage(value,proto.padlocal.AddContactResponse.deserializeBinaryFromReader);
      msg.setAddcontactresponse(value);
      break;
    case 406:
      var value = new proto.padlocal.DeleteContactRequest;
      reader.readMessage(value,proto.padlocal.DeleteContactRequest.deserializeBinaryFromReader);
      msg.setDeletecontactrequest(value);
      break;
    case 407:
      var value = new proto.padlocal.DeleteContactResponse;
      reader.readMessage(value,proto.padlocal.DeleteContactResponse.deserializeBinaryFromReader);
      msg.setDeletecontactresponse(value);
      break;
    case 408:
      var value = new proto.padlocal.GetContactRequest;
      reader.readMessage(value,proto.padlocal.GetContactRequest.deserializeBinaryFromReader);
      msg.setGetcontactrequest(value);
      break;
    case 409:
      var value = new proto.padlocal.GetContactResponse;
      reader.readMessage(value,proto.padlocal.GetContactResponse.deserializeBinaryFromReader);
      msg.setGetcontactresponse(value);
      break;
    case 410:
      var value = new proto.padlocal.GetContactQRCodeRequest;
      reader.readMessage(value,proto.padlocal.GetContactQRCodeRequest.deserializeBinaryFromReader);
      msg.setGetcontactqrcoderequest(value);
      break;
    case 411:
      var value = new proto.padlocal.GetContactQRCodeResponse;
      reader.readMessage(value,proto.padlocal.GetContactQRCodeResponse.deserializeBinaryFromReader);
      msg.setGetcontactqrcoderesponse(value);
      break;
    case 412:
      var value = new proto.padlocal.SearchContactRequest;
      reader.readMessage(value,proto.padlocal.SearchContactRequest.deserializeBinaryFromReader);
      msg.setSearchcontactrequest(value);
      break;
    case 413:
      var value = new proto.padlocal.SearchContactResponse;
      reader.readMessage(value,proto.padlocal.SearchContactResponse.deserializeBinaryFromReader);
      msg.setSearchcontactresponse(value);
      break;
    case 414:
      var value = new proto.padlocal.UpdateSelfNickNameRequest;
      reader.readMessage(value,proto.padlocal.UpdateSelfNickNameRequest.deserializeBinaryFromReader);
      msg.setUpdateselfnicknamerequest(value);
      break;
    case 415:
      var value = new proto.padlocal.UpdateSelfNickNameResponse;
      reader.readMessage(value,proto.padlocal.UpdateSelfNickNameResponse.deserializeBinaryFromReader);
      msg.setUpdateselfnicknameresponse(value);
      break;
    case 500:
      var value = new proto.padlocal.CreateChatRoomRequest;
      reader.readMessage(value,proto.padlocal.CreateChatRoomRequest.deserializeBinaryFromReader);
      msg.setCreatechatroomrequest(value);
      break;
    case 501:
      var value = new proto.padlocal.CreateChatRoomResponse;
      reader.readMessage(value,proto.padlocal.CreateChatRoomResponse.deserializeBinaryFromReader);
      msg.setCreatechatroomresponse(value);
      break;
    case 502:
      var value = new proto.padlocal.GetChatRoomMembersRequest;
      reader.readMessage(value,proto.padlocal.GetChatRoomMembersRequest.deserializeBinaryFromReader);
      msg.setGetchatroommembersrequest(value);
      break;
    case 503:
      var value = new proto.padlocal.GetChatRoomMembersResponse;
      reader.readMessage(value,proto.padlocal.GetChatRoomMembersResponse.deserializeBinaryFromReader);
      msg.setGetchatroommembersresponse(value);
      break;
    case 504:
      var value = new proto.padlocal.GetChatRoomQrCodeRequest;
      reader.readMessage(value,proto.padlocal.GetChatRoomQrCodeRequest.deserializeBinaryFromReader);
      msg.setGetchatroomqrcoderequest(value);
      break;
    case 505:
      var value = new proto.padlocal.GetChatRoomQrCodeResponse;
      reader.readMessage(value,proto.padlocal.GetChatRoomQrCodeResponse.deserializeBinaryFromReader);
      msg.setGetchatroomqrcoderesponse(value);
      break;
    case 506:
      var value = new proto.padlocal.GetChatRoomMemberRequest;
      reader.readMessage(value,proto.padlocal.GetChatRoomMemberRequest.deserializeBinaryFromReader);
      msg.setGetchatroommemberrequest(value);
      break;
    case 507:
      var value = new proto.padlocal.GetChatRoomMemberResponse;
      reader.readMessage(value,proto.padlocal.GetChatRoomMemberResponse.deserializeBinaryFromReader);
      msg.setGetchatroommemberresponse(value);
      break;
    case 508:
      var value = new proto.padlocal.SetChatRoomAnnouncementRequest;
      reader.readMessage(value,proto.padlocal.SetChatRoomAnnouncementRequest.deserializeBinaryFromReader);
      msg.setSetchatroomannouncementrequest(value);
      break;
    case 509:
      var value = new proto.padlocal.SetChatRoomAnnouncementResponse;
      reader.readMessage(value,proto.padlocal.SetChatRoomAnnouncementResponse.deserializeBinaryFromReader);
      msg.setSetchatroomannouncementresponse(value);
      break;
    case 510:
      var value = new proto.padlocal.AddChatRoomMemberRequest;
      reader.readMessage(value,proto.padlocal.AddChatRoomMemberRequest.deserializeBinaryFromReader);
      msg.setAddchatroommemberrequest(value);
      break;
    case 511:
      var value = new proto.padlocal.AddChatRoomMemberResponse;
      reader.readMessage(value,proto.padlocal.AddChatRoomMemberResponse.deserializeBinaryFromReader);
      msg.setAddchatroommemberresponse(value);
      break;
    case 512:
      var value = new proto.padlocal.InviteChatRoomMemberRequest;
      reader.readMessage(value,proto.padlocal.InviteChatRoomMemberRequest.deserializeBinaryFromReader);
      msg.setInvitechatroommemberrequest(value);
      break;
    case 513:
      var value = new proto.padlocal.InviteChatRoomMemberResponse;
      reader.readMessage(value,proto.padlocal.InviteChatRoomMemberResponse.deserializeBinaryFromReader);
      msg.setInvitechatroommemberresponse(value);
      break;
    case 514:
      var value = new proto.padlocal.DeleteChatRoomMemberRequest;
      reader.readMessage(value,proto.padlocal.DeleteChatRoomMemberRequest.deserializeBinaryFromReader);
      msg.setDeletechatroommemberrequest(value);
      break;
    case 515:
      var value = new proto.padlocal.DeleteChatRoomMemberResponse;
      reader.readMessage(value,proto.padlocal.DeleteChatRoomMemberResponse.deserializeBinaryFromReader);
      msg.setDeletechatroommemberresponse(value);
      break;
    case 516:
      var value = new proto.padlocal.SetChatRoomNameRequest;
      reader.readMessage(value,proto.padlocal.SetChatRoomNameRequest.deserializeBinaryFromReader);
      msg.setSetchatroomnamerequest(value);
      break;
    case 517:
      var value = new proto.padlocal.SetChatRoomNameResponse;
      reader.readMessage(value,proto.padlocal.SetChatRoomNameResponse.deserializeBinaryFromReader);
      msg.setSetchatroomnameresponse(value);
      break;
    case 600:
      var value = new proto.padlocal.AddLabelRequest;
      reader.readMessage(value,proto.padlocal.AddLabelRequest.deserializeBinaryFromReader);
      msg.setAddlabelrequest(value);
      break;
    case 601:
      var value = new proto.padlocal.AddLabelResponse;
      reader.readMessage(value,proto.padlocal.AddLabelResponse.deserializeBinaryFromReader);
      msg.setAddlabelresponse(value);
      break;
    case 602:
      var value = new proto.padlocal.RemoveLabelRequest;
      reader.readMessage(value,proto.padlocal.RemoveLabelRequest.deserializeBinaryFromReader);
      msg.setRemovelabelrequest(value);
      break;
    case 603:
      var value = new proto.padlocal.RemoveLabelResponse;
      reader.readMessage(value,proto.padlocal.RemoveLabelResponse.deserializeBinaryFromReader);
      msg.setRemovelabelresponse(value);
      break;
    case 604:
      var value = new proto.padlocal.GetLabelListRequest;
      reader.readMessage(value,proto.padlocal.GetLabelListRequest.deserializeBinaryFromReader);
      msg.setGetlabellistrequest(value);
      break;
    case 605:
      var value = new proto.padlocal.GetLabelListResponse;
      reader.readMessage(value,proto.padlocal.GetLabelListResponse.deserializeBinaryFromReader);
      msg.setGetlabellistresponse(value);
      break;
    case 606:
      var value = new proto.padlocal.SetContactLabelRequest;
      reader.readMessage(value,proto.padlocal.SetContactLabelRequest.deserializeBinaryFromReader);
      msg.setSetcontactlabelrequest(value);
      break;
    case 607:
      var value = new proto.padlocal.SetContactLabelResponse;
      reader.readMessage(value,proto.padlocal.SetContactLabelResponse.deserializeBinaryFromReader);
      msg.setSetcontactlabelresponse(value);
      break;
    case 700:
      var value = new proto.padlocal.SnsSendMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsSendMomentRequest.deserializeBinaryFromReader);
      msg.setSnssendmomentrequest(value);
      break;
    case 701:
      var value = new proto.padlocal.SnsSendMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsSendMomentResponse.deserializeBinaryFromReader);
      msg.setSnssendmomentresponse(value);
      break;
    case 702:
      var value = new proto.padlocal.SnsForwardMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsForwardMomentRequest.deserializeBinaryFromReader);
      msg.setSnsforwardmomentrequest(value);
      break;
    case 703:
      var value = new proto.padlocal.SnsForwardMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsForwardMomentResponse.deserializeBinaryFromReader);
      msg.setSnsforwardmomentresponse(value);
      break;
    case 704:
      var value = new proto.padlocal.SnsGetUserPageRequest;
      reader.readMessage(value,proto.padlocal.SnsGetUserPageRequest.deserializeBinaryFromReader);
      msg.setSnsgetuserpagerequest(value);
      break;
    case 705:
      var value = new proto.padlocal.SnsGetUserPageResponse;
      reader.readMessage(value,proto.padlocal.SnsGetUserPageResponse.deserializeBinaryFromReader);
      msg.setSnsgetuserpageresponse(value);
      break;
    case 706:
      var value = new proto.padlocal.SnsGetTimelineRequest;
      reader.readMessage(value,proto.padlocal.SnsGetTimelineRequest.deserializeBinaryFromReader);
      msg.setSnsgettimelinerequest(value);
      break;
    case 707:
      var value = new proto.padlocal.SnsGetTimelineResponse;
      reader.readMessage(value,proto.padlocal.SnsGetTimelineResponse.deserializeBinaryFromReader);
      msg.setSnsgettimelineresponse(value);
      break;
    case 708:
      var value = new proto.padlocal.SnsGetMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsGetMomentRequest.deserializeBinaryFromReader);
      msg.setSnsgetmomentrequest(value);
      break;
    case 709:
      var value = new proto.padlocal.SnsGetMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsGetMomentResponse.deserializeBinaryFromReader);
      msg.setSnsgetmomentresponse(value);
      break;
    case 710:
      var value = new proto.padlocal.SnsSendCommentRequest;
      reader.readMessage(value,proto.padlocal.SnsSendCommentRequest.deserializeBinaryFromReader);
      msg.setSnssendcommentrequest(value);
      break;
    case 711:
      var value = new proto.padlocal.SnsSendCommentResponse;
      reader.readMessage(value,proto.padlocal.SnsSendCommentResponse.deserializeBinaryFromReader);
      msg.setSnssendcommentresponse(value);
      break;
    case 712:
      var value = new proto.padlocal.SnsUploadImageRequest;
      reader.readMessage(value,proto.padlocal.SnsUploadImageRequest.deserializeBinaryFromReader);
      msg.setSnsuploadimagerequest(value);
      break;
    case 713:
      var value = new proto.padlocal.SnsUploadImageResponse;
      reader.readMessage(value,proto.padlocal.SnsUploadImageResponse.deserializeBinaryFromReader);
      msg.setSnsuploadimageresponse(value);
      break;
    case 714:
      var value = new proto.padlocal.SnsLikeMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsLikeMomentRequest.deserializeBinaryFromReader);
      msg.setSnslikemomentrequest(value);
      break;
    case 715:
      var value = new proto.padlocal.SnsLikeMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsLikeMomentResponse.deserializeBinaryFromReader);
      msg.setSnslikemomentresponse(value);
      break;
    case 716:
      var value = new proto.padlocal.SnsUnlikeMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsUnlikeMomentRequest.deserializeBinaryFromReader);
      msg.setSnsunlikemomentrequest(value);
      break;
    case 717:
      var value = new proto.padlocal.SnsUnlikeMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsUnlikeMomentResponse.deserializeBinaryFromReader);
      msg.setSnsunlikemomentresponse(value);
      break;
    case 718:
      var value = new proto.padlocal.SnsRemoveMomentCommentRequest;
      reader.readMessage(value,proto.padlocal.SnsRemoveMomentCommentRequest.deserializeBinaryFromReader);
      msg.setSnsremovemomentcommentrequest(value);
      break;
    case 719:
      var value = new proto.padlocal.SnsRemoveMomentCommentResponse;
      reader.readMessage(value,proto.padlocal.SnsRemoveMomentCommentResponse.deserializeBinaryFromReader);
      msg.setSnsremovemomentcommentresponse(value);
      break;
    case 720:
      var value = new proto.padlocal.SnsMakeMomentPrivateRequest;
      reader.readMessage(value,proto.padlocal.SnsMakeMomentPrivateRequest.deserializeBinaryFromReader);
      msg.setSnsmakemomentprivaterequest(value);
      break;
    case 721:
      var value = new proto.padlocal.SnsMakeMomentPrivateResponse;
      reader.readMessage(value,proto.padlocal.SnsMakeMomentPrivateResponse.deserializeBinaryFromReader);
      msg.setSnsmakemomentprivateresponse(value);
      break;
    case 722:
      var value = new proto.padlocal.SnsMakeMomentPublicRequest;
      reader.readMessage(value,proto.padlocal.SnsMakeMomentPublicRequest.deserializeBinaryFromReader);
      msg.setSnsmakemomentpublicrequest(value);
      break;
    case 723:
      var value = new proto.padlocal.SnsMakeMomentPublicResponse;
      reader.readMessage(value,proto.padlocal.SnsMakeMomentPublicResponse.deserializeBinaryFromReader);
      msg.setSnsmakemomentpublicresponse(value);
      break;
    case 724:
      var value = new proto.padlocal.SnsRemoveMomentRequest;
      reader.readMessage(value,proto.padlocal.SnsRemoveMomentRequest.deserializeBinaryFromReader);
      msg.setSnsremovemomentrequest(value);
      break;
    case 725:
      var value = new proto.padlocal.SnsRemoveMomentResponse;
      reader.readMessage(value,proto.padlocal.SnsRemoveMomentResponse.deserializeBinaryFromReader);
      msg.setSnsremovemomentresponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.ActionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.ActionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.ActionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ActionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.ActionMessageHeader.serializeBinaryToWriter
    );
  }
  f = message.getWechatrequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.padlocal.WeChatRequest.serializeBinaryToWriter
    );
  }
  f = message.getWechatresponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.padlocal.WeChatResponse.serializeBinaryToWriter
    );
  }
  f = message.getSystemeventrequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.padlocal.SystemEventRequest.serializeBinaryToWriter
    );
  }
  f = message.getSystemeventresponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.padlocal.SystemEventResponse.serializeBinaryToWriter
    );
  }
  f = message.getLonglinkunpackrequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.padlocal.LongLinkUnpackRequest.serializeBinaryToWriter
    );
  }
  f = message.getLonglinkunpackresponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.padlocal.LongLinkUnpackResponse.serializeBinaryToWriter
    );
  }
  f = message.getLonglinkheartbeatrequest();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.padlocal.LongLinkHeartBeatRequest.serializeBinaryToWriter
    );
  }
  f = message.getLonglinkheartbeatresponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.padlocal.LongLinkHeartBeatResponse.serializeBinaryToWriter
    );
  }
  f = message.getSyncrequest();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.padlocal.SyncRequest.serializeBinaryToWriter
    );
  }
  f = message.getSyncresponse();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.padlocal.SyncResponse.serializeBinaryToWriter
    );
  }
  f = message.getSyncevent();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.padlocal.SyncEvent.serializeBinaryToWriter
    );
  }
  f = message.getLoginrequest();
  if (f != null) {
    writer.writeMessage(
      200,
      f,
      proto.padlocal.LoginRequest.serializeBinaryToWriter
    );
  }
  f = message.getLoginupdateevent();
  if (f != null) {
    writer.writeMessage(
      201,
      f,
      proto.padlocal.LoginUpdateEvent.serializeBinaryToWriter
    );
  }
  f = message.getLoginresponse();
  if (f != null) {
    writer.writeMessage(
      202,
      f,
      proto.padlocal.LoginResponse.serializeBinaryToWriter
    );
  }
  f = message.getLogoutrequest();
  if (f != null) {
    writer.writeMessage(
      203,
      f,
      proto.padlocal.LogoutRequest.serializeBinaryToWriter
    );
  }
  f = message.getLogoutresponse();
  if (f != null) {
    writer.writeMessage(
      204,
      f,
      proto.padlocal.LogoutResponse.serializeBinaryToWriter
    );
  }
  f = message.getSendtextmessagerequest();
  if (f != null) {
    writer.writeMessage(
      300,
      f,
      proto.padlocal.SendTextMessageRequest.serializeBinaryToWriter
    );
  }
  f = message.getSendtextmessageresponse();
  if (f != null) {
    writer.writeMessage(
      301,
      f,
      proto.padlocal.SendTextMessageResponse.serializeBinaryToWriter
    );
  }
  f = message.getSendimagemessagerequest();
  if (f != null) {
    writer.writeMessage(
      302,
      f,
      proto.padlocal.SendImageMessageRequest.serializeBinaryToWriter
    );
  }
  f = message.getSendimagemessageresponse();
  if (f != null) {
    writer.writeMessage(
      303,
      f,
      proto.padlocal.SendImageMessageResponse.serializeBinaryToWriter
    );
  }
  f = message.getSendappmessagerequest();
  if (f != null) {
    writer.writeMessage(
      304,
      f,
      proto.padlocal.SendAppMessageRequest.serializeBinaryToWriter
    );
  }
  f = message.getSendappmessageresponse();
  if (f != null) {
    writer.writeMessage(
      305,
      f,
      proto.padlocal.SendAppMessageResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageimagerequest();
  if (f != null) {
    writer.writeMessage(
      306,
      f,
      proto.padlocal.GetMessageImageRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageimageresponse();
  if (f != null) {
    writer.writeMessage(
      307,
      f,
      proto.padlocal.GetMessageImageResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevoicerequest();
  if (f != null) {
    writer.writeMessage(
      308,
      f,
      proto.padlocal.GetMessageVoiceRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevoiceresponse();
  if (f != null) {
    writer.writeMessage(
      309,
      f,
      proto.padlocal.GetMessageVoiceResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevideothumbrequest();
  if (f != null) {
    writer.writeMessage(
      310,
      f,
      proto.padlocal.GetMessageVideoThumbRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevideothumbresponse();
  if (f != null) {
    writer.writeMessage(
      311,
      f,
      proto.padlocal.GetMessageVideoThumbResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevideorequest();
  if (f != null) {
    writer.writeMessage(
      312,
      f,
      proto.padlocal.GetMessageVideoRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessagevideoresponse();
  if (f != null) {
    writer.writeMessage(
      313,
      f,
      proto.padlocal.GetMessageVideoResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageattachrequest();
  if (f != null) {
    writer.writeMessage(
      314,
      f,
      proto.padlocal.GetMessageAttachRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageattachresponse();
  if (f != null) {
    writer.writeMessage(
      315,
      f,
      proto.padlocal.GetMessageAttachResponse.serializeBinaryToWriter
    );
  }
  f = message.getForwardmessagerequest();
  if (f != null) {
    writer.writeMessage(
      316,
      f,
      proto.padlocal.ForwardMessageRequest.serializeBinaryToWriter
    );
  }
  f = message.getForwardmessageresponse();
  if (f != null) {
    writer.writeMessage(
      317,
      f,
      proto.padlocal.ForwardMessageResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageattachthumbrequest();
  if (f != null) {
    writer.writeMessage(
      318,
      f,
      proto.padlocal.GetMessageAttachThumbRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetmessageattachthumbresponse();
  if (f != null) {
    writer.writeMessage(
      319,
      f,
      proto.padlocal.GetMessageAttachThumbResponse.serializeBinaryToWriter
    );
  }
  f = message.getSynccontactrequest();
  if (f != null) {
    writer.writeMessage(
      400,
      f,
      proto.padlocal.SyncContactRequest.serializeBinaryToWriter
    );
  }
  f = message.getSynccontactresponse();
  if (f != null) {
    writer.writeMessage(
      401,
      f,
      proto.padlocal.SyncContactResponse.serializeBinaryToWriter
    );
  }
  f = message.getAcceptuserrequest();
  if (f != null) {
    writer.writeMessage(
      402,
      f,
      proto.padlocal.AcceptUserRequest.serializeBinaryToWriter
    );
  }
  f = message.getAcceptuserresponse();
  if (f != null) {
    writer.writeMessage(
      403,
      f,
      proto.padlocal.AcceptUserResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddcontactrequest();
  if (f != null) {
    writer.writeMessage(
      404,
      f,
      proto.padlocal.AddContactRequest.serializeBinaryToWriter
    );
  }
  f = message.getAddcontactresponse();
  if (f != null) {
    writer.writeMessage(
      405,
      f,
      proto.padlocal.AddContactResponse.serializeBinaryToWriter
    );
  }
  f = message.getDeletecontactrequest();
  if (f != null) {
    writer.writeMessage(
      406,
      f,
      proto.padlocal.DeleteContactRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeletecontactresponse();
  if (f != null) {
    writer.writeMessage(
      407,
      f,
      proto.padlocal.DeleteContactResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetcontactrequest();
  if (f != null) {
    writer.writeMessage(
      408,
      f,
      proto.padlocal.GetContactRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetcontactresponse();
  if (f != null) {
    writer.writeMessage(
      409,
      f,
      proto.padlocal.GetContactResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetcontactqrcoderequest();
  if (f != null) {
    writer.writeMessage(
      410,
      f,
      proto.padlocal.GetContactQRCodeRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetcontactqrcoderesponse();
  if (f != null) {
    writer.writeMessage(
      411,
      f,
      proto.padlocal.GetContactQRCodeResponse.serializeBinaryToWriter
    );
  }
  f = message.getSearchcontactrequest();
  if (f != null) {
    writer.writeMessage(
      412,
      f,
      proto.padlocal.SearchContactRequest.serializeBinaryToWriter
    );
  }
  f = message.getSearchcontactresponse();
  if (f != null) {
    writer.writeMessage(
      413,
      f,
      proto.padlocal.SearchContactResponse.serializeBinaryToWriter
    );
  }
  f = message.getUpdateselfnicknamerequest();
  if (f != null) {
    writer.writeMessage(
      414,
      f,
      proto.padlocal.UpdateSelfNickNameRequest.serializeBinaryToWriter
    );
  }
  f = message.getUpdateselfnicknameresponse();
  if (f != null) {
    writer.writeMessage(
      415,
      f,
      proto.padlocal.UpdateSelfNickNameResponse.serializeBinaryToWriter
    );
  }
  f = message.getCreatechatroomrequest();
  if (f != null) {
    writer.writeMessage(
      500,
      f,
      proto.padlocal.CreateChatRoomRequest.serializeBinaryToWriter
    );
  }
  f = message.getCreatechatroomresponse();
  if (f != null) {
    writer.writeMessage(
      501,
      f,
      proto.padlocal.CreateChatRoomResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroommembersrequest();
  if (f != null) {
    writer.writeMessage(
      502,
      f,
      proto.padlocal.GetChatRoomMembersRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroommembersresponse();
  if (f != null) {
    writer.writeMessage(
      503,
      f,
      proto.padlocal.GetChatRoomMembersResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroomqrcoderequest();
  if (f != null) {
    writer.writeMessage(
      504,
      f,
      proto.padlocal.GetChatRoomQrCodeRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroomqrcoderesponse();
  if (f != null) {
    writer.writeMessage(
      505,
      f,
      proto.padlocal.GetChatRoomQrCodeResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroommemberrequest();
  if (f != null) {
    writer.writeMessage(
      506,
      f,
      proto.padlocal.GetChatRoomMemberRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetchatroommemberresponse();
  if (f != null) {
    writer.writeMessage(
      507,
      f,
      proto.padlocal.GetChatRoomMemberResponse.serializeBinaryToWriter
    );
  }
  f = message.getSetchatroomannouncementrequest();
  if (f != null) {
    writer.writeMessage(
      508,
      f,
      proto.padlocal.SetChatRoomAnnouncementRequest.serializeBinaryToWriter
    );
  }
  f = message.getSetchatroomannouncementresponse();
  if (f != null) {
    writer.writeMessage(
      509,
      f,
      proto.padlocal.SetChatRoomAnnouncementResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddchatroommemberrequest();
  if (f != null) {
    writer.writeMessage(
      510,
      f,
      proto.padlocal.AddChatRoomMemberRequest.serializeBinaryToWriter
    );
  }
  f = message.getAddchatroommemberresponse();
  if (f != null) {
    writer.writeMessage(
      511,
      f,
      proto.padlocal.AddChatRoomMemberResponse.serializeBinaryToWriter
    );
  }
  f = message.getInvitechatroommemberrequest();
  if (f != null) {
    writer.writeMessage(
      512,
      f,
      proto.padlocal.InviteChatRoomMemberRequest.serializeBinaryToWriter
    );
  }
  f = message.getInvitechatroommemberresponse();
  if (f != null) {
    writer.writeMessage(
      513,
      f,
      proto.padlocal.InviteChatRoomMemberResponse.serializeBinaryToWriter
    );
  }
  f = message.getDeletechatroommemberrequest();
  if (f != null) {
    writer.writeMessage(
      514,
      f,
      proto.padlocal.DeleteChatRoomMemberRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeletechatroommemberresponse();
  if (f != null) {
    writer.writeMessage(
      515,
      f,
      proto.padlocal.DeleteChatRoomMemberResponse.serializeBinaryToWriter
    );
  }
  f = message.getSetchatroomnamerequest();
  if (f != null) {
    writer.writeMessage(
      516,
      f,
      proto.padlocal.SetChatRoomNameRequest.serializeBinaryToWriter
    );
  }
  f = message.getSetchatroomnameresponse();
  if (f != null) {
    writer.writeMessage(
      517,
      f,
      proto.padlocal.SetChatRoomNameResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddlabelrequest();
  if (f != null) {
    writer.writeMessage(
      600,
      f,
      proto.padlocal.AddLabelRequest.serializeBinaryToWriter
    );
  }
  f = message.getAddlabelresponse();
  if (f != null) {
    writer.writeMessage(
      601,
      f,
      proto.padlocal.AddLabelResponse.serializeBinaryToWriter
    );
  }
  f = message.getRemovelabelrequest();
  if (f != null) {
    writer.writeMessage(
      602,
      f,
      proto.padlocal.RemoveLabelRequest.serializeBinaryToWriter
    );
  }
  f = message.getRemovelabelresponse();
  if (f != null) {
    writer.writeMessage(
      603,
      f,
      proto.padlocal.RemoveLabelResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetlabellistrequest();
  if (f != null) {
    writer.writeMessage(
      604,
      f,
      proto.padlocal.GetLabelListRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetlabellistresponse();
  if (f != null) {
    writer.writeMessage(
      605,
      f,
      proto.padlocal.GetLabelListResponse.serializeBinaryToWriter
    );
  }
  f = message.getSetcontactlabelrequest();
  if (f != null) {
    writer.writeMessage(
      606,
      f,
      proto.padlocal.SetContactLabelRequest.serializeBinaryToWriter
    );
  }
  f = message.getSetcontactlabelresponse();
  if (f != null) {
    writer.writeMessage(
      607,
      f,
      proto.padlocal.SetContactLabelResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnssendmomentrequest();
  if (f != null) {
    writer.writeMessage(
      700,
      f,
      proto.padlocal.SnsSendMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnssendmomentresponse();
  if (f != null) {
    writer.writeMessage(
      701,
      f,
      proto.padlocal.SnsSendMomentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsforwardmomentrequest();
  if (f != null) {
    writer.writeMessage(
      702,
      f,
      proto.padlocal.SnsForwardMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsforwardmomentresponse();
  if (f != null) {
    writer.writeMessage(
      703,
      f,
      proto.padlocal.SnsForwardMomentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsgetuserpagerequest();
  if (f != null) {
    writer.writeMessage(
      704,
      f,
      proto.padlocal.SnsGetUserPageRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsgetuserpageresponse();
  if (f != null) {
    writer.writeMessage(
      705,
      f,
      proto.padlocal.SnsGetUserPageResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsgettimelinerequest();
  if (f != null) {
    writer.writeMessage(
      706,
      f,
      proto.padlocal.SnsGetTimelineRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsgettimelineresponse();
  if (f != null) {
    writer.writeMessage(
      707,
      f,
      proto.padlocal.SnsGetTimelineResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsgetmomentrequest();
  if (f != null) {
    writer.writeMessage(
      708,
      f,
      proto.padlocal.SnsGetMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsgetmomentresponse();
  if (f != null) {
    writer.writeMessage(
      709,
      f,
      proto.padlocal.SnsGetMomentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnssendcommentrequest();
  if (f != null) {
    writer.writeMessage(
      710,
      f,
      proto.padlocal.SnsSendCommentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnssendcommentresponse();
  if (f != null) {
    writer.writeMessage(
      711,
      f,
      proto.padlocal.SnsSendCommentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsuploadimagerequest();
  if (f != null) {
    writer.writeMessage(
      712,
      f,
      proto.padlocal.SnsUploadImageRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsuploadimageresponse();
  if (f != null) {
    writer.writeMessage(
      713,
      f,
      proto.padlocal.SnsUploadImageResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnslikemomentrequest();
  if (f != null) {
    writer.writeMessage(
      714,
      f,
      proto.padlocal.SnsLikeMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnslikemomentresponse();
  if (f != null) {
    writer.writeMessage(
      715,
      f,
      proto.padlocal.SnsLikeMomentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsunlikemomentrequest();
  if (f != null) {
    writer.writeMessage(
      716,
      f,
      proto.padlocal.SnsUnlikeMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsunlikemomentresponse();
  if (f != null) {
    writer.writeMessage(
      717,
      f,
      proto.padlocal.SnsUnlikeMomentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsremovemomentcommentrequest();
  if (f != null) {
    writer.writeMessage(
      718,
      f,
      proto.padlocal.SnsRemoveMomentCommentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsremovemomentcommentresponse();
  if (f != null) {
    writer.writeMessage(
      719,
      f,
      proto.padlocal.SnsRemoveMomentCommentResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsmakemomentprivaterequest();
  if (f != null) {
    writer.writeMessage(
      720,
      f,
      proto.padlocal.SnsMakeMomentPrivateRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsmakemomentprivateresponse();
  if (f != null) {
    writer.writeMessage(
      721,
      f,
      proto.padlocal.SnsMakeMomentPrivateResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsmakemomentpublicrequest();
  if (f != null) {
    writer.writeMessage(
      722,
      f,
      proto.padlocal.SnsMakeMomentPublicRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsmakemomentpublicresponse();
  if (f != null) {
    writer.writeMessage(
      723,
      f,
      proto.padlocal.SnsMakeMomentPublicResponse.serializeBinaryToWriter
    );
  }
  f = message.getSnsremovemomentrequest();
  if (f != null) {
    writer.writeMessage(
      724,
      f,
      proto.padlocal.SnsRemoveMomentRequest.serializeBinaryToWriter
    );
  }
  f = message.getSnsremovemomentresponse();
  if (f != null) {
    writer.writeMessage(
      725,
      f,
      proto.padlocal.SnsRemoveMomentResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActionMessageHeader header = 1;
 * @return {?proto.padlocal.ActionMessageHeader}
 */
proto.padlocal.ActionMessage.prototype.getHeader = function() {
  return /** @type{?proto.padlocal.ActionMessageHeader} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.ActionMessageHeader, 1));
};


/**
 * @param {?proto.padlocal.ActionMessageHeader|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WeChatRequest wechatRequest = 10;
 * @return {?proto.padlocal.WeChatRequest}
 */
proto.padlocal.ActionMessage.prototype.getWechatrequest = function() {
  return /** @type{?proto.padlocal.WeChatRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.WeChatRequest, 10));
};


/**
 * @param {?proto.padlocal.WeChatRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setWechatrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearWechatrequest = function() {
  return this.setWechatrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasWechatrequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WeChatResponse wechatResponse = 11;
 * @return {?proto.padlocal.WeChatResponse}
 */
proto.padlocal.ActionMessage.prototype.getWechatresponse = function() {
  return /** @type{?proto.padlocal.WeChatResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.WeChatResponse, 11));
};


/**
 * @param {?proto.padlocal.WeChatResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setWechatresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearWechatresponse = function() {
  return this.setWechatresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasWechatresponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SystemEventRequest systemEventRequest = 12;
 * @return {?proto.padlocal.SystemEventRequest}
 */
proto.padlocal.ActionMessage.prototype.getSystemeventrequest = function() {
  return /** @type{?proto.padlocal.SystemEventRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SystemEventRequest, 12));
};


/**
 * @param {?proto.padlocal.SystemEventRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSystemeventrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSystemeventrequest = function() {
  return this.setSystemeventrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSystemeventrequest = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SystemEventResponse systemEventResponse = 13;
 * @return {?proto.padlocal.SystemEventResponse}
 */
proto.padlocal.ActionMessage.prototype.getSystemeventresponse = function() {
  return /** @type{?proto.padlocal.SystemEventResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SystemEventResponse, 13));
};


/**
 * @param {?proto.padlocal.SystemEventResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSystemeventresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSystemeventresponse = function() {
  return this.setSystemeventresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSystemeventresponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional LongLinkUnpackRequest longLinkUnpackRequest = 14;
 * @return {?proto.padlocal.LongLinkUnpackRequest}
 */
proto.padlocal.ActionMessage.prototype.getLonglinkunpackrequest = function() {
  return /** @type{?proto.padlocal.LongLinkUnpackRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkUnpackRequest, 14));
};


/**
 * @param {?proto.padlocal.LongLinkUnpackRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLonglinkunpackrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLonglinkunpackrequest = function() {
  return this.setLonglinkunpackrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLonglinkunpackrequest = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional LongLinkUnpackResponse longLinkUnpackResponse = 15;
 * @return {?proto.padlocal.LongLinkUnpackResponse}
 */
proto.padlocal.ActionMessage.prototype.getLonglinkunpackresponse = function() {
  return /** @type{?proto.padlocal.LongLinkUnpackResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkUnpackResponse, 15));
};


/**
 * @param {?proto.padlocal.LongLinkUnpackResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLonglinkunpackresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLonglinkunpackresponse = function() {
  return this.setLonglinkunpackresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLonglinkunpackresponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional LongLinkHeartBeatRequest longLinkHeartBeatRequest = 16;
 * @return {?proto.padlocal.LongLinkHeartBeatRequest}
 */
proto.padlocal.ActionMessage.prototype.getLonglinkheartbeatrequest = function() {
  return /** @type{?proto.padlocal.LongLinkHeartBeatRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkHeartBeatRequest, 16));
};


/**
 * @param {?proto.padlocal.LongLinkHeartBeatRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLonglinkheartbeatrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLonglinkheartbeatrequest = function() {
  return this.setLonglinkheartbeatrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLonglinkheartbeatrequest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LongLinkHeartBeatResponse longLinkHeartBeatResponse = 17;
 * @return {?proto.padlocal.LongLinkHeartBeatResponse}
 */
proto.padlocal.ActionMessage.prototype.getLonglinkheartbeatresponse = function() {
  return /** @type{?proto.padlocal.LongLinkHeartBeatResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkHeartBeatResponse, 17));
};


/**
 * @param {?proto.padlocal.LongLinkHeartBeatResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLonglinkheartbeatresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLonglinkheartbeatresponse = function() {
  return this.setLonglinkheartbeatresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLonglinkheartbeatresponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional SyncRequest syncRequest = 100;
 * @return {?proto.padlocal.SyncRequest}
 */
proto.padlocal.ActionMessage.prototype.getSyncrequest = function() {
  return /** @type{?proto.padlocal.SyncRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncRequest, 100));
};


/**
 * @param {?proto.padlocal.SyncRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSyncrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSyncrequest = function() {
  return this.setSyncrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSyncrequest = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional SyncResponse syncResponse = 101;
 * @return {?proto.padlocal.SyncResponse}
 */
proto.padlocal.ActionMessage.prototype.getSyncresponse = function() {
  return /** @type{?proto.padlocal.SyncResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncResponse, 101));
};


/**
 * @param {?proto.padlocal.SyncResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSyncresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSyncresponse = function() {
  return this.setSyncresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSyncresponse = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional SyncEvent syncEvent = 102;
 * @return {?proto.padlocal.SyncEvent}
 */
proto.padlocal.ActionMessage.prototype.getSyncevent = function() {
  return /** @type{?proto.padlocal.SyncEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncEvent, 102));
};


/**
 * @param {?proto.padlocal.SyncEvent|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSyncevent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSyncevent = function() {
  return this.setSyncevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSyncevent = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional LoginRequest loginRequest = 200;
 * @return {?proto.padlocal.LoginRequest}
 */
proto.padlocal.ActionMessage.prototype.getLoginrequest = function() {
  return /** @type{?proto.padlocal.LoginRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LoginRequest, 200));
};


/**
 * @param {?proto.padlocal.LoginRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLoginrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 200, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLoginrequest = function() {
  return this.setLoginrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLoginrequest = function() {
  return jspb.Message.getField(this, 200) != null;
};


/**
 * optional LoginUpdateEvent loginUpdateEvent = 201;
 * @return {?proto.padlocal.LoginUpdateEvent}
 */
proto.padlocal.ActionMessage.prototype.getLoginupdateevent = function() {
  return /** @type{?proto.padlocal.LoginUpdateEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LoginUpdateEvent, 201));
};


/**
 * @param {?proto.padlocal.LoginUpdateEvent|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLoginupdateevent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 201, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLoginupdateevent = function() {
  return this.setLoginupdateevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLoginupdateevent = function() {
  return jspb.Message.getField(this, 201) != null;
};


/**
 * optional LoginResponse loginResponse = 202;
 * @return {?proto.padlocal.LoginResponse}
 */
proto.padlocal.ActionMessage.prototype.getLoginresponse = function() {
  return /** @type{?proto.padlocal.LoginResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LoginResponse, 202));
};


/**
 * @param {?proto.padlocal.LoginResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLoginresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 202, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLoginresponse = function() {
  return this.setLoginresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLoginresponse = function() {
  return jspb.Message.getField(this, 202) != null;
};


/**
 * optional LogoutRequest logoutRequest = 203;
 * @return {?proto.padlocal.LogoutRequest}
 */
proto.padlocal.ActionMessage.prototype.getLogoutrequest = function() {
  return /** @type{?proto.padlocal.LogoutRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LogoutRequest, 203));
};


/**
 * @param {?proto.padlocal.LogoutRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLogoutrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 203, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLogoutrequest = function() {
  return this.setLogoutrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLogoutrequest = function() {
  return jspb.Message.getField(this, 203) != null;
};


/**
 * optional LogoutResponse logoutResponse = 204;
 * @return {?proto.padlocal.LogoutResponse}
 */
proto.padlocal.ActionMessage.prototype.getLogoutresponse = function() {
  return /** @type{?proto.padlocal.LogoutResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LogoutResponse, 204));
};


/**
 * @param {?proto.padlocal.LogoutResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setLogoutresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 204, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearLogoutresponse = function() {
  return this.setLogoutresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasLogoutresponse = function() {
  return jspb.Message.getField(this, 204) != null;
};


/**
 * optional SendTextMessageRequest sendTextMessageRequest = 300;
 * @return {?proto.padlocal.SendTextMessageRequest}
 */
proto.padlocal.ActionMessage.prototype.getSendtextmessagerequest = function() {
  return /** @type{?proto.padlocal.SendTextMessageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendTextMessageRequest, 300));
};


/**
 * @param {?proto.padlocal.SendTextMessageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendtextmessagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 300, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendtextmessagerequest = function() {
  return this.setSendtextmessagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendtextmessagerequest = function() {
  return jspb.Message.getField(this, 300) != null;
};


/**
 * optional SendTextMessageResponse sendTextMessageResponse = 301;
 * @return {?proto.padlocal.SendTextMessageResponse}
 */
proto.padlocal.ActionMessage.prototype.getSendtextmessageresponse = function() {
  return /** @type{?proto.padlocal.SendTextMessageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendTextMessageResponse, 301));
};


/**
 * @param {?proto.padlocal.SendTextMessageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendtextmessageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 301, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendtextmessageresponse = function() {
  return this.setSendtextmessageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendtextmessageresponse = function() {
  return jspb.Message.getField(this, 301) != null;
};


/**
 * optional SendImageMessageRequest sendImageMessageRequest = 302;
 * @return {?proto.padlocal.SendImageMessageRequest}
 */
proto.padlocal.ActionMessage.prototype.getSendimagemessagerequest = function() {
  return /** @type{?proto.padlocal.SendImageMessageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendImageMessageRequest, 302));
};


/**
 * @param {?proto.padlocal.SendImageMessageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendimagemessagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 302, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendimagemessagerequest = function() {
  return this.setSendimagemessagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendimagemessagerequest = function() {
  return jspb.Message.getField(this, 302) != null;
};


/**
 * optional SendImageMessageResponse sendImageMessageResponse = 303;
 * @return {?proto.padlocal.SendImageMessageResponse}
 */
proto.padlocal.ActionMessage.prototype.getSendimagemessageresponse = function() {
  return /** @type{?proto.padlocal.SendImageMessageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendImageMessageResponse, 303));
};


/**
 * @param {?proto.padlocal.SendImageMessageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendimagemessageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 303, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendimagemessageresponse = function() {
  return this.setSendimagemessageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendimagemessageresponse = function() {
  return jspb.Message.getField(this, 303) != null;
};


/**
 * optional SendAppMessageRequest sendAppMessageRequest = 304;
 * @return {?proto.padlocal.SendAppMessageRequest}
 */
proto.padlocal.ActionMessage.prototype.getSendappmessagerequest = function() {
  return /** @type{?proto.padlocal.SendAppMessageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendAppMessageRequest, 304));
};


/**
 * @param {?proto.padlocal.SendAppMessageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendappmessagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 304, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendappmessagerequest = function() {
  return this.setSendappmessagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendappmessagerequest = function() {
  return jspb.Message.getField(this, 304) != null;
};


/**
 * optional SendAppMessageResponse sendAppMessageResponse = 305;
 * @return {?proto.padlocal.SendAppMessageResponse}
 */
proto.padlocal.ActionMessage.prototype.getSendappmessageresponse = function() {
  return /** @type{?proto.padlocal.SendAppMessageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SendAppMessageResponse, 305));
};


/**
 * @param {?proto.padlocal.SendAppMessageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSendappmessageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 305, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSendappmessageresponse = function() {
  return this.setSendappmessageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSendappmessageresponse = function() {
  return jspb.Message.getField(this, 305) != null;
};


/**
 * optional GetMessageImageRequest getMessageImageRequest = 306;
 * @return {?proto.padlocal.GetMessageImageRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageimagerequest = function() {
  return /** @type{?proto.padlocal.GetMessageImageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageImageRequest, 306));
};


/**
 * @param {?proto.padlocal.GetMessageImageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageimagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 306, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageimagerequest = function() {
  return this.setGetmessageimagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageimagerequest = function() {
  return jspb.Message.getField(this, 306) != null;
};


/**
 * optional GetMessageImageResponse getMessageImageResponse = 307;
 * @return {?proto.padlocal.GetMessageImageResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageimageresponse = function() {
  return /** @type{?proto.padlocal.GetMessageImageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageImageResponse, 307));
};


/**
 * @param {?proto.padlocal.GetMessageImageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageimageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 307, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageimageresponse = function() {
  return this.setGetmessageimageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageimageresponse = function() {
  return jspb.Message.getField(this, 307) != null;
};


/**
 * optional GetMessageVoiceRequest getMessageVoiceRequest = 308;
 * @return {?proto.padlocal.GetMessageVoiceRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevoicerequest = function() {
  return /** @type{?proto.padlocal.GetMessageVoiceRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVoiceRequest, 308));
};


/**
 * @param {?proto.padlocal.GetMessageVoiceRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevoicerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 308, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevoicerequest = function() {
  return this.setGetmessagevoicerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevoicerequest = function() {
  return jspb.Message.getField(this, 308) != null;
};


/**
 * optional GetMessageVoiceResponse getMessageVoiceResponse = 309;
 * @return {?proto.padlocal.GetMessageVoiceResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevoiceresponse = function() {
  return /** @type{?proto.padlocal.GetMessageVoiceResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVoiceResponse, 309));
};


/**
 * @param {?proto.padlocal.GetMessageVoiceResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevoiceresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 309, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevoiceresponse = function() {
  return this.setGetmessagevoiceresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevoiceresponse = function() {
  return jspb.Message.getField(this, 309) != null;
};


/**
 * optional GetMessageVideoThumbRequest getMessageVideoThumbRequest = 310;
 * @return {?proto.padlocal.GetMessageVideoThumbRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevideothumbrequest = function() {
  return /** @type{?proto.padlocal.GetMessageVideoThumbRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVideoThumbRequest, 310));
};


/**
 * @param {?proto.padlocal.GetMessageVideoThumbRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevideothumbrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 310, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevideothumbrequest = function() {
  return this.setGetmessagevideothumbrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevideothumbrequest = function() {
  return jspb.Message.getField(this, 310) != null;
};


/**
 * optional GetMessageVideoThumbResponse getMessageVideoThumbResponse = 311;
 * @return {?proto.padlocal.GetMessageVideoThumbResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevideothumbresponse = function() {
  return /** @type{?proto.padlocal.GetMessageVideoThumbResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVideoThumbResponse, 311));
};


/**
 * @param {?proto.padlocal.GetMessageVideoThumbResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevideothumbresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 311, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevideothumbresponse = function() {
  return this.setGetmessagevideothumbresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevideothumbresponse = function() {
  return jspb.Message.getField(this, 311) != null;
};


/**
 * optional GetMessageVideoRequest getMessageVideoRequest = 312;
 * @return {?proto.padlocal.GetMessageVideoRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevideorequest = function() {
  return /** @type{?proto.padlocal.GetMessageVideoRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVideoRequest, 312));
};


/**
 * @param {?proto.padlocal.GetMessageVideoRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevideorequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 312, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevideorequest = function() {
  return this.setGetmessagevideorequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevideorequest = function() {
  return jspb.Message.getField(this, 312) != null;
};


/**
 * optional GetMessageVideoResponse getMessageVideoResponse = 313;
 * @return {?proto.padlocal.GetMessageVideoResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessagevideoresponse = function() {
  return /** @type{?proto.padlocal.GetMessageVideoResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageVideoResponse, 313));
};


/**
 * @param {?proto.padlocal.GetMessageVideoResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessagevideoresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 313, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessagevideoresponse = function() {
  return this.setGetmessagevideoresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessagevideoresponse = function() {
  return jspb.Message.getField(this, 313) != null;
};


/**
 * optional GetMessageAttachRequest getMessageAttachRequest = 314;
 * @return {?proto.padlocal.GetMessageAttachRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageattachrequest = function() {
  return /** @type{?proto.padlocal.GetMessageAttachRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageAttachRequest, 314));
};


/**
 * @param {?proto.padlocal.GetMessageAttachRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageattachrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 314, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageattachrequest = function() {
  return this.setGetmessageattachrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageattachrequest = function() {
  return jspb.Message.getField(this, 314) != null;
};


/**
 * optional GetMessageAttachResponse getMessageAttachResponse = 315;
 * @return {?proto.padlocal.GetMessageAttachResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageattachresponse = function() {
  return /** @type{?proto.padlocal.GetMessageAttachResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageAttachResponse, 315));
};


/**
 * @param {?proto.padlocal.GetMessageAttachResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageattachresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 315, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageattachresponse = function() {
  return this.setGetmessageattachresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageattachresponse = function() {
  return jspb.Message.getField(this, 315) != null;
};


/**
 * optional ForwardMessageRequest forwardMessageRequest = 316;
 * @return {?proto.padlocal.ForwardMessageRequest}
 */
proto.padlocal.ActionMessage.prototype.getForwardmessagerequest = function() {
  return /** @type{?proto.padlocal.ForwardMessageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.ForwardMessageRequest, 316));
};


/**
 * @param {?proto.padlocal.ForwardMessageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setForwardmessagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 316, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearForwardmessagerequest = function() {
  return this.setForwardmessagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasForwardmessagerequest = function() {
  return jspb.Message.getField(this, 316) != null;
};


/**
 * optional ForwardMessageResponse forwardMessageResponse = 317;
 * @return {?proto.padlocal.ForwardMessageResponse}
 */
proto.padlocal.ActionMessage.prototype.getForwardmessageresponse = function() {
  return /** @type{?proto.padlocal.ForwardMessageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.ForwardMessageResponse, 317));
};


/**
 * @param {?proto.padlocal.ForwardMessageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setForwardmessageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 317, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearForwardmessageresponse = function() {
  return this.setForwardmessageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasForwardmessageresponse = function() {
  return jspb.Message.getField(this, 317) != null;
};


/**
 * optional GetMessageAttachThumbRequest getMessageAttachThumbRequest = 318;
 * @return {?proto.padlocal.GetMessageAttachThumbRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageattachthumbrequest = function() {
  return /** @type{?proto.padlocal.GetMessageAttachThumbRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageAttachThumbRequest, 318));
};


/**
 * @param {?proto.padlocal.GetMessageAttachThumbRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageattachthumbrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 318, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageattachthumbrequest = function() {
  return this.setGetmessageattachthumbrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageattachthumbrequest = function() {
  return jspb.Message.getField(this, 318) != null;
};


/**
 * optional GetMessageAttachThumbResponse getMessageAttachThumbResponse = 319;
 * @return {?proto.padlocal.GetMessageAttachThumbResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetmessageattachthumbresponse = function() {
  return /** @type{?proto.padlocal.GetMessageAttachThumbResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetMessageAttachThumbResponse, 319));
};


/**
 * @param {?proto.padlocal.GetMessageAttachThumbResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetmessageattachthumbresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 319, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetmessageattachthumbresponse = function() {
  return this.setGetmessageattachthumbresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetmessageattachthumbresponse = function() {
  return jspb.Message.getField(this, 319) != null;
};


/**
 * optional SyncContactRequest syncContactRequest = 400;
 * @return {?proto.padlocal.SyncContactRequest}
 */
proto.padlocal.ActionMessage.prototype.getSynccontactrequest = function() {
  return /** @type{?proto.padlocal.SyncContactRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncContactRequest, 400));
};


/**
 * @param {?proto.padlocal.SyncContactRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSynccontactrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 400, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSynccontactrequest = function() {
  return this.setSynccontactrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSynccontactrequest = function() {
  return jspb.Message.getField(this, 400) != null;
};


/**
 * optional SyncContactResponse syncContactResponse = 401;
 * @return {?proto.padlocal.SyncContactResponse}
 */
proto.padlocal.ActionMessage.prototype.getSynccontactresponse = function() {
  return /** @type{?proto.padlocal.SyncContactResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncContactResponse, 401));
};


/**
 * @param {?proto.padlocal.SyncContactResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSynccontactresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 401, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSynccontactresponse = function() {
  return this.setSynccontactresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSynccontactresponse = function() {
  return jspb.Message.getField(this, 401) != null;
};


/**
 * optional AcceptUserRequest acceptUserRequest = 402;
 * @return {?proto.padlocal.AcceptUserRequest}
 */
proto.padlocal.ActionMessage.prototype.getAcceptuserrequest = function() {
  return /** @type{?proto.padlocal.AcceptUserRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AcceptUserRequest, 402));
};


/**
 * @param {?proto.padlocal.AcceptUserRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAcceptuserrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 402, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAcceptuserrequest = function() {
  return this.setAcceptuserrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAcceptuserrequest = function() {
  return jspb.Message.getField(this, 402) != null;
};


/**
 * optional AcceptUserResponse acceptUserResponse = 403;
 * @return {?proto.padlocal.AcceptUserResponse}
 */
proto.padlocal.ActionMessage.prototype.getAcceptuserresponse = function() {
  return /** @type{?proto.padlocal.AcceptUserResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AcceptUserResponse, 403));
};


/**
 * @param {?proto.padlocal.AcceptUserResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAcceptuserresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 403, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAcceptuserresponse = function() {
  return this.setAcceptuserresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAcceptuserresponse = function() {
  return jspb.Message.getField(this, 403) != null;
};


/**
 * optional AddContactRequest addContactRequest = 404;
 * @return {?proto.padlocal.AddContactRequest}
 */
proto.padlocal.ActionMessage.prototype.getAddcontactrequest = function() {
  return /** @type{?proto.padlocal.AddContactRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddContactRequest, 404));
};


/**
 * @param {?proto.padlocal.AddContactRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddcontactrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 404, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddcontactrequest = function() {
  return this.setAddcontactrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddcontactrequest = function() {
  return jspb.Message.getField(this, 404) != null;
};


/**
 * optional AddContactResponse addContactResponse = 405;
 * @return {?proto.padlocal.AddContactResponse}
 */
proto.padlocal.ActionMessage.prototype.getAddcontactresponse = function() {
  return /** @type{?proto.padlocal.AddContactResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddContactResponse, 405));
};


/**
 * @param {?proto.padlocal.AddContactResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddcontactresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 405, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddcontactresponse = function() {
  return this.setAddcontactresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddcontactresponse = function() {
  return jspb.Message.getField(this, 405) != null;
};


/**
 * optional DeleteContactRequest deleteContactRequest = 406;
 * @return {?proto.padlocal.DeleteContactRequest}
 */
proto.padlocal.ActionMessage.prototype.getDeletecontactrequest = function() {
  return /** @type{?proto.padlocal.DeleteContactRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.DeleteContactRequest, 406));
};


/**
 * @param {?proto.padlocal.DeleteContactRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setDeletecontactrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 406, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearDeletecontactrequest = function() {
  return this.setDeletecontactrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasDeletecontactrequest = function() {
  return jspb.Message.getField(this, 406) != null;
};


/**
 * optional DeleteContactResponse deleteContactResponse = 407;
 * @return {?proto.padlocal.DeleteContactResponse}
 */
proto.padlocal.ActionMessage.prototype.getDeletecontactresponse = function() {
  return /** @type{?proto.padlocal.DeleteContactResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.DeleteContactResponse, 407));
};


/**
 * @param {?proto.padlocal.DeleteContactResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setDeletecontactresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 407, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearDeletecontactresponse = function() {
  return this.setDeletecontactresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasDeletecontactresponse = function() {
  return jspb.Message.getField(this, 407) != null;
};


/**
 * optional GetContactRequest getContactRequest = 408;
 * @return {?proto.padlocal.GetContactRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetcontactrequest = function() {
  return /** @type{?proto.padlocal.GetContactRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetContactRequest, 408));
};


/**
 * @param {?proto.padlocal.GetContactRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetcontactrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 408, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetcontactrequest = function() {
  return this.setGetcontactrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetcontactrequest = function() {
  return jspb.Message.getField(this, 408) != null;
};


/**
 * optional GetContactResponse getContactResponse = 409;
 * @return {?proto.padlocal.GetContactResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetcontactresponse = function() {
  return /** @type{?proto.padlocal.GetContactResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetContactResponse, 409));
};


/**
 * @param {?proto.padlocal.GetContactResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetcontactresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 409, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetcontactresponse = function() {
  return this.setGetcontactresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetcontactresponse = function() {
  return jspb.Message.getField(this, 409) != null;
};


/**
 * optional GetContactQRCodeRequest getContactQRCodeRequest = 410;
 * @return {?proto.padlocal.GetContactQRCodeRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetcontactqrcoderequest = function() {
  return /** @type{?proto.padlocal.GetContactQRCodeRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetContactQRCodeRequest, 410));
};


/**
 * @param {?proto.padlocal.GetContactQRCodeRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetcontactqrcoderequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 410, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetcontactqrcoderequest = function() {
  return this.setGetcontactqrcoderequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetcontactqrcoderequest = function() {
  return jspb.Message.getField(this, 410) != null;
};


/**
 * optional GetContactQRCodeResponse getContactQRCodeResponse = 411;
 * @return {?proto.padlocal.GetContactQRCodeResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetcontactqrcoderesponse = function() {
  return /** @type{?proto.padlocal.GetContactQRCodeResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetContactQRCodeResponse, 411));
};


/**
 * @param {?proto.padlocal.GetContactQRCodeResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetcontactqrcoderesponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 411, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetcontactqrcoderesponse = function() {
  return this.setGetcontactqrcoderesponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetcontactqrcoderesponse = function() {
  return jspb.Message.getField(this, 411) != null;
};


/**
 * optional SearchContactRequest searchContactRequest = 412;
 * @return {?proto.padlocal.SearchContactRequest}
 */
proto.padlocal.ActionMessage.prototype.getSearchcontactrequest = function() {
  return /** @type{?proto.padlocal.SearchContactRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SearchContactRequest, 412));
};


/**
 * @param {?proto.padlocal.SearchContactRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSearchcontactrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 412, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSearchcontactrequest = function() {
  return this.setSearchcontactrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSearchcontactrequest = function() {
  return jspb.Message.getField(this, 412) != null;
};


/**
 * optional SearchContactResponse searchContactResponse = 413;
 * @return {?proto.padlocal.SearchContactResponse}
 */
proto.padlocal.ActionMessage.prototype.getSearchcontactresponse = function() {
  return /** @type{?proto.padlocal.SearchContactResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SearchContactResponse, 413));
};


/**
 * @param {?proto.padlocal.SearchContactResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSearchcontactresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 413, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSearchcontactresponse = function() {
  return this.setSearchcontactresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSearchcontactresponse = function() {
  return jspb.Message.getField(this, 413) != null;
};


/**
 * optional UpdateSelfNickNameRequest updateSelfNickNameRequest = 414;
 * @return {?proto.padlocal.UpdateSelfNickNameRequest}
 */
proto.padlocal.ActionMessage.prototype.getUpdateselfnicknamerequest = function() {
  return /** @type{?proto.padlocal.UpdateSelfNickNameRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.UpdateSelfNickNameRequest, 414));
};


/**
 * @param {?proto.padlocal.UpdateSelfNickNameRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setUpdateselfnicknamerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 414, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearUpdateselfnicknamerequest = function() {
  return this.setUpdateselfnicknamerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasUpdateselfnicknamerequest = function() {
  return jspb.Message.getField(this, 414) != null;
};


/**
 * optional UpdateSelfNickNameResponse updateSelfNickNameResponse = 415;
 * @return {?proto.padlocal.UpdateSelfNickNameResponse}
 */
proto.padlocal.ActionMessage.prototype.getUpdateselfnicknameresponse = function() {
  return /** @type{?proto.padlocal.UpdateSelfNickNameResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.UpdateSelfNickNameResponse, 415));
};


/**
 * @param {?proto.padlocal.UpdateSelfNickNameResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setUpdateselfnicknameresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 415, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearUpdateselfnicknameresponse = function() {
  return this.setUpdateselfnicknameresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasUpdateselfnicknameresponse = function() {
  return jspb.Message.getField(this, 415) != null;
};


/**
 * optional CreateChatRoomRequest createChatRoomRequest = 500;
 * @return {?proto.padlocal.CreateChatRoomRequest}
 */
proto.padlocal.ActionMessage.prototype.getCreatechatroomrequest = function() {
  return /** @type{?proto.padlocal.CreateChatRoomRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CreateChatRoomRequest, 500));
};


/**
 * @param {?proto.padlocal.CreateChatRoomRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setCreatechatroomrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 500, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearCreatechatroomrequest = function() {
  return this.setCreatechatroomrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasCreatechatroomrequest = function() {
  return jspb.Message.getField(this, 500) != null;
};


/**
 * optional CreateChatRoomResponse createChatRoomResponse = 501;
 * @return {?proto.padlocal.CreateChatRoomResponse}
 */
proto.padlocal.ActionMessage.prototype.getCreatechatroomresponse = function() {
  return /** @type{?proto.padlocal.CreateChatRoomResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CreateChatRoomResponse, 501));
};


/**
 * @param {?proto.padlocal.CreateChatRoomResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setCreatechatroomresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 501, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearCreatechatroomresponse = function() {
  return this.setCreatechatroomresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasCreatechatroomresponse = function() {
  return jspb.Message.getField(this, 501) != null;
};


/**
 * optional GetChatRoomMembersRequest getChatRoomMembersRequest = 502;
 * @return {?proto.padlocal.GetChatRoomMembersRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroommembersrequest = function() {
  return /** @type{?proto.padlocal.GetChatRoomMembersRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomMembersRequest, 502));
};


/**
 * @param {?proto.padlocal.GetChatRoomMembersRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroommembersrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 502, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroommembersrequest = function() {
  return this.setGetchatroommembersrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroommembersrequest = function() {
  return jspb.Message.getField(this, 502) != null;
};


/**
 * optional GetChatRoomMembersResponse getChatRoomMembersResponse = 503;
 * @return {?proto.padlocal.GetChatRoomMembersResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroommembersresponse = function() {
  return /** @type{?proto.padlocal.GetChatRoomMembersResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomMembersResponse, 503));
};


/**
 * @param {?proto.padlocal.GetChatRoomMembersResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroommembersresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 503, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroommembersresponse = function() {
  return this.setGetchatroommembersresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroommembersresponse = function() {
  return jspb.Message.getField(this, 503) != null;
};


/**
 * optional GetChatRoomQrCodeRequest getChatRoomQrCodeRequest = 504;
 * @return {?proto.padlocal.GetChatRoomQrCodeRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroomqrcoderequest = function() {
  return /** @type{?proto.padlocal.GetChatRoomQrCodeRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomQrCodeRequest, 504));
};


/**
 * @param {?proto.padlocal.GetChatRoomQrCodeRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroomqrcoderequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 504, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroomqrcoderequest = function() {
  return this.setGetchatroomqrcoderequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroomqrcoderequest = function() {
  return jspb.Message.getField(this, 504) != null;
};


/**
 * optional GetChatRoomQrCodeResponse getChatRoomQrCodeResponse = 505;
 * @return {?proto.padlocal.GetChatRoomQrCodeResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroomqrcoderesponse = function() {
  return /** @type{?proto.padlocal.GetChatRoomQrCodeResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomQrCodeResponse, 505));
};


/**
 * @param {?proto.padlocal.GetChatRoomQrCodeResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroomqrcoderesponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 505, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroomqrcoderesponse = function() {
  return this.setGetchatroomqrcoderesponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroomqrcoderesponse = function() {
  return jspb.Message.getField(this, 505) != null;
};


/**
 * optional GetChatRoomMemberRequest getChatRoomMemberRequest = 506;
 * @return {?proto.padlocal.GetChatRoomMemberRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroommemberrequest = function() {
  return /** @type{?proto.padlocal.GetChatRoomMemberRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomMemberRequest, 506));
};


/**
 * @param {?proto.padlocal.GetChatRoomMemberRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroommemberrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 506, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroommemberrequest = function() {
  return this.setGetchatroommemberrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroommemberrequest = function() {
  return jspb.Message.getField(this, 506) != null;
};


/**
 * optional GetChatRoomMemberResponse getChatRoomMemberResponse = 507;
 * @return {?proto.padlocal.GetChatRoomMemberResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetchatroommemberresponse = function() {
  return /** @type{?proto.padlocal.GetChatRoomMemberResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetChatRoomMemberResponse, 507));
};


/**
 * @param {?proto.padlocal.GetChatRoomMemberResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetchatroommemberresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 507, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetchatroommemberresponse = function() {
  return this.setGetchatroommemberresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetchatroommemberresponse = function() {
  return jspb.Message.getField(this, 507) != null;
};


/**
 * optional SetChatRoomAnnouncementRequest setChatRoomAnnouncementRequest = 508;
 * @return {?proto.padlocal.SetChatRoomAnnouncementRequest}
 */
proto.padlocal.ActionMessage.prototype.getSetchatroomannouncementrequest = function() {
  return /** @type{?proto.padlocal.SetChatRoomAnnouncementRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetChatRoomAnnouncementRequest, 508));
};


/**
 * @param {?proto.padlocal.SetChatRoomAnnouncementRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetchatroomannouncementrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 508, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetchatroomannouncementrequest = function() {
  return this.setSetchatroomannouncementrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetchatroomannouncementrequest = function() {
  return jspb.Message.getField(this, 508) != null;
};


/**
 * optional SetChatRoomAnnouncementResponse setChatRoomAnnouncementResponse = 509;
 * @return {?proto.padlocal.SetChatRoomAnnouncementResponse}
 */
proto.padlocal.ActionMessage.prototype.getSetchatroomannouncementresponse = function() {
  return /** @type{?proto.padlocal.SetChatRoomAnnouncementResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetChatRoomAnnouncementResponse, 509));
};


/**
 * @param {?proto.padlocal.SetChatRoomAnnouncementResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetchatroomannouncementresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 509, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetchatroomannouncementresponse = function() {
  return this.setSetchatroomannouncementresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetchatroomannouncementresponse = function() {
  return jspb.Message.getField(this, 509) != null;
};


/**
 * optional AddChatRoomMemberRequest addChatRoomMemberRequest = 510;
 * @return {?proto.padlocal.AddChatRoomMemberRequest}
 */
proto.padlocal.ActionMessage.prototype.getAddchatroommemberrequest = function() {
  return /** @type{?proto.padlocal.AddChatRoomMemberRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddChatRoomMemberRequest, 510));
};


/**
 * @param {?proto.padlocal.AddChatRoomMemberRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddchatroommemberrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 510, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddchatroommemberrequest = function() {
  return this.setAddchatroommemberrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddchatroommemberrequest = function() {
  return jspb.Message.getField(this, 510) != null;
};


/**
 * optional AddChatRoomMemberResponse addChatRoomMemberResponse = 511;
 * @return {?proto.padlocal.AddChatRoomMemberResponse}
 */
proto.padlocal.ActionMessage.prototype.getAddchatroommemberresponse = function() {
  return /** @type{?proto.padlocal.AddChatRoomMemberResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddChatRoomMemberResponse, 511));
};


/**
 * @param {?proto.padlocal.AddChatRoomMemberResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddchatroommemberresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 511, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddchatroommemberresponse = function() {
  return this.setAddchatroommemberresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddchatroommemberresponse = function() {
  return jspb.Message.getField(this, 511) != null;
};


/**
 * optional InviteChatRoomMemberRequest inviteChatRoomMemberRequest = 512;
 * @return {?proto.padlocal.InviteChatRoomMemberRequest}
 */
proto.padlocal.ActionMessage.prototype.getInvitechatroommemberrequest = function() {
  return /** @type{?proto.padlocal.InviteChatRoomMemberRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.InviteChatRoomMemberRequest, 512));
};


/**
 * @param {?proto.padlocal.InviteChatRoomMemberRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setInvitechatroommemberrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 512, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearInvitechatroommemberrequest = function() {
  return this.setInvitechatroommemberrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasInvitechatroommemberrequest = function() {
  return jspb.Message.getField(this, 512) != null;
};


/**
 * optional InviteChatRoomMemberResponse inviteChatRoomMemberResponse = 513;
 * @return {?proto.padlocal.InviteChatRoomMemberResponse}
 */
proto.padlocal.ActionMessage.prototype.getInvitechatroommemberresponse = function() {
  return /** @type{?proto.padlocal.InviteChatRoomMemberResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.InviteChatRoomMemberResponse, 513));
};


/**
 * @param {?proto.padlocal.InviteChatRoomMemberResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setInvitechatroommemberresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 513, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearInvitechatroommemberresponse = function() {
  return this.setInvitechatroommemberresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasInvitechatroommemberresponse = function() {
  return jspb.Message.getField(this, 513) != null;
};


/**
 * optional DeleteChatRoomMemberRequest deleteChatRoomMemberRequest = 514;
 * @return {?proto.padlocal.DeleteChatRoomMemberRequest}
 */
proto.padlocal.ActionMessage.prototype.getDeletechatroommemberrequest = function() {
  return /** @type{?proto.padlocal.DeleteChatRoomMemberRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.DeleteChatRoomMemberRequest, 514));
};


/**
 * @param {?proto.padlocal.DeleteChatRoomMemberRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setDeletechatroommemberrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 514, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearDeletechatroommemberrequest = function() {
  return this.setDeletechatroommemberrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasDeletechatroommemberrequest = function() {
  return jspb.Message.getField(this, 514) != null;
};


/**
 * optional DeleteChatRoomMemberResponse deleteChatRoomMemberResponse = 515;
 * @return {?proto.padlocal.DeleteChatRoomMemberResponse}
 */
proto.padlocal.ActionMessage.prototype.getDeletechatroommemberresponse = function() {
  return /** @type{?proto.padlocal.DeleteChatRoomMemberResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.DeleteChatRoomMemberResponse, 515));
};


/**
 * @param {?proto.padlocal.DeleteChatRoomMemberResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setDeletechatroommemberresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 515, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearDeletechatroommemberresponse = function() {
  return this.setDeletechatroommemberresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasDeletechatroommemberresponse = function() {
  return jspb.Message.getField(this, 515) != null;
};


/**
 * optional SetChatRoomNameRequest setChatRoomNameRequest = 516;
 * @return {?proto.padlocal.SetChatRoomNameRequest}
 */
proto.padlocal.ActionMessage.prototype.getSetchatroomnamerequest = function() {
  return /** @type{?proto.padlocal.SetChatRoomNameRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetChatRoomNameRequest, 516));
};


/**
 * @param {?proto.padlocal.SetChatRoomNameRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetchatroomnamerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 516, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetchatroomnamerequest = function() {
  return this.setSetchatroomnamerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetchatroomnamerequest = function() {
  return jspb.Message.getField(this, 516) != null;
};


/**
 * optional SetChatRoomNameResponse setChatRoomNameResponse = 517;
 * @return {?proto.padlocal.SetChatRoomNameResponse}
 */
proto.padlocal.ActionMessage.prototype.getSetchatroomnameresponse = function() {
  return /** @type{?proto.padlocal.SetChatRoomNameResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetChatRoomNameResponse, 517));
};


/**
 * @param {?proto.padlocal.SetChatRoomNameResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetchatroomnameresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 517, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetchatroomnameresponse = function() {
  return this.setSetchatroomnameresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetchatroomnameresponse = function() {
  return jspb.Message.getField(this, 517) != null;
};


/**
 * optional AddLabelRequest addLabelRequest = 600;
 * @return {?proto.padlocal.AddLabelRequest}
 */
proto.padlocal.ActionMessage.prototype.getAddlabelrequest = function() {
  return /** @type{?proto.padlocal.AddLabelRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddLabelRequest, 600));
};


/**
 * @param {?proto.padlocal.AddLabelRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddlabelrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 600, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddlabelrequest = function() {
  return this.setAddlabelrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddlabelrequest = function() {
  return jspb.Message.getField(this, 600) != null;
};


/**
 * optional AddLabelResponse addLabelResponse = 601;
 * @return {?proto.padlocal.AddLabelResponse}
 */
proto.padlocal.ActionMessage.prototype.getAddlabelresponse = function() {
  return /** @type{?proto.padlocal.AddLabelResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AddLabelResponse, 601));
};


/**
 * @param {?proto.padlocal.AddLabelResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setAddlabelresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 601, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearAddlabelresponse = function() {
  return this.setAddlabelresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasAddlabelresponse = function() {
  return jspb.Message.getField(this, 601) != null;
};


/**
 * optional RemoveLabelRequest removeLabelRequest = 602;
 * @return {?proto.padlocal.RemoveLabelRequest}
 */
proto.padlocal.ActionMessage.prototype.getRemovelabelrequest = function() {
  return /** @type{?proto.padlocal.RemoveLabelRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.RemoveLabelRequest, 602));
};


/**
 * @param {?proto.padlocal.RemoveLabelRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setRemovelabelrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 602, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearRemovelabelrequest = function() {
  return this.setRemovelabelrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasRemovelabelrequest = function() {
  return jspb.Message.getField(this, 602) != null;
};


/**
 * optional RemoveLabelResponse removeLabelResponse = 603;
 * @return {?proto.padlocal.RemoveLabelResponse}
 */
proto.padlocal.ActionMessage.prototype.getRemovelabelresponse = function() {
  return /** @type{?proto.padlocal.RemoveLabelResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.RemoveLabelResponse, 603));
};


/**
 * @param {?proto.padlocal.RemoveLabelResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setRemovelabelresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 603, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearRemovelabelresponse = function() {
  return this.setRemovelabelresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasRemovelabelresponse = function() {
  return jspb.Message.getField(this, 603) != null;
};


/**
 * optional GetLabelListRequest getLabelListRequest = 604;
 * @return {?proto.padlocal.GetLabelListRequest}
 */
proto.padlocal.ActionMessage.prototype.getGetlabellistrequest = function() {
  return /** @type{?proto.padlocal.GetLabelListRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetLabelListRequest, 604));
};


/**
 * @param {?proto.padlocal.GetLabelListRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetlabellistrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 604, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetlabellistrequest = function() {
  return this.setGetlabellistrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetlabellistrequest = function() {
  return jspb.Message.getField(this, 604) != null;
};


/**
 * optional GetLabelListResponse getLabelListResponse = 605;
 * @return {?proto.padlocal.GetLabelListResponse}
 */
proto.padlocal.ActionMessage.prototype.getGetlabellistresponse = function() {
  return /** @type{?proto.padlocal.GetLabelListResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.GetLabelListResponse, 605));
};


/**
 * @param {?proto.padlocal.GetLabelListResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setGetlabellistresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 605, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearGetlabellistresponse = function() {
  return this.setGetlabellistresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasGetlabellistresponse = function() {
  return jspb.Message.getField(this, 605) != null;
};


/**
 * optional SetContactLabelRequest setContactLabelRequest = 606;
 * @return {?proto.padlocal.SetContactLabelRequest}
 */
proto.padlocal.ActionMessage.prototype.getSetcontactlabelrequest = function() {
  return /** @type{?proto.padlocal.SetContactLabelRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetContactLabelRequest, 606));
};


/**
 * @param {?proto.padlocal.SetContactLabelRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetcontactlabelrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 606, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetcontactlabelrequest = function() {
  return this.setSetcontactlabelrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetcontactlabelrequest = function() {
  return jspb.Message.getField(this, 606) != null;
};


/**
 * optional SetContactLabelResponse setContactLabelResponse = 607;
 * @return {?proto.padlocal.SetContactLabelResponse}
 */
proto.padlocal.ActionMessage.prototype.getSetcontactlabelresponse = function() {
  return /** @type{?proto.padlocal.SetContactLabelResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SetContactLabelResponse, 607));
};


/**
 * @param {?proto.padlocal.SetContactLabelResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSetcontactlabelresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 607, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSetcontactlabelresponse = function() {
  return this.setSetcontactlabelresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSetcontactlabelresponse = function() {
  return jspb.Message.getField(this, 607) != null;
};


/**
 * optional SnsSendMomentRequest snsSendMomentRequest = 700;
 * @return {?proto.padlocal.SnsSendMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnssendmomentrequest = function() {
  return /** @type{?proto.padlocal.SnsSendMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentRequest, 700));
};


/**
 * @param {?proto.padlocal.SnsSendMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnssendmomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 700, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnssendmomentrequest = function() {
  return this.setSnssendmomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnssendmomentrequest = function() {
  return jspb.Message.getField(this, 700) != null;
};


/**
 * optional SnsSendMomentResponse snsSendMomentResponse = 701;
 * @return {?proto.padlocal.SnsSendMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnssendmomentresponse = function() {
  return /** @type{?proto.padlocal.SnsSendMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentResponse, 701));
};


/**
 * @param {?proto.padlocal.SnsSendMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnssendmomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 701, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnssendmomentresponse = function() {
  return this.setSnssendmomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnssendmomentresponse = function() {
  return jspb.Message.getField(this, 701) != null;
};


/**
 * optional SnsForwardMomentRequest snsForwardMomentRequest = 702;
 * @return {?proto.padlocal.SnsForwardMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsforwardmomentrequest = function() {
  return /** @type{?proto.padlocal.SnsForwardMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsForwardMomentRequest, 702));
};


/**
 * @param {?proto.padlocal.SnsForwardMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsforwardmomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 702, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsforwardmomentrequest = function() {
  return this.setSnsforwardmomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsforwardmomentrequest = function() {
  return jspb.Message.getField(this, 702) != null;
};


/**
 * optional SnsForwardMomentResponse snsForwardMomentResponse = 703;
 * @return {?proto.padlocal.SnsForwardMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsforwardmomentresponse = function() {
  return /** @type{?proto.padlocal.SnsForwardMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsForwardMomentResponse, 703));
};


/**
 * @param {?proto.padlocal.SnsForwardMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsforwardmomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 703, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsforwardmomentresponse = function() {
  return this.setSnsforwardmomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsforwardmomentresponse = function() {
  return jspb.Message.getField(this, 703) != null;
};


/**
 * optional SnsGetUserPageRequest snsGetUserPageRequest = 704;
 * @return {?proto.padlocal.SnsGetUserPageRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsgetuserpagerequest = function() {
  return /** @type{?proto.padlocal.SnsGetUserPageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetUserPageRequest, 704));
};


/**
 * @param {?proto.padlocal.SnsGetUserPageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgetuserpagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 704, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgetuserpagerequest = function() {
  return this.setSnsgetuserpagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgetuserpagerequest = function() {
  return jspb.Message.getField(this, 704) != null;
};


/**
 * optional SnsGetUserPageResponse snsGetUserPageResponse = 705;
 * @return {?proto.padlocal.SnsGetUserPageResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsgetuserpageresponse = function() {
  return /** @type{?proto.padlocal.SnsGetUserPageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetUserPageResponse, 705));
};


/**
 * @param {?proto.padlocal.SnsGetUserPageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgetuserpageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 705, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgetuserpageresponse = function() {
  return this.setSnsgetuserpageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgetuserpageresponse = function() {
  return jspb.Message.getField(this, 705) != null;
};


/**
 * optional SnsGetTimelineRequest snsGetTimelineRequest = 706;
 * @return {?proto.padlocal.SnsGetTimelineRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsgettimelinerequest = function() {
  return /** @type{?proto.padlocal.SnsGetTimelineRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetTimelineRequest, 706));
};


/**
 * @param {?proto.padlocal.SnsGetTimelineRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgettimelinerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 706, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgettimelinerequest = function() {
  return this.setSnsgettimelinerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgettimelinerequest = function() {
  return jspb.Message.getField(this, 706) != null;
};


/**
 * optional SnsGetTimelineResponse snsGetTimelineResponse = 707;
 * @return {?proto.padlocal.SnsGetTimelineResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsgettimelineresponse = function() {
  return /** @type{?proto.padlocal.SnsGetTimelineResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetTimelineResponse, 707));
};


/**
 * @param {?proto.padlocal.SnsGetTimelineResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgettimelineresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 707, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgettimelineresponse = function() {
  return this.setSnsgettimelineresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgettimelineresponse = function() {
  return jspb.Message.getField(this, 707) != null;
};


/**
 * optional SnsGetMomentRequest snsGetMomentRequest = 708;
 * @return {?proto.padlocal.SnsGetMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsgetmomentrequest = function() {
  return /** @type{?proto.padlocal.SnsGetMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetMomentRequest, 708));
};


/**
 * @param {?proto.padlocal.SnsGetMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgetmomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 708, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgetmomentrequest = function() {
  return this.setSnsgetmomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgetmomentrequest = function() {
  return jspb.Message.getField(this, 708) != null;
};


/**
 * optional SnsGetMomentResponse snsGetMomentResponse = 709;
 * @return {?proto.padlocal.SnsGetMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsgetmomentresponse = function() {
  return /** @type{?proto.padlocal.SnsGetMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsGetMomentResponse, 709));
};


/**
 * @param {?proto.padlocal.SnsGetMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsgetmomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 709, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsgetmomentresponse = function() {
  return this.setSnsgetmomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsgetmomentresponse = function() {
  return jspb.Message.getField(this, 709) != null;
};


/**
 * optional SnsSendCommentRequest snsSendCommentRequest = 710;
 * @return {?proto.padlocal.SnsSendCommentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnssendcommentrequest = function() {
  return /** @type{?proto.padlocal.SnsSendCommentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendCommentRequest, 710));
};


/**
 * @param {?proto.padlocal.SnsSendCommentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnssendcommentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 710, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnssendcommentrequest = function() {
  return this.setSnssendcommentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnssendcommentrequest = function() {
  return jspb.Message.getField(this, 710) != null;
};


/**
 * optional SnsSendCommentResponse snsSendCommentResponse = 711;
 * @return {?proto.padlocal.SnsSendCommentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnssendcommentresponse = function() {
  return /** @type{?proto.padlocal.SnsSendCommentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendCommentResponse, 711));
};


/**
 * @param {?proto.padlocal.SnsSendCommentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnssendcommentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 711, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnssendcommentresponse = function() {
  return this.setSnssendcommentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnssendcommentresponse = function() {
  return jspb.Message.getField(this, 711) != null;
};


/**
 * optional SnsUploadImageRequest snsUploadImageRequest = 712;
 * @return {?proto.padlocal.SnsUploadImageRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsuploadimagerequest = function() {
  return /** @type{?proto.padlocal.SnsUploadImageRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsUploadImageRequest, 712));
};


/**
 * @param {?proto.padlocal.SnsUploadImageRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsuploadimagerequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 712, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsuploadimagerequest = function() {
  return this.setSnsuploadimagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsuploadimagerequest = function() {
  return jspb.Message.getField(this, 712) != null;
};


/**
 * optional SnsUploadImageResponse snsUploadImageResponse = 713;
 * @return {?proto.padlocal.SnsUploadImageResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsuploadimageresponse = function() {
  return /** @type{?proto.padlocal.SnsUploadImageResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsUploadImageResponse, 713));
};


/**
 * @param {?proto.padlocal.SnsUploadImageResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsuploadimageresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 713, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsuploadimageresponse = function() {
  return this.setSnsuploadimageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsuploadimageresponse = function() {
  return jspb.Message.getField(this, 713) != null;
};


/**
 * optional SnsLikeMomentRequest snsLikeMomentRequest = 714;
 * @return {?proto.padlocal.SnsLikeMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnslikemomentrequest = function() {
  return /** @type{?proto.padlocal.SnsLikeMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsLikeMomentRequest, 714));
};


/**
 * @param {?proto.padlocal.SnsLikeMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnslikemomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 714, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnslikemomentrequest = function() {
  return this.setSnslikemomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnslikemomentrequest = function() {
  return jspb.Message.getField(this, 714) != null;
};


/**
 * optional SnsLikeMomentResponse snsLikeMomentResponse = 715;
 * @return {?proto.padlocal.SnsLikeMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnslikemomentresponse = function() {
  return /** @type{?proto.padlocal.SnsLikeMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsLikeMomentResponse, 715));
};


/**
 * @param {?proto.padlocal.SnsLikeMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnslikemomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 715, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnslikemomentresponse = function() {
  return this.setSnslikemomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnslikemomentresponse = function() {
  return jspb.Message.getField(this, 715) != null;
};


/**
 * optional SnsUnlikeMomentRequest snsUnlikeMomentRequest = 716;
 * @return {?proto.padlocal.SnsUnlikeMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsunlikemomentrequest = function() {
  return /** @type{?proto.padlocal.SnsUnlikeMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsUnlikeMomentRequest, 716));
};


/**
 * @param {?proto.padlocal.SnsUnlikeMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsunlikemomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 716, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsunlikemomentrequest = function() {
  return this.setSnsunlikemomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsunlikemomentrequest = function() {
  return jspb.Message.getField(this, 716) != null;
};


/**
 * optional SnsUnlikeMomentResponse snsUnlikeMomentResponse = 717;
 * @return {?proto.padlocal.SnsUnlikeMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsunlikemomentresponse = function() {
  return /** @type{?proto.padlocal.SnsUnlikeMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsUnlikeMomentResponse, 717));
};


/**
 * @param {?proto.padlocal.SnsUnlikeMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsunlikemomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 717, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsunlikemomentresponse = function() {
  return this.setSnsunlikemomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsunlikemomentresponse = function() {
  return jspb.Message.getField(this, 717) != null;
};


/**
 * optional SnsRemoveMomentCommentRequest snsRemoveMomentCommentRequest = 718;
 * @return {?proto.padlocal.SnsRemoveMomentCommentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsremovemomentcommentrequest = function() {
  return /** @type{?proto.padlocal.SnsRemoveMomentCommentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsRemoveMomentCommentRequest, 718));
};


/**
 * @param {?proto.padlocal.SnsRemoveMomentCommentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsremovemomentcommentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 718, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsremovemomentcommentrequest = function() {
  return this.setSnsremovemomentcommentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsremovemomentcommentrequest = function() {
  return jspb.Message.getField(this, 718) != null;
};


/**
 * optional SnsRemoveMomentCommentResponse snsRemoveMomentCommentResponse = 719;
 * @return {?proto.padlocal.SnsRemoveMomentCommentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsremovemomentcommentresponse = function() {
  return /** @type{?proto.padlocal.SnsRemoveMomentCommentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsRemoveMomentCommentResponse, 719));
};


/**
 * @param {?proto.padlocal.SnsRemoveMomentCommentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsremovemomentcommentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 719, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsremovemomentcommentresponse = function() {
  return this.setSnsremovemomentcommentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsremovemomentcommentresponse = function() {
  return jspb.Message.getField(this, 719) != null;
};


/**
 * optional SnsMakeMomentPrivateRequest snsMakeMomentPrivateRequest = 720;
 * @return {?proto.padlocal.SnsMakeMomentPrivateRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsmakemomentprivaterequest = function() {
  return /** @type{?proto.padlocal.SnsMakeMomentPrivateRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMakeMomentPrivateRequest, 720));
};


/**
 * @param {?proto.padlocal.SnsMakeMomentPrivateRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsmakemomentprivaterequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 720, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsmakemomentprivaterequest = function() {
  return this.setSnsmakemomentprivaterequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsmakemomentprivaterequest = function() {
  return jspb.Message.getField(this, 720) != null;
};


/**
 * optional SnsMakeMomentPrivateResponse snsMakeMomentPrivateResponse = 721;
 * @return {?proto.padlocal.SnsMakeMomentPrivateResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsmakemomentprivateresponse = function() {
  return /** @type{?proto.padlocal.SnsMakeMomentPrivateResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMakeMomentPrivateResponse, 721));
};


/**
 * @param {?proto.padlocal.SnsMakeMomentPrivateResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsmakemomentprivateresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 721, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsmakemomentprivateresponse = function() {
  return this.setSnsmakemomentprivateresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsmakemomentprivateresponse = function() {
  return jspb.Message.getField(this, 721) != null;
};


/**
 * optional SnsMakeMomentPublicRequest snsMakeMomentPublicRequest = 722;
 * @return {?proto.padlocal.SnsMakeMomentPublicRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsmakemomentpublicrequest = function() {
  return /** @type{?proto.padlocal.SnsMakeMomentPublicRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMakeMomentPublicRequest, 722));
};


/**
 * @param {?proto.padlocal.SnsMakeMomentPublicRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsmakemomentpublicrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 722, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsmakemomentpublicrequest = function() {
  return this.setSnsmakemomentpublicrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsmakemomentpublicrequest = function() {
  return jspb.Message.getField(this, 722) != null;
};


/**
 * optional SnsMakeMomentPublicResponse snsMakeMomentPublicResponse = 723;
 * @return {?proto.padlocal.SnsMakeMomentPublicResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsmakemomentpublicresponse = function() {
  return /** @type{?proto.padlocal.SnsMakeMomentPublicResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMakeMomentPublicResponse, 723));
};


/**
 * @param {?proto.padlocal.SnsMakeMomentPublicResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsmakemomentpublicresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 723, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsmakemomentpublicresponse = function() {
  return this.setSnsmakemomentpublicresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsmakemomentpublicresponse = function() {
  return jspb.Message.getField(this, 723) != null;
};


/**
 * optional SnsRemoveMomentRequest snsRemoveMomentRequest = 724;
 * @return {?proto.padlocal.SnsRemoveMomentRequest}
 */
proto.padlocal.ActionMessage.prototype.getSnsremovemomentrequest = function() {
  return /** @type{?proto.padlocal.SnsRemoveMomentRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsRemoveMomentRequest, 724));
};


/**
 * @param {?proto.padlocal.SnsRemoveMomentRequest|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsremovemomentrequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 724, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsremovemomentrequest = function() {
  return this.setSnsremovemomentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsremovemomentrequest = function() {
  return jspb.Message.getField(this, 724) != null;
};


/**
 * optional SnsRemoveMomentResponse snsRemoveMomentResponse = 725;
 * @return {?proto.padlocal.SnsRemoveMomentResponse}
 */
proto.padlocal.ActionMessage.prototype.getSnsremovemomentresponse = function() {
  return /** @type{?proto.padlocal.SnsRemoveMomentResponse} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsRemoveMomentResponse, 725));
};


/**
 * @param {?proto.padlocal.SnsRemoveMomentResponse|undefined} value
 * @return {!proto.padlocal.ActionMessage} returns this
*/
proto.padlocal.ActionMessage.prototype.setSnsremovemomentresponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 725, proto.padlocal.ActionMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.ActionMessage} returns this
 */
proto.padlocal.ActionMessage.prototype.clearSnsremovemomentresponse = function() {
  return this.setSnsremovemomentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.ActionMessage.prototype.hasSnsremovemomentresponse = function() {
  return jspb.Message.getField(this, 725) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.WeChatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.WeChatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.WeChatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.WeChatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64(),
    host: (f = msg.getHost()) && proto.padlocal.Host.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 5, 0),
    socketresponsedatalen: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.WeChatRequest}
 */
proto.padlocal.WeChatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.WeChatRequest;
  return proto.padlocal.WeChatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.WeChatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.WeChatRequest}
 */
proto.padlocal.WeChatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.WeChatRequestChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = new proto.padlocal.Host;
      reader.readMessage(value,proto.padlocal.Host.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeq(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSocketresponsedatalen(value);
      break;
    case 7:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.WeChatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.WeChatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.WeChatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.WeChatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.padlocal.Host.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSocketresponsedatalen();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional WeChatRequestChannel channel = 1;
 * @return {!proto.padlocal.WeChatRequestChannel}
 */
proto.padlocal.WeChatRequest.prototype.getChannel = function() {
  return /** @type {!proto.padlocal.WeChatRequestChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.WeChatRequestChannel} value
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.WeChatRequest.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.padlocal.WeChatRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.padlocal.WeChatRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Host host = 3;
 * @return {?proto.padlocal.Host}
 */
proto.padlocal.WeChatRequest.prototype.getHost = function() {
  return /** @type{?proto.padlocal.Host} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Host, 3));
};


/**
 * @param {?proto.padlocal.Host|undefined} value
 * @return {!proto.padlocal.WeChatRequest} returns this
*/
proto.padlocal.WeChatRequest.prototype.setHost = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.clearHost = function() {
  return this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.WeChatRequest.prototype.hasHost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.padlocal.WeChatRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 seq = 5;
 * @return {number}
 */
proto.padlocal.WeChatRequest.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 socketResponseDataLen = 6;
 * @return {number}
 */
proto.padlocal.WeChatRequest.prototype.getSocketresponsedatalen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.setSocketresponsedatalen = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional CdnRequest cdnRequest = 7;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.WeChatRequest.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 7));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.WeChatRequest} returns this
*/
proto.padlocal.WeChatRequest.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.WeChatRequest} returns this
 */
proto.padlocal.WeChatRequest.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.WeChatRequest.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.WeChatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.WeChatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.WeChatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.WeChatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.WeChatResponse}
 */
proto.padlocal.WeChatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.WeChatResponse;
  return proto.padlocal.WeChatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.WeChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.WeChatResponse}
 */
proto.padlocal.WeChatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.WeChatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.WeChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.WeChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.WeChatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.WeChatResponse.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.padlocal.WeChatResponse.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.padlocal.WeChatResponse.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.WeChatResponse} returns this
 */
proto.padlocal.WeChatResponse.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkUnpackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkUnpackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkUnpackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkUnpackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamdata: msg.getStreamdata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkUnpackRequest}
 */
proto.padlocal.LongLinkUnpackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkUnpackRequest;
  return proto.padlocal.LongLinkUnpackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkUnpackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkUnpackRequest}
 */
proto.padlocal.LongLinkUnpackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStreamdata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkUnpackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkUnpackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkUnpackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkUnpackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamdata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes streamData = 1;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.LongLinkUnpackRequest.prototype.getStreamdata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes streamData = 1;
 * This is a type-conversion wrapper around `getStreamdata()`
 * @return {string}
 */
proto.padlocal.LongLinkUnpackRequest.prototype.getStreamdata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStreamdata()));
};


/**
 * optional bytes streamData = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStreamdata()`
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkUnpackRequest.prototype.getStreamdata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStreamdata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.LongLinkUnpackRequest} returns this
 */
proto.padlocal.LongLinkUnpackRequest.prototype.setStreamdata = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.LongLinkUnpackResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkUnpackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkUnpackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkUnpackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkUnpackResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetList: jspb.Message.toObjectList(msg.getPacketList(),
    proto.padlocal.LongLinkPacket.toObject, includeInstance),
    streamdataconsumedlen: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkUnpackResponse}
 */
proto.padlocal.LongLinkUnpackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkUnpackResponse;
  return proto.padlocal.LongLinkUnpackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkUnpackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkUnpackResponse}
 */
proto.padlocal.LongLinkUnpackResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.LongLinkPacket;
      reader.readMessage(value,proto.padlocal.LongLinkPacket.deserializeBinaryFromReader);
      msg.addPacket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStreamdataconsumedlen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkUnpackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkUnpackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkUnpackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkUnpackResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.LongLinkPacket.serializeBinaryToWriter
    );
  }
  f = message.getStreamdataconsumedlen();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated LongLinkPacket packet = 1;
 * @return {!Array<!proto.padlocal.LongLinkPacket>}
 */
proto.padlocal.LongLinkUnpackResponse.prototype.getPacketList = function() {
  return /** @type{!Array<!proto.padlocal.LongLinkPacket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.LongLinkPacket, 1));
};


/**
 * @param {!Array<!proto.padlocal.LongLinkPacket>} value
 * @return {!proto.padlocal.LongLinkUnpackResponse} returns this
*/
proto.padlocal.LongLinkUnpackResponse.prototype.setPacketList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.LongLinkPacket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.LongLinkPacket}
 */
proto.padlocal.LongLinkUnpackResponse.prototype.addPacket = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.LongLinkPacket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.LongLinkUnpackResponse} returns this
 */
proto.padlocal.LongLinkUnpackResponse.prototype.clearPacketList = function() {
  return this.setPacketList([]);
};


/**
 * optional int64 streamDataConsumedLen = 2;
 * @return {number}
 */
proto.padlocal.LongLinkUnpackResponse.prototype.getStreamdataconsumedlen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.LongLinkUnpackResponse} returns this
 */
proto.padlocal.LongLinkUnpackResponse.prototype.setStreamdataconsumedlen = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.LongLinkPacket.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.padlocal.LongLinkPacket.TypeCase = {
  TYPE_NOT_SET: 0,
  NORMAL: 1,
  PUSH: 2
};

/**
 * @return {proto.padlocal.LongLinkPacket.TypeCase}
 */
proto.padlocal.LongLinkPacket.prototype.getTypeCase = function() {
  return /** @type {proto.padlocal.LongLinkPacket.TypeCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.LongLinkPacket.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    normal: (f = msg.getNormal()) && proto.padlocal.LongLinkPacketNormal.toObject(includeInstance, f),
    push: (f = msg.getPush()) && proto.padlocal.LongLinkPacketPush.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkPacket}
 */
proto.padlocal.LongLinkPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkPacket;
  return proto.padlocal.LongLinkPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkPacket}
 */
proto.padlocal.LongLinkPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.LongLinkPacketNormal;
      reader.readMessage(value,proto.padlocal.LongLinkPacketNormal.deserializeBinaryFromReader);
      msg.setNormal(value);
      break;
    case 2:
      var value = new proto.padlocal.LongLinkPacketPush;
      reader.readMessage(value,proto.padlocal.LongLinkPacketPush.deserializeBinaryFromReader);
      msg.setPush(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNormal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.LongLinkPacketNormal.serializeBinaryToWriter
    );
  }
  f = message.getPush();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.LongLinkPacketPush.serializeBinaryToWriter
    );
  }
};


/**
 * optional LongLinkPacketNormal normal = 1;
 * @return {?proto.padlocal.LongLinkPacketNormal}
 */
proto.padlocal.LongLinkPacket.prototype.getNormal = function() {
  return /** @type{?proto.padlocal.LongLinkPacketNormal} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkPacketNormal, 1));
};


/**
 * @param {?proto.padlocal.LongLinkPacketNormal|undefined} value
 * @return {!proto.padlocal.LongLinkPacket} returns this
*/
proto.padlocal.LongLinkPacket.prototype.setNormal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.padlocal.LongLinkPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.LongLinkPacket} returns this
 */
proto.padlocal.LongLinkPacket.prototype.clearNormal = function() {
  return this.setNormal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LongLinkPacket.prototype.hasNormal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LongLinkPacketPush push = 2;
 * @return {?proto.padlocal.LongLinkPacketPush}
 */
proto.padlocal.LongLinkPacket.prototype.getPush = function() {
  return /** @type{?proto.padlocal.LongLinkPacketPush} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.LongLinkPacketPush, 2));
};


/**
 * @param {?proto.padlocal.LongLinkPacketPush|undefined} value
 * @return {!proto.padlocal.LongLinkPacket} returns this
*/
proto.padlocal.LongLinkPacket.prototype.setPush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.padlocal.LongLinkPacket.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.LongLinkPacket} returns this
 */
proto.padlocal.LongLinkPacket.prototype.clearPush = function() {
  return this.setPush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LongLinkPacket.prototype.hasPush = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkPacketNormal.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkPacketNormal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkPacketNormal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacketNormal.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkPacketNormal}
 */
proto.padlocal.LongLinkPacketNormal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkPacketNormal;
  return proto.padlocal.LongLinkPacketNormal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkPacketNormal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkPacketNormal}
 */
proto.padlocal.LongLinkPacketNormal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeq(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkPacketNormal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkPacketNormal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkPacketNormal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacketNormal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int64 seq = 1;
 * @return {number}
 */
proto.padlocal.LongLinkPacketNormal.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.LongLinkPacketNormal} returns this
 */
proto.padlocal.LongLinkPacketNormal.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.LongLinkPacketNormal.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.padlocal.LongLinkPacketNormal.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkPacketNormal.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.LongLinkPacketNormal} returns this
 */
proto.padlocal.LongLinkPacketNormal.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkPacketPush.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkPacketPush.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkPacketPush} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacketPush.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkPacketPush}
 */
proto.padlocal.LongLinkPacketPush.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkPacketPush;
  return proto.padlocal.LongLinkPacketPush.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkPacketPush} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkPacketPush}
 */
proto.padlocal.LongLinkPacketPush.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.LongLinkPacketPushType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkPacketPush.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkPacketPush.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkPacketPush} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkPacketPush.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional LongLinkPacketPushType type = 1;
 * @return {!proto.padlocal.LongLinkPacketPushType}
 */
proto.padlocal.LongLinkPacketPush.prototype.getType = function() {
  return /** @type {!proto.padlocal.LongLinkPacketPushType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.LongLinkPacketPushType} value
 * @return {!proto.padlocal.LongLinkPacketPush} returns this
 */
proto.padlocal.LongLinkPacketPush.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    policy: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LoginRequest}
 */
proto.padlocal.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LoginRequest;
  return proto.padlocal.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LoginRequest}
 */
proto.padlocal.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.LoginPolicy} */ (reader.readEnum());
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional LoginPolicy policy = 1;
 * @return {!proto.padlocal.LoginPolicy}
 */
proto.padlocal.LoginRequest.prototype.getPolicy = function() {
  return /** @type {!proto.padlocal.LoginPolicy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.LoginPolicy} value
 * @return {!proto.padlocal.LoginRequest} returns this
 */
proto.padlocal.LoginRequest.prototype.setPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LoginResponse}
 */
proto.padlocal.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LoginResponse;
  return proto.padlocal.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LoginResponse}
 */
proto.padlocal.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.LoginUpdateEvent.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.padlocal.LoginUpdateEvent.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  LOGINTYPE: 2,
  QRCODEEVENT: 3,
  AUTHINFO: 4,
  SYNCEVENT: 5
};

/**
 * @return {proto.padlocal.LoginUpdateEvent.PayloadCase}
 */
proto.padlocal.LoginUpdateEvent.prototype.getPayloadCase = function() {
  return /** @type {proto.padlocal.LoginUpdateEvent.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.LoginUpdateEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LoginUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LoginUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LoginUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    logintype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    qrcodeevent: (f = msg.getQrcodeevent()) && proto.padlocal.QRCodeEvent.toObject(includeInstance, f),
    authinfo: (f = msg.getAuthinfo()) && proto.padlocal.AuthInfo.toObject(includeInstance, f),
    syncevent: (f = msg.getSyncevent()) && proto.padlocal.SyncEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LoginUpdateEvent}
 */
proto.padlocal.LoginUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LoginUpdateEvent;
  return proto.padlocal.LoginUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LoginUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LoginUpdateEvent}
 */
proto.padlocal.LoginUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.LoginStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.padlocal.LoginType} */ (reader.readEnum());
      msg.setLogintype(value);
      break;
    case 3:
      var value = new proto.padlocal.QRCodeEvent;
      reader.readMessage(value,proto.padlocal.QRCodeEvent.deserializeBinaryFromReader);
      msg.setQrcodeevent(value);
      break;
    case 4:
      var value = new proto.padlocal.AuthInfo;
      reader.readMessage(value,proto.padlocal.AuthInfo.deserializeBinaryFromReader);
      msg.setAuthinfo(value);
      break;
    case 5:
      var value = new proto.padlocal.SyncEvent;
      reader.readMessage(value,proto.padlocal.SyncEvent.deserializeBinaryFromReader);
      msg.setSyncevent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LoginUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LoginUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LoginUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LoginUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.padlocal.LoginType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getQrcodeevent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.padlocal.QRCodeEvent.serializeBinaryToWriter
    );
  }
  f = message.getAuthinfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.padlocal.AuthInfo.serializeBinaryToWriter
    );
  }
  f = message.getSyncevent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.padlocal.SyncEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoginStatus status = 1;
 * @return {!proto.padlocal.LoginStatus}
 */
proto.padlocal.LoginUpdateEvent.prototype.getStatus = function() {
  return /** @type {!proto.padlocal.LoginStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.LoginStatus} value
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional LoginType loginType = 2;
 * @return {!proto.padlocal.LoginType}
 */
proto.padlocal.LoginUpdateEvent.prototype.getLogintype = function() {
  return /** @type {!proto.padlocal.LoginType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.padlocal.LoginType} value
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.setLogintype = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.padlocal.LoginUpdateEvent.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.clearLogintype = function() {
  return jspb.Message.setOneofField(this, 2, proto.padlocal.LoginUpdateEvent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LoginUpdateEvent.prototype.hasLogintype = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QRCodeEvent qrCodeEvent = 3;
 * @return {?proto.padlocal.QRCodeEvent}
 */
proto.padlocal.LoginUpdateEvent.prototype.getQrcodeevent = function() {
  return /** @type{?proto.padlocal.QRCodeEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.QRCodeEvent, 3));
};


/**
 * @param {?proto.padlocal.QRCodeEvent|undefined} value
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
*/
proto.padlocal.LoginUpdateEvent.prototype.setQrcodeevent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.padlocal.LoginUpdateEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.clearQrcodeevent = function() {
  return this.setQrcodeevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LoginUpdateEvent.prototype.hasQrcodeevent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuthInfo authInfo = 4;
 * @return {?proto.padlocal.AuthInfo}
 */
proto.padlocal.LoginUpdateEvent.prototype.getAuthinfo = function() {
  return /** @type{?proto.padlocal.AuthInfo} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AuthInfo, 4));
};


/**
 * @param {?proto.padlocal.AuthInfo|undefined} value
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
*/
proto.padlocal.LoginUpdateEvent.prototype.setAuthinfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.padlocal.LoginUpdateEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.clearAuthinfo = function() {
  return this.setAuthinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LoginUpdateEvent.prototype.hasAuthinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SyncEvent syncEvent = 5;
 * @return {?proto.padlocal.SyncEvent}
 */
proto.padlocal.LoginUpdateEvent.prototype.getSyncevent = function() {
  return /** @type{?proto.padlocal.SyncEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncEvent, 5));
};


/**
 * @param {?proto.padlocal.SyncEvent|undefined} value
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
*/
proto.padlocal.LoginUpdateEvent.prototype.setSyncevent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.padlocal.LoginUpdateEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.LoginUpdateEvent} returns this
 */
proto.padlocal.LoginUpdateEvent.prototype.clearSyncevent = function() {
  return this.setSyncevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.LoginUpdateEvent.prototype.hasSyncevent = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.QRCodeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.QRCodeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.QRCodeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.QRCodeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    imageurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expireat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    contact: (f = msg.getContact()) && proto.padlocal.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.QRCodeEvent}
 */
proto.padlocal.QRCodeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.QRCodeEvent;
  return proto.padlocal.QRCodeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.QRCodeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.QRCodeEvent}
 */
proto.padlocal.QRCodeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.QRCodeStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageurl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpireat(value);
      break;
    case 4:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.QRCodeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.QRCodeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.QRCodeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.QRCodeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getImageurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpireat();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional QRCodeStatus status = 1;
 * @return {!proto.padlocal.QRCodeStatus}
 */
proto.padlocal.QRCodeEvent.prototype.getStatus = function() {
  return /** @type {!proto.padlocal.QRCodeStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.QRCodeStatus} value
 * @return {!proto.padlocal.QRCodeEvent} returns this
 */
proto.padlocal.QRCodeEvent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string imageUrl = 2;
 * @return {string}
 */
proto.padlocal.QRCodeEvent.prototype.getImageurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.QRCodeEvent} returns this
 */
proto.padlocal.QRCodeEvent.prototype.setImageurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 expireAt = 3;
 * @return {number}
 */
proto.padlocal.QRCodeEvent.prototype.getExpireat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.QRCodeEvent} returns this
 */
proto.padlocal.QRCodeEvent.prototype.setExpireat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Contact contact = 4;
 * @return {?proto.padlocal.Contact}
 */
proto.padlocal.QRCodeEvent.prototype.getContact = function() {
  return /** @type{?proto.padlocal.Contact} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Contact, 4));
};


/**
 * @param {?proto.padlocal.Contact|undefined} value
 * @return {!proto.padlocal.QRCodeEvent} returns this
*/
proto.padlocal.QRCodeEvent.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.QRCodeEvent} returns this
 */
proto.padlocal.QRCodeEvent.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.QRCodeEvent.prototype.hasContact = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AuthInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AuthInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AuthInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AuthInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    selfcontact: (f = msg.getSelfcontact()) && proto.padlocal.Contact.toObject(includeInstance, f),
    longlinkhost: (f = msg.getLonglinkhost()) && proto.padlocal.Host.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AuthInfo}
 */
proto.padlocal.AuthInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AuthInfo;
  return proto.padlocal.AuthInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AuthInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AuthInfo}
 */
proto.padlocal.AuthInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.setSelfcontact(value);
      break;
    case 2:
      var value = new proto.padlocal.Host;
      reader.readMessage(value,proto.padlocal.Host.deserializeBinaryFromReader);
      msg.setLonglinkhost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AuthInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AuthInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AuthInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AuthInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelfcontact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
  f = message.getLonglinkhost();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.Host.serializeBinaryToWriter
    );
  }
};


/**
 * optional Contact selfContact = 1;
 * @return {?proto.padlocal.Contact}
 */
proto.padlocal.AuthInfo.prototype.getSelfcontact = function() {
  return /** @type{?proto.padlocal.Contact} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Contact, 1));
};


/**
 * @param {?proto.padlocal.Contact|undefined} value
 * @return {!proto.padlocal.AuthInfo} returns this
*/
proto.padlocal.AuthInfo.prototype.setSelfcontact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.AuthInfo} returns this
 */
proto.padlocal.AuthInfo.prototype.clearSelfcontact = function() {
  return this.setSelfcontact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.AuthInfo.prototype.hasSelfcontact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Host longLinkHost = 2;
 * @return {?proto.padlocal.Host}
 */
proto.padlocal.AuthInfo.prototype.getLonglinkhost = function() {
  return /** @type{?proto.padlocal.Host} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Host, 2));
};


/**
 * @param {?proto.padlocal.Host|undefined} value
 * @return {!proto.padlocal.AuthInfo} returns this
*/
proto.padlocal.AuthInfo.prototype.setLonglinkhost = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.AuthInfo} returns this
 */
proto.padlocal.AuthInfo.prototype.clearLonglinkhost = function() {
  return this.setLonglinkhost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.AuthInfo.prototype.hasLonglinkhost = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LogoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LogoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LogoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LogoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LogoutRequest}
 */
proto.padlocal.LogoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LogoutRequest;
  return proto.padlocal.LogoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LogoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LogoutRequest}
 */
proto.padlocal.LogoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LogoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LogoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LogoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LogoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LogoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LogoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LogoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LogoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LogoutResponse}
 */
proto.padlocal.LogoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LogoutResponse;
  return proto.padlocal.LogoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LogoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LogoutResponse}
 */
proto.padlocal.LogoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LogoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LogoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LogoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LogoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkHeartBeatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkHeartBeatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkHeartBeatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkHeartBeatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    heartbeatseq: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkHeartBeatRequest}
 */
proto.padlocal.LongLinkHeartBeatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkHeartBeatRequest;
  return proto.padlocal.LongLinkHeartBeatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkHeartBeatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkHeartBeatRequest}
 */
proto.padlocal.LongLinkHeartBeatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeartbeatseq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkHeartBeatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkHeartBeatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkHeartBeatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkHeartBeatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeartbeatseq();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 heartBeatSeq = 1;
 * @return {number}
 */
proto.padlocal.LongLinkHeartBeatRequest.prototype.getHeartbeatseq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.LongLinkHeartBeatRequest} returns this
 */
proto.padlocal.LongLinkHeartBeatRequest.prototype.setHeartbeatseq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.LongLinkHeartBeatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.LongLinkHeartBeatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.LongLinkHeartBeatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkHeartBeatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.LongLinkHeartBeatResponse}
 */
proto.padlocal.LongLinkHeartBeatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.LongLinkHeartBeatResponse;
  return proto.padlocal.LongLinkHeartBeatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.LongLinkHeartBeatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.LongLinkHeartBeatResponse}
 */
proto.padlocal.LongLinkHeartBeatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.LongLinkHeartBeatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.LongLinkHeartBeatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.LongLinkHeartBeatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.LongLinkHeartBeatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SendTextMessageRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendTextMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendTextMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendTextMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendTextMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tousername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    atList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendTextMessageRequest}
 */
proto.padlocal.SendTextMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendTextMessageRequest;
  return proto.padlocal.SendTextMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendTextMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendTextMessageRequest}
 */
proto.padlocal.SendTextMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendTextMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendTextMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendTextMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendTextMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAtList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string toUserName = 1;
 * @return {string}
 */
proto.padlocal.SendTextMessageRequest.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendTextMessageRequest} returns this
 */
proto.padlocal.SendTextMessageRequest.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.padlocal.SendTextMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendTextMessageRequest} returns this
 */
proto.padlocal.SendTextMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string at = 3;
 * @return {!Array<string>}
 */
proto.padlocal.SendTextMessageRequest.prototype.getAtList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.SendTextMessageRequest} returns this
 */
proto.padlocal.SendTextMessageRequest.prototype.setAtList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SendTextMessageRequest} returns this
 */
proto.padlocal.SendTextMessageRequest.prototype.addAt = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SendTextMessageRequest} returns this
 */
proto.padlocal.SendTextMessageRequest.prototype.clearAtList = function() {
  return this.setAtList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendTextMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendTextMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendTextMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendTextMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendTextMessageResponse}
 */
proto.padlocal.SendTextMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendTextMessageResponse;
  return proto.padlocal.SendTextMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendTextMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendTextMessageResponse}
 */
proto.padlocal.SendTextMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendTextMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendTextMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendTextMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendTextMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgId = 1;
 * @return {string}
 */
proto.padlocal.SendTextMessageResponse.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendTextMessageResponse} returns this
 */
proto.padlocal.SendTextMessageResponse.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendImageMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendImageMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendImageMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendImageMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tousername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    image: msg.getImage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendImageMessageRequest}
 */
proto.padlocal.SendImageMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendImageMessageRequest;
  return proto.padlocal.SendImageMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendImageMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendImageMessageRequest}
 */
proto.padlocal.SendImageMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendImageMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendImageMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendImageMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendImageMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string toUserName = 1;
 * @return {string}
 */
proto.padlocal.SendImageMessageRequest.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendImageMessageRequest} returns this
 */
proto.padlocal.SendImageMessageRequest.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes image = 3;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.SendImageMessageRequest.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes image = 3;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.padlocal.SendImageMessageRequest.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.padlocal.SendImageMessageRequest.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.SendImageMessageRequest} returns this
 */
proto.padlocal.SendImageMessageRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendImageMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendImageMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendImageMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendImageMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendImageMessageResponse}
 */
proto.padlocal.SendImageMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendImageMessageResponse;
  return proto.padlocal.SendImageMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendImageMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendImageMessageResponse}
 */
proto.padlocal.SendImageMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendImageMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendImageMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendImageMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendImageMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgId = 1;
 * @return {string}
 */
proto.padlocal.SendImageMessageResponse.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendImageMessageResponse} returns this
 */
proto.padlocal.SendImageMessageResponse.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.SendAppMessageRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.padlocal.SendAppMessageRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  LINK: 2,
  MINIPROGRAM: 3
};

/**
 * @return {proto.padlocal.SendAppMessageRequest.PayloadCase}
 */
proto.padlocal.SendAppMessageRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.padlocal.SendAppMessageRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.SendAppMessageRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendAppMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendAppMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendAppMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendAppMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tousername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    link: (f = msg.getLink()) && proto.padlocal.AppMessageLink.toObject(includeInstance, f),
    miniprogram: (f = msg.getMiniprogram()) && proto.padlocal.AppMessageMiniProgram.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendAppMessageRequest}
 */
proto.padlocal.SendAppMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendAppMessageRequest;
  return proto.padlocal.SendAppMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendAppMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendAppMessageRequest}
 */
proto.padlocal.SendAppMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 2:
      var value = new proto.padlocal.AppMessageLink;
      reader.readMessage(value,proto.padlocal.AppMessageLink.deserializeBinaryFromReader);
      msg.setLink(value);
      break;
    case 3:
      var value = new proto.padlocal.AppMessageMiniProgram;
      reader.readMessage(value,proto.padlocal.AppMessageMiniProgram.deserializeBinaryFromReader);
      msg.setMiniprogram(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendAppMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendAppMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendAppMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendAppMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.AppMessageLink.serializeBinaryToWriter
    );
  }
  f = message.getMiniprogram();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.padlocal.AppMessageMiniProgram.serializeBinaryToWriter
    );
  }
};


/**
 * optional string toUserName = 1;
 * @return {string}
 */
proto.padlocal.SendAppMessageRequest.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendAppMessageRequest} returns this
 */
proto.padlocal.SendAppMessageRequest.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppMessageLink link = 2;
 * @return {?proto.padlocal.AppMessageLink}
 */
proto.padlocal.SendAppMessageRequest.prototype.getLink = function() {
  return /** @type{?proto.padlocal.AppMessageLink} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AppMessageLink, 2));
};


/**
 * @param {?proto.padlocal.AppMessageLink|undefined} value
 * @return {!proto.padlocal.SendAppMessageRequest} returns this
*/
proto.padlocal.SendAppMessageRequest.prototype.setLink = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.padlocal.SendAppMessageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SendAppMessageRequest} returns this
 */
proto.padlocal.SendAppMessageRequest.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SendAppMessageRequest.prototype.hasLink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AppMessageMiniProgram miniProgram = 3;
 * @return {?proto.padlocal.AppMessageMiniProgram}
 */
proto.padlocal.SendAppMessageRequest.prototype.getMiniprogram = function() {
  return /** @type{?proto.padlocal.AppMessageMiniProgram} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.AppMessageMiniProgram, 3));
};


/**
 * @param {?proto.padlocal.AppMessageMiniProgram|undefined} value
 * @return {!proto.padlocal.SendAppMessageRequest} returns this
*/
proto.padlocal.SendAppMessageRequest.prototype.setMiniprogram = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.padlocal.SendAppMessageRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SendAppMessageRequest} returns this
 */
proto.padlocal.SendAppMessageRequest.prototype.clearMiniprogram = function() {
  return this.setMiniprogram(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SendAppMessageRequest.prototype.hasMiniprogram = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AppMessageLink.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AppMessageLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AppMessageLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AppMessageLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    thumbimage: msg.getThumbimage_asB64(),
    thumburl: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AppMessageLink}
 */
proto.padlocal.AppMessageLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AppMessageLink;
  return proto.padlocal.AppMessageLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AppMessageLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AppMessageLink}
 */
proto.padlocal.AppMessageLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setThumbimage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumburl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AppMessageLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AppMessageLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AppMessageLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AppMessageLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getThumbimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getThumburl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.padlocal.AppMessageLink.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageLink} returns this
 */
proto.padlocal.AppMessageLink.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.padlocal.AppMessageLink.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageLink} returns this
 */
proto.padlocal.AppMessageLink.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.padlocal.AppMessageLink.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageLink} returns this
 */
proto.padlocal.AppMessageLink.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes thumbImage = 4;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.AppMessageLink.prototype.getThumbimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes thumbImage = 4;
 * This is a type-conversion wrapper around `getThumbimage()`
 * @return {string}
 */
proto.padlocal.AppMessageLink.prototype.getThumbimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getThumbimage()));
};


/**
 * optional bytes thumbImage = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getThumbimage()`
 * @return {!Uint8Array}
 */
proto.padlocal.AppMessageLink.prototype.getThumbimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getThumbimage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.AppMessageLink} returns this
 */
proto.padlocal.AppMessageLink.prototype.setThumbimage = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string thumbURL = 5;
 * @return {string}
 */
proto.padlocal.AppMessageLink.prototype.getThumburl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageLink} returns this
 */
proto.padlocal.AppMessageLink.prototype.setThumburl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AppMessageMiniProgram.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AppMessageMiniProgram.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AppMessageMiniProgram} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AppMessageMiniProgram.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    mpappusername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    mpappname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mpappid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    mpappiconurl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mpapppath: jspb.Message.getFieldWithDefault(msg, 8, ""),
    thumbimage: msg.getThumbimage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AppMessageMiniProgram}
 */
proto.padlocal.AppMessageMiniProgram.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AppMessageMiniProgram;
  return proto.padlocal.AppMessageMiniProgram.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AppMessageMiniProgram} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AppMessageMiniProgram}
 */
proto.padlocal.AppMessageMiniProgram.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMpappusername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMpappname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMpappid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMpappiconurl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMpapppath(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setThumbimage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AppMessageMiniProgram.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AppMessageMiniProgram.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AppMessageMiniProgram} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AppMessageMiniProgram.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMpappusername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMpappname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMpappid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMpappiconurl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMpapppath();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getThumbimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string mpAppUserName = 4;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getMpappusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setMpappusername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string mpAppName = 5;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getMpappname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setMpappname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string mpAppId = 6;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getMpappid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setMpappid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string mpAppIconURL = 7;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getMpappiconurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setMpappiconurl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string mpAppPath = 8;
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getMpapppath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setMpapppath = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bytes thumbImage = 9;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getThumbimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes thumbImage = 9;
 * This is a type-conversion wrapper around `getThumbimage()`
 * @return {string}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getThumbimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getThumbimage()));
};


/**
 * optional bytes thumbImage = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getThumbimage()`
 * @return {!Uint8Array}
 */
proto.padlocal.AppMessageMiniProgram.prototype.getThumbimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getThumbimage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.AppMessageMiniProgram} returns this
 */
proto.padlocal.AppMessageMiniProgram.prototype.setThumbimage = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SendAppMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SendAppMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SendAppMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendAppMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SendAppMessageResponse}
 */
proto.padlocal.SendAppMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SendAppMessageResponse;
  return proto.padlocal.SendAppMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SendAppMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SendAppMessageResponse}
 */
proto.padlocal.SendAppMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SendAppMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SendAppMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SendAppMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SendAppMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgId = 1;
 * @return {string}
 */
proto.padlocal.SendAppMessageResponse.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SendAppMessageResponse} returns this
 */
proto.padlocal.SendAppMessageResponse.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AcceptUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AcceptUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AcceptUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AcceptUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stranger: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticket: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AcceptUserRequest}
 */
proto.padlocal.AcceptUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AcceptUserRequest;
  return proto.padlocal.AcceptUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AcceptUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AcceptUserRequest}
 */
proto.padlocal.AcceptUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStranger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AcceptUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AcceptUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AcceptUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AcceptUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStranger();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string stranger = 1;
 * @return {string}
 */
proto.padlocal.AcceptUserRequest.prototype.getStranger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AcceptUserRequest} returns this
 */
proto.padlocal.AcceptUserRequest.prototype.setStranger = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticket = 2;
 * @return {string}
 */
proto.padlocal.AcceptUserRequest.prototype.getTicket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AcceptUserRequest} returns this
 */
proto.padlocal.AcceptUserRequest.prototype.setTicket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AcceptUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AcceptUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AcceptUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AcceptUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AcceptUserResponse}
 */
proto.padlocal.AcceptUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AcceptUserResponse;
  return proto.padlocal.AcceptUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AcceptUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AcceptUserResponse}
 */
proto.padlocal.AcceptUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AcceptUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AcceptUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AcceptUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AcceptUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stranger: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticket: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scene: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddContactRequest}
 */
proto.padlocal.AddContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddContactRequest;
  return proto.padlocal.AddContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddContactRequest}
 */
proto.padlocal.AddContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStranger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicket(value);
      break;
    case 3:
      var value = /** @type {!proto.padlocal.AddContactScene} */ (reader.readEnum());
      msg.setScene(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStranger();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScene();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string stranger = 1;
 * @return {string}
 */
proto.padlocal.AddContactRequest.prototype.getStranger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddContactRequest} returns this
 */
proto.padlocal.AddContactRequest.prototype.setStranger = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticket = 2;
 * @return {string}
 */
proto.padlocal.AddContactRequest.prototype.getTicket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddContactRequest} returns this
 */
proto.padlocal.AddContactRequest.prototype.setTicket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AddContactScene scene = 3;
 * @return {!proto.padlocal.AddContactScene}
 */
proto.padlocal.AddContactRequest.prototype.getScene = function() {
  return /** @type {!proto.padlocal.AddContactScene} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.padlocal.AddContactScene} value
 * @return {!proto.padlocal.AddContactRequest} returns this
 */
proto.padlocal.AddContactRequest.prototype.setScene = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.padlocal.AddContactRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddContactRequest} returns this
 */
proto.padlocal.AddContactRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddContactResponse}
 */
proto.padlocal.AddContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddContactResponse;
  return proto.padlocal.AddContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddContactResponse}
 */
proto.padlocal.AddContactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.DeleteContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.DeleteContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.DeleteContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.DeleteContactRequest}
 */
proto.padlocal.DeleteContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.DeleteContactRequest;
  return proto.padlocal.DeleteContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.DeleteContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.DeleteContactRequest}
 */
proto.padlocal.DeleteContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.DeleteContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.DeleteContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.DeleteContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.DeleteContactRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.DeleteContactRequest} returns this
 */
proto.padlocal.DeleteContactRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.DeleteContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.DeleteContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.DeleteContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.DeleteContactResponse}
 */
proto.padlocal.DeleteContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.DeleteContactResponse;
  return proto.padlocal.DeleteContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.DeleteContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.DeleteContactResponse}
 */
proto.padlocal.DeleteContactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.DeleteContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.DeleteContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.DeleteContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetContactRequest}
 */
proto.padlocal.GetContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetContactRequest;
  return proto.padlocal.GetContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetContactRequest}
 */
proto.padlocal.GetContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.GetContactRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetContactRequest} returns this
 */
proto.padlocal.GetContactRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contact: (f = msg.getContact()) && proto.padlocal.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetContactResponse}
 */
proto.padlocal.GetContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetContactResponse;
  return proto.padlocal.GetContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetContactResponse}
 */
proto.padlocal.GetContactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional Contact contact = 1;
 * @return {?proto.padlocal.Contact}
 */
proto.padlocal.GetContactResponse.prototype.getContact = function() {
  return /** @type{?proto.padlocal.Contact} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Contact, 1));
};


/**
 * @param {?proto.padlocal.Contact|undefined} value
 * @return {!proto.padlocal.GetContactResponse} returns this
*/
proto.padlocal.GetContactResponse.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetContactResponse} returns this
 */
proto.padlocal.GetContactResponse.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetContactResponse.prototype.hasContact = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetContactQRCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetContactQRCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetContactQRCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactQRCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    style: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetContactQRCodeRequest}
 */
proto.padlocal.GetContactQRCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetContactQRCodeRequest;
  return proto.padlocal.GetContactQRCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetContactQRCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetContactQRCodeRequest}
 */
proto.padlocal.GetContactQRCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStyle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetContactQRCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetContactQRCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetContactQRCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactQRCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.GetContactQRCodeRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetContactQRCodeRequest} returns this
 */
proto.padlocal.GetContactQRCodeRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 style = 2;
 * @return {number}
 */
proto.padlocal.GetContactQRCodeRequest.prototype.getStyle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.GetContactQRCodeRequest} returns this
 */
proto.padlocal.GetContactQRCodeRequest.prototype.setStyle = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetContactQRCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetContactQRCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactQRCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    qrcode: msg.getQrcode_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetContactQRCodeResponse}
 */
proto.padlocal.GetContactQRCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetContactQRCodeResponse;
  return proto.padlocal.GetContactQRCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetContactQRCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetContactQRCodeResponse}
 */
proto.padlocal.GetContactQRCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setQrcode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetContactQRCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetContactQRCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetContactQRCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQrcode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bytes qrcode = 1;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.getQrcode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes qrcode = 1;
 * This is a type-conversion wrapper around `getQrcode()`
 * @return {string}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.getQrcode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getQrcode()));
};


/**
 * optional bytes qrcode = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getQrcode()`
 * @return {!Uint8Array}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.getQrcode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getQrcode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.GetContactQRCodeResponse} returns this
 */
proto.padlocal.GetContactQRCodeResponse.prototype.setQrcode = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.padlocal.GetContactQRCodeResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetContactQRCodeResponse} returns this
 */
proto.padlocal.GetContactQRCodeResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SearchContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SearchContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SearchContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SearchContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SearchContactRequest}
 */
proto.padlocal.SearchContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SearchContactRequest;
  return proto.padlocal.SearchContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SearchContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SearchContactRequest}
 */
proto.padlocal.SearchContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SearchContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SearchContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SearchContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SearchContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.SearchContactRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SearchContactRequest} returns this
 */
proto.padlocal.SearchContactRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SearchContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SearchContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SearchContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SearchContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contact: (f = msg.getContact()) && proto.padlocal.Contact.toObject(includeInstance, f),
    encryptusername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    antispamticket: jspb.Message.getFieldWithDefault(msg, 3, ""),
    toaddscene: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SearchContactResponse}
 */
proto.padlocal.SearchContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SearchContactResponse;
  return proto.padlocal.SearchContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SearchContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SearchContactResponse}
 */
proto.padlocal.SearchContactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncryptusername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAntispamticket(value);
      break;
    case 4:
      var value = /** @type {!proto.padlocal.AddContactScene} */ (reader.readEnum());
      msg.setToaddscene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SearchContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SearchContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SearchContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SearchContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
  f = message.getEncryptusername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAntispamticket();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToaddscene();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Contact contact = 1;
 * @return {?proto.padlocal.Contact}
 */
proto.padlocal.SearchContactResponse.prototype.getContact = function() {
  return /** @type{?proto.padlocal.Contact} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Contact, 1));
};


/**
 * @param {?proto.padlocal.Contact|undefined} value
 * @return {!proto.padlocal.SearchContactResponse} returns this
*/
proto.padlocal.SearchContactResponse.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SearchContactResponse} returns this
 */
proto.padlocal.SearchContactResponse.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SearchContactResponse.prototype.hasContact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string encryptUserName = 2;
 * @return {string}
 */
proto.padlocal.SearchContactResponse.prototype.getEncryptusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SearchContactResponse} returns this
 */
proto.padlocal.SearchContactResponse.prototype.setEncryptusername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string antispamTicket = 3;
 * @return {string}
 */
proto.padlocal.SearchContactResponse.prototype.getAntispamticket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SearchContactResponse} returns this
 */
proto.padlocal.SearchContactResponse.prototype.setAntispamticket = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AddContactScene toAddScene = 4;
 * @return {!proto.padlocal.AddContactScene}
 */
proto.padlocal.SearchContactResponse.prototype.getToaddscene = function() {
  return /** @type {!proto.padlocal.AddContactScene} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.padlocal.AddContactScene} value
 * @return {!proto.padlocal.SearchContactResponse} returns this
 */
proto.padlocal.SearchContactResponse.prototype.setToaddscene = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.UpdateSelfNickNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.UpdateSelfNickNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.UpdateSelfNickNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.UpdateSelfNickNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nickname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.UpdateSelfNickNameRequest}
 */
proto.padlocal.UpdateSelfNickNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.UpdateSelfNickNameRequest;
  return proto.padlocal.UpdateSelfNickNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.UpdateSelfNickNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.UpdateSelfNickNameRequest}
 */
proto.padlocal.UpdateSelfNickNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.UpdateSelfNickNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.UpdateSelfNickNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.UpdateSelfNickNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.UpdateSelfNickNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string nickName = 1;
 * @return {string}
 */
proto.padlocal.UpdateSelfNickNameRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.UpdateSelfNickNameRequest} returns this
 */
proto.padlocal.UpdateSelfNickNameRequest.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.UpdateSelfNickNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.UpdateSelfNickNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.UpdateSelfNickNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.UpdateSelfNickNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.UpdateSelfNickNameResponse}
 */
proto.padlocal.UpdateSelfNickNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.UpdateSelfNickNameResponse;
  return proto.padlocal.UpdateSelfNickNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.UpdateSelfNickNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.UpdateSelfNickNameResponse}
 */
proto.padlocal.UpdateSelfNickNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.UpdateSelfNickNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.UpdateSelfNickNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.UpdateSelfNickNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.UpdateSelfNickNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.CreateChatRoomRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.CreateChatRoomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.CreateChatRoomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.CreateChatRoomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CreateChatRoomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    usernamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.CreateChatRoomRequest}
 */
proto.padlocal.CreateChatRoomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.CreateChatRoomRequest;
  return proto.padlocal.CreateChatRoomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.CreateChatRoomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.CreateChatRoomRequest}
 */
proto.padlocal.CreateChatRoomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUsernames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.CreateChatRoomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.CreateChatRoomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.CreateChatRoomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CreateChatRoomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsernamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string userNames = 1;
 * @return {!Array<string>}
 */
proto.padlocal.CreateChatRoomRequest.prototype.getUsernamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.CreateChatRoomRequest} returns this
 */
proto.padlocal.CreateChatRoomRequest.prototype.setUsernamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.CreateChatRoomRequest} returns this
 */
proto.padlocal.CreateChatRoomRequest.prototype.addUsernames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.CreateChatRoomRequest} returns this
 */
proto.padlocal.CreateChatRoomRequest.prototype.clearUsernamesList = function() {
  return this.setUsernamesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.CreateChatRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.CreateChatRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.CreateChatRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CreateChatRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.CreateChatRoomResponse}
 */
proto.padlocal.CreateChatRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.CreateChatRoomResponse;
  return proto.padlocal.CreateChatRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.CreateChatRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.CreateChatRoomResponse}
 */
proto.padlocal.CreateChatRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.CreateChatRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.CreateChatRoomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.CreateChatRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CreateChatRoomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.CreateChatRoomResponse.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.CreateChatRoomResponse} returns this
 */
proto.padlocal.CreateChatRoomResponse.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.padlocal.CreateChatRoomResponse.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.CreateChatRoomResponse} returns this
 */
proto.padlocal.CreateChatRoomResponse.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.padlocal.CreateChatRoomResponse.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.CreateChatRoomResponse} returns this
 */
proto.padlocal.CreateChatRoomResponse.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomMembersRequest}
 */
proto.padlocal.GetChatRoomMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomMembersRequest;
  return proto.padlocal.GetChatRoomMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomMembersRequest}
 */
proto.padlocal.GetChatRoomMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.GetChatRoomMembersRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetChatRoomMembersRequest} returns this
 */
proto.padlocal.GetChatRoomMembersRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.GetChatRoomMembersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberList: jspb.Message.toObjectList(msg.getMemberList(),
    proto.padlocal.ChatRoomMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomMembersResponse}
 */
proto.padlocal.GetChatRoomMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomMembersResponse;
  return proto.padlocal.GetChatRoomMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomMembersResponse}
 */
proto.padlocal.GetChatRoomMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.ChatRoomMember;
      reader.readMessage(value,proto.padlocal.ChatRoomMember.deserializeBinaryFromReader);
      msg.addMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.ChatRoomMember.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChatRoomMember member = 1;
 * @return {!Array<!proto.padlocal.ChatRoomMember>}
 */
proto.padlocal.GetChatRoomMembersResponse.prototype.getMemberList = function() {
  return /** @type{!Array<!proto.padlocal.ChatRoomMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.ChatRoomMember, 1));
};


/**
 * @param {!Array<!proto.padlocal.ChatRoomMember>} value
 * @return {!proto.padlocal.GetChatRoomMembersResponse} returns this
*/
proto.padlocal.GetChatRoomMembersResponse.prototype.setMemberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.ChatRoomMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.ChatRoomMember}
 */
proto.padlocal.GetChatRoomMembersResponse.prototype.addMember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.ChatRoomMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.GetChatRoomMembersResponse} returns this
 */
proto.padlocal.GetChatRoomMembersResponse.prototype.clearMemberList = function() {
  return this.setMemberList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.ChatRoomMember.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.ChatRoomMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.ChatRoomMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ChatRoomMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inviterusername: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.ChatRoomMember}
 */
proto.padlocal.ChatRoomMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.ChatRoomMember;
  return proto.padlocal.ChatRoomMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.ChatRoomMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.ChatRoomMember}
 */
proto.padlocal.ChatRoomMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviterusername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.ChatRoomMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.ChatRoomMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.ChatRoomMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ChatRoomMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInviterusername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.ChatRoomMember.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ChatRoomMember} returns this
 */
proto.padlocal.ChatRoomMember.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nickName = 2;
 * @return {string}
 */
proto.padlocal.ChatRoomMember.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ChatRoomMember} returns this
 */
proto.padlocal.ChatRoomMember.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string displayName = 3;
 * @return {string}
 */
proto.padlocal.ChatRoomMember.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ChatRoomMember} returns this
 */
proto.padlocal.ChatRoomMember.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avatar = 4;
 * @return {string}
 */
proto.padlocal.ChatRoomMember.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ChatRoomMember} returns this
 */
proto.padlocal.ChatRoomMember.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string inviterUserName = 5;
 * @return {string}
 */
proto.padlocal.ChatRoomMember.prototype.getInviterusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ChatRoomMember} returns this
 */
proto.padlocal.ChatRoomMember.prototype.setInviterusername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomQrCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomQrCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomQrCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomQrCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomQrCodeRequest}
 */
proto.padlocal.GetChatRoomQrCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomQrCodeRequest;
  return proto.padlocal.GetChatRoomQrCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomQrCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomQrCodeRequest}
 */
proto.padlocal.GetChatRoomQrCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomQrCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomQrCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomQrCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomQrCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.GetChatRoomQrCodeRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetChatRoomQrCodeRequest} returns this
 */
proto.padlocal.GetChatRoomQrCodeRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomQrCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomQrCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomQrCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    qrcode: msg.getQrcode_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomQrCodeResponse}
 */
proto.padlocal.GetChatRoomQrCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomQrCodeResponse;
  return proto.padlocal.GetChatRoomQrCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomQrCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomQrCodeResponse}
 */
proto.padlocal.GetChatRoomQrCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setQrcode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomQrCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomQrCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomQrCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQrcode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bytes qrcode = 1;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.getQrcode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes qrcode = 1;
 * This is a type-conversion wrapper around `getQrcode()`
 * @return {string}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.getQrcode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getQrcode()));
};


/**
 * optional bytes qrcode = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getQrcode()`
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.getQrcode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getQrcode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.GetChatRoomQrCodeResponse} returns this
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.setQrcode = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetChatRoomQrCodeResponse} returns this
 */
proto.padlocal.GetChatRoomQrCodeResponse.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomMemberRequest}
 */
proto.padlocal.GetChatRoomMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomMemberRequest;
  return proto.padlocal.GetChatRoomMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomMemberRequest}
 */
proto.padlocal.GetChatRoomMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetChatRoomMemberRequest} returns this
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetChatRoomMemberRequest} returns this
 */
proto.padlocal.GetChatRoomMemberRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetChatRoomMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetChatRoomMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetChatRoomMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contact: (f = msg.getContact()) && proto.padlocal.Contact.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetChatRoomMemberResponse}
 */
proto.padlocal.GetChatRoomMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetChatRoomMemberResponse;
  return proto.padlocal.GetChatRoomMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetChatRoomMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetChatRoomMemberResponse}
 */
proto.padlocal.GetChatRoomMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetChatRoomMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetChatRoomMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetChatRoomMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetChatRoomMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
};


/**
 * optional Contact contact = 1;
 * @return {?proto.padlocal.Contact}
 */
proto.padlocal.GetChatRoomMemberResponse.prototype.getContact = function() {
  return /** @type{?proto.padlocal.Contact} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Contact, 1));
};


/**
 * @param {?proto.padlocal.Contact|undefined} value
 * @return {!proto.padlocal.GetChatRoomMemberResponse} returns this
*/
proto.padlocal.GetChatRoomMemberResponse.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetChatRoomMemberResponse} returns this
 */
proto.padlocal.GetChatRoomMemberResponse.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetChatRoomMemberResponse.prototype.hasContact = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetChatRoomAnnouncementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetChatRoomAnnouncementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomAnnouncementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    announcement: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetChatRoomAnnouncementRequest}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetChatRoomAnnouncementRequest;
  return proto.padlocal.SetChatRoomAnnouncementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetChatRoomAnnouncementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetChatRoomAnnouncementRequest}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnouncement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetChatRoomAnnouncementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetChatRoomAnnouncementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomAnnouncementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnouncement();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SetChatRoomAnnouncementRequest} returns this
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string announcement = 2;
 * @return {string}
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.getAnnouncement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SetChatRoomAnnouncementRequest} returns this
 */
proto.padlocal.SetChatRoomAnnouncementRequest.prototype.setAnnouncement = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetChatRoomAnnouncementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetChatRoomAnnouncementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetChatRoomAnnouncementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomAnnouncementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetChatRoomAnnouncementResponse}
 */
proto.padlocal.SetChatRoomAnnouncementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetChatRoomAnnouncementResponse;
  return proto.padlocal.SetChatRoomAnnouncementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetChatRoomAnnouncementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetChatRoomAnnouncementResponse}
 */
proto.padlocal.SetChatRoomAnnouncementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetChatRoomAnnouncementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetChatRoomAnnouncementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetChatRoomAnnouncementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomAnnouncementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddChatRoomMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddChatRoomMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddChatRoomMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddChatRoomMemberRequest}
 */
proto.padlocal.AddChatRoomMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddChatRoomMemberRequest;
  return proto.padlocal.AddChatRoomMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddChatRoomMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddChatRoomMemberRequest}
 */
proto.padlocal.AddChatRoomMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddChatRoomMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddChatRoomMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddChatRoomMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddChatRoomMemberRequest} returns this
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddChatRoomMemberRequest} returns this
 */
proto.padlocal.AddChatRoomMemberRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddChatRoomMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddChatRoomMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddChatRoomMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddChatRoomMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddChatRoomMemberResponse}
 */
proto.padlocal.AddChatRoomMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddChatRoomMemberResponse;
  return proto.padlocal.AddChatRoomMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddChatRoomMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddChatRoomMemberResponse}
 */
proto.padlocal.AddChatRoomMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddChatRoomMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddChatRoomMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddChatRoomMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddChatRoomMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.InviteChatRoomMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.InviteChatRoomMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.InviteChatRoomMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.InviteChatRoomMemberRequest}
 */
proto.padlocal.InviteChatRoomMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.InviteChatRoomMemberRequest;
  return proto.padlocal.InviteChatRoomMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.InviteChatRoomMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.InviteChatRoomMemberRequest}
 */
proto.padlocal.InviteChatRoomMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.InviteChatRoomMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.InviteChatRoomMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.InviteChatRoomMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.InviteChatRoomMemberRequest} returns this
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.InviteChatRoomMemberRequest} returns this
 */
proto.padlocal.InviteChatRoomMemberRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.InviteChatRoomMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.InviteChatRoomMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.InviteChatRoomMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.InviteChatRoomMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.InviteChatRoomMemberResponse}
 */
proto.padlocal.InviteChatRoomMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.InviteChatRoomMemberResponse;
  return proto.padlocal.InviteChatRoomMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.InviteChatRoomMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.InviteChatRoomMemberResponse}
 */
proto.padlocal.InviteChatRoomMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.InviteChatRoomMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.InviteChatRoomMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.InviteChatRoomMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.InviteChatRoomMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.DeleteChatRoomMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.DeleteChatRoomMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteChatRoomMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.DeleteChatRoomMemberRequest}
 */
proto.padlocal.DeleteChatRoomMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.DeleteChatRoomMemberRequest;
  return proto.padlocal.DeleteChatRoomMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.DeleteChatRoomMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.DeleteChatRoomMemberRequest}
 */
proto.padlocal.DeleteChatRoomMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.DeleteChatRoomMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.DeleteChatRoomMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteChatRoomMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.DeleteChatRoomMemberRequest} returns this
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.DeleteChatRoomMemberRequest} returns this
 */
proto.padlocal.DeleteChatRoomMemberRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.DeleteChatRoomMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.DeleteChatRoomMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.DeleteChatRoomMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteChatRoomMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.DeleteChatRoomMemberResponse}
 */
proto.padlocal.DeleteChatRoomMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.DeleteChatRoomMemberResponse;
  return proto.padlocal.DeleteChatRoomMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.DeleteChatRoomMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.DeleteChatRoomMemberResponse}
 */
proto.padlocal.DeleteChatRoomMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.DeleteChatRoomMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.DeleteChatRoomMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.DeleteChatRoomMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.DeleteChatRoomMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetChatRoomNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetChatRoomNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetChatRoomNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetChatRoomNameRequest}
 */
proto.padlocal.SetChatRoomNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetChatRoomNameRequest;
  return proto.padlocal.SetChatRoomNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetChatRoomNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetChatRoomNameRequest}
 */
proto.padlocal.SetChatRoomNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetChatRoomNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetChatRoomNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetChatRoomNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.padlocal.SetChatRoomNameRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SetChatRoomNameRequest} returns this
 */
proto.padlocal.SetChatRoomNameRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.padlocal.SetChatRoomNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SetChatRoomNameRequest} returns this
 */
proto.padlocal.SetChatRoomNameRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetChatRoomNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetChatRoomNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetChatRoomNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetChatRoomNameResponse}
 */
proto.padlocal.SetChatRoomNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetChatRoomNameResponse;
  return proto.padlocal.SetChatRoomNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetChatRoomNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetChatRoomNameResponse}
 */
proto.padlocal.SetChatRoomNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetChatRoomNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetChatRoomNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetChatRoomNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetChatRoomNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.SnsSendMomentRequest.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.padlocal.SnsSendMomentRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  TEXT: 2,
  IMAGES: 3,
  URL: 4
};

/**
 * @return {proto.padlocal.SnsSendMomentRequest.PayloadCase}
 */
proto.padlocal.SnsSendMomentRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.padlocal.SnsSendMomentRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.SnsSendMomentRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.padlocal.SnsSendMomentOptions.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto.padlocal.SnsSendMomentText.toObject(includeInstance, f),
    images: (f = msg.getImages()) && proto.padlocal.SnsSendMomentImages.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto.padlocal.SnsSendMomentUrl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentRequest}
 */
proto.padlocal.SnsSendMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentRequest;
  return proto.padlocal.SnsSendMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentRequest}
 */
proto.padlocal.SnsSendMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsSendMomentOptions;
      reader.readMessage(value,proto.padlocal.SnsSendMomentOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 2:
      var value = new proto.padlocal.SnsSendMomentText;
      reader.readMessage(value,proto.padlocal.SnsSendMomentText.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 3:
      var value = new proto.padlocal.SnsSendMomentImages;
      reader.readMessage(value,proto.padlocal.SnsSendMomentImages.deserializeBinaryFromReader);
      msg.setImages(value);
      break;
    case 4:
      var value = new proto.padlocal.SnsSendMomentUrl;
      reader.readMessage(value,proto.padlocal.SnsSendMomentUrl.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsSendMomentOptions.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.SnsSendMomentText.serializeBinaryToWriter
    );
  }
  f = message.getImages();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.padlocal.SnsSendMomentImages.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.padlocal.SnsSendMomentUrl.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsSendMomentOptions options = 1;
 * @return {?proto.padlocal.SnsSendMomentOptions}
 */
proto.padlocal.SnsSendMomentRequest.prototype.getOptions = function() {
  return /** @type{?proto.padlocal.SnsSendMomentOptions} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentOptions, 1));
};


/**
 * @param {?proto.padlocal.SnsSendMomentOptions|undefined} value
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
*/
proto.padlocal.SnsSendMomentRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
 */
proto.padlocal.SnsSendMomentRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SnsSendMomentText text = 2;
 * @return {?proto.padlocal.SnsSendMomentText}
 */
proto.padlocal.SnsSendMomentRequest.prototype.getText = function() {
  return /** @type{?proto.padlocal.SnsSendMomentText} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentText, 2));
};


/**
 * @param {?proto.padlocal.SnsSendMomentText|undefined} value
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
*/
proto.padlocal.SnsSendMomentRequest.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.padlocal.SnsSendMomentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
 */
proto.padlocal.SnsSendMomentRequest.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentRequest.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SnsSendMomentImages images = 3;
 * @return {?proto.padlocal.SnsSendMomentImages}
 */
proto.padlocal.SnsSendMomentRequest.prototype.getImages = function() {
  return /** @type{?proto.padlocal.SnsSendMomentImages} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentImages, 3));
};


/**
 * @param {?proto.padlocal.SnsSendMomentImages|undefined} value
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
*/
proto.padlocal.SnsSendMomentRequest.prototype.setImages = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.padlocal.SnsSendMomentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
 */
proto.padlocal.SnsSendMomentRequest.prototype.clearImages = function() {
  return this.setImages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentRequest.prototype.hasImages = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SnsSendMomentUrl url = 4;
 * @return {?proto.padlocal.SnsSendMomentUrl}
 */
proto.padlocal.SnsSendMomentRequest.prototype.getUrl = function() {
  return /** @type{?proto.padlocal.SnsSendMomentUrl} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentUrl, 4));
};


/**
 * @param {?proto.padlocal.SnsSendMomentUrl|undefined} value
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
*/
proto.padlocal.SnsSendMomentRequest.prototype.setUrl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.padlocal.SnsSendMomentRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentRequest} returns this
 */
proto.padlocal.SnsSendMomentRequest.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentRequest.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentText.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentText.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentText}
 */
proto.padlocal.SnsSendMomentText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentText;
  return proto.padlocal.SnsSendMomentText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentText}
 */
proto.padlocal.SnsSendMomentText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.padlocal.SnsSendMomentText.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendMomentText} returns this
 */
proto.padlocal.SnsSendMomentText.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SnsSendMomentImages.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentImages.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentImages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentImages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentImages.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    imageurlList: jspb.Message.toObjectList(msg.getImageurlList(),
    proto.padlocal.SnsImageUrl.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentImages}
 */
proto.padlocal.SnsSendMomentImages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentImages;
  return proto.padlocal.SnsSendMomentImages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentImages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentImages}
 */
proto.padlocal.SnsSendMomentImages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.padlocal.SnsImageUrl;
      reader.readMessage(value,proto.padlocal.SnsImageUrl.deserializeBinaryFromReader);
      msg.addImageurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentImages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentImages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentImages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentImages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImageurlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.padlocal.SnsImageUrl.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.padlocal.SnsSendMomentImages.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendMomentImages} returns this
 */
proto.padlocal.SnsSendMomentImages.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SnsImageUrl imageUrl = 2;
 * @return {!Array<!proto.padlocal.SnsImageUrl>}
 */
proto.padlocal.SnsSendMomentImages.prototype.getImageurlList = function() {
  return /** @type{!Array<!proto.padlocal.SnsImageUrl>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsImageUrl, 2));
};


/**
 * @param {!Array<!proto.padlocal.SnsImageUrl>} value
 * @return {!proto.padlocal.SnsSendMomentImages} returns this
*/
proto.padlocal.SnsSendMomentImages.prototype.setImageurlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.padlocal.SnsImageUrl=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsImageUrl}
 */
proto.padlocal.SnsSendMomentImages.prototype.addImageurl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.padlocal.SnsImageUrl, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsSendMomentImages} returns this
 */
proto.padlocal.SnsSendMomentImages.prototype.clearImageurlList = function() {
  return this.setImageurlList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    urltitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imageurl: (f = msg.getImageurl()) && proto.padlocal.SnsImageUrl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentUrl}
 */
proto.padlocal.SnsSendMomentUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentUrl;
  return proto.padlocal.SnsSendMomentUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentUrl}
 */
proto.padlocal.SnsSendMomentUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrltitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = new proto.padlocal.SnsImageUrl;
      reader.readMessage(value,proto.padlocal.SnsImageUrl.deserializeBinaryFromReader);
      msg.setImageurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrltitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageurl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.padlocal.SnsImageUrl.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.padlocal.SnsSendMomentUrl.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendMomentUrl} returns this
 */
proto.padlocal.SnsSendMomentUrl.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string urlTitle = 2;
 * @return {string}
 */
proto.padlocal.SnsSendMomentUrl.prototype.getUrltitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendMomentUrl} returns this
 */
proto.padlocal.SnsSendMomentUrl.prototype.setUrltitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.padlocal.SnsSendMomentUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendMomentUrl} returns this
 */
proto.padlocal.SnsSendMomentUrl.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SnsImageUrl imageUrl = 4;
 * @return {?proto.padlocal.SnsImageUrl}
 */
proto.padlocal.SnsSendMomentUrl.prototype.getImageurl = function() {
  return /** @type{?proto.padlocal.SnsImageUrl} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsImageUrl, 4));
};


/**
 * @param {?proto.padlocal.SnsImageUrl|undefined} value
 * @return {!proto.padlocal.SnsSendMomentUrl} returns this
*/
proto.padlocal.SnsSendMomentUrl.prototype.setImageurl = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentUrl} returns this
 */
proto.padlocal.SnsSendMomentUrl.prototype.clearImageurl = function() {
  return this.setImageurl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentUrl.prototype.hasImageurl = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moment: (f = msg.getMoment()) && proto.padlocal.SnsMoment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentResponse}
 */
proto.padlocal.SnsSendMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentResponse;
  return proto.padlocal.SnsSendMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentResponse}
 */
proto.padlocal.SnsSendMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.setMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsMoment moment = 1;
 * @return {?proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsSendMomentResponse.prototype.getMoment = function() {
  return /** @type{?proto.padlocal.SnsMoment} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {?proto.padlocal.SnsMoment|undefined} value
 * @return {!proto.padlocal.SnsSendMomentResponse} returns this
*/
proto.padlocal.SnsSendMomentResponse.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendMomentResponse} returns this
 */
proto.padlocal.SnsSendMomentResponse.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentResponse.prototype.hasMoment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsImageUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsImageUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsImageUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsImageUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    md5: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    thumburl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    width: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalsize: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsImageUrl}
 */
proto.padlocal.SnsImageUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsImageUrl;
  return proto.padlocal.SnsImageUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsImageUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsImageUrl}
 */
proto.padlocal.SnsImageUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumburl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWidth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsImageUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsImageUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsImageUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsImageUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getThumburl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalsize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string md5 = 1;
 * @return {string}
 */
proto.padlocal.SnsImageUrl.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.padlocal.SnsImageUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string thumbUrl = 3;
 * @return {string}
 */
proto.padlocal.SnsImageUrl.prototype.getThumburl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setThumburl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 height = 4;
 * @return {number}
 */
proto.padlocal.SnsImageUrl.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 width = 5;
 * @return {number}
 */
proto.padlocal.SnsImageUrl.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 totalSize = 6;
 * @return {number}
 */
proto.padlocal.SnsImageUrl.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsImageUrl} returns this
 */
proto.padlocal.SnsImageUrl.prototype.setTotalsize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SnsSendMomentOptions.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendMomentOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendMomentOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendMomentOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    isprivate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    canseeusernameList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    cannotseeusernameList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    atusernameList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendMomentOptions}
 */
proto.padlocal.SnsSendMomentOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendMomentOptions;
  return proto.padlocal.SnsSendMomentOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendMomentOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendMomentOptions}
 */
proto.padlocal.SnsSendMomentOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCanseeusername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCannotseeusername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAtusername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendMomentOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendMomentOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendMomentOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendMomentOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsprivate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCanseeusernameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCannotseeusernameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAtusernameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional bool isPrivate = 1;
 * @return {boolean}
 */
proto.padlocal.SnsSendMomentOptions.prototype.getIsprivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.setIsprivate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string canSeeUserName = 2;
 * @return {!Array<string>}
 */
proto.padlocal.SnsSendMomentOptions.prototype.getCanseeusernameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.setCanseeusernameList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.addCanseeusername = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.clearCanseeusernameList = function() {
  return this.setCanseeusernameList([]);
};


/**
 * repeated string canNotSeeUserName = 3;
 * @return {!Array<string>}
 */
proto.padlocal.SnsSendMomentOptions.prototype.getCannotseeusernameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.setCannotseeusernameList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.addCannotseeusername = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.clearCannotseeusernameList = function() {
  return this.setCannotseeusernameList([]);
};


/**
 * repeated string atUserName = 4;
 * @return {!Array<string>}
 */
proto.padlocal.SnsSendMomentOptions.prototype.getAtusernameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.setAtusernameList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.addAtusername = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsSendMomentOptions} returns this
 */
proto.padlocal.SnsSendMomentOptions.prototype.clearAtusernameList = function() {
  return this.setAtusernameList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsForwardMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsForwardMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsForwardMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsForwardMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentcontentxml: jspb.Message.getFieldWithDefault(msg, 1, ""),
    options: (f = msg.getOptions()) && proto.padlocal.SnsSendMomentOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsForwardMomentRequest}
 */
proto.padlocal.SnsForwardMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsForwardMomentRequest;
  return proto.padlocal.SnsForwardMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsForwardMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsForwardMomentRequest}
 */
proto.padlocal.SnsForwardMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentcontentxml(value);
      break;
    case 2:
      var value = new proto.padlocal.SnsSendMomentOptions;
      reader.readMessage(value,proto.padlocal.SnsSendMomentOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsForwardMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsForwardMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsForwardMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsForwardMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentcontentxml();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.SnsSendMomentOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string momentContentXml = 1;
 * @return {string}
 */
proto.padlocal.SnsForwardMomentRequest.prototype.getMomentcontentxml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsForwardMomentRequest} returns this
 */
proto.padlocal.SnsForwardMomentRequest.prototype.setMomentcontentxml = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SnsSendMomentOptions options = 2;
 * @return {?proto.padlocal.SnsSendMomentOptions}
 */
proto.padlocal.SnsForwardMomentRequest.prototype.getOptions = function() {
  return /** @type{?proto.padlocal.SnsSendMomentOptions} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendMomentOptions, 2));
};


/**
 * @param {?proto.padlocal.SnsSendMomentOptions|undefined} value
 * @return {!proto.padlocal.SnsForwardMomentRequest} returns this
*/
proto.padlocal.SnsForwardMomentRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsForwardMomentRequest} returns this
 */
proto.padlocal.SnsForwardMomentRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsForwardMomentRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsForwardMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsForwardMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsForwardMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsForwardMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moment: (f = msg.getMoment()) && proto.padlocal.SnsMoment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsForwardMomentResponse}
 */
proto.padlocal.SnsForwardMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsForwardMomentResponse;
  return proto.padlocal.SnsForwardMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsForwardMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsForwardMomentResponse}
 */
proto.padlocal.SnsForwardMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.setMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsForwardMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsForwardMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsForwardMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsForwardMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsMoment moment = 1;
 * @return {?proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsForwardMomentResponse.prototype.getMoment = function() {
  return /** @type{?proto.padlocal.SnsMoment} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {?proto.padlocal.SnsMoment|undefined} value
 * @return {!proto.padlocal.SnsForwardMomentResponse} returns this
*/
proto.padlocal.SnsForwardMomentResponse.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsForwardMomentResponse} returns this
 */
proto.padlocal.SnsForwardMomentResponse.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsForwardMomentResponse.prototype.hasMoment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetUserPageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetUserPageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetUserPageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetUserPageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetUserPageRequest}
 */
proto.padlocal.SnsGetUserPageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetUserPageRequest;
  return proto.padlocal.SnsGetUserPageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetUserPageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetUserPageRequest}
 */
proto.padlocal.SnsGetUserPageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetUserPageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetUserPageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetUserPageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetUserPageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.SnsGetUserPageRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsGetUserPageRequest} returns this
 */
proto.padlocal.SnsGetUserPageRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string maxId = 2;
 * @return {string}
 */
proto.padlocal.SnsGetUserPageRequest.prototype.getMaxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsGetUserPageRequest} returns this
 */
proto.padlocal.SnsGetUserPageRequest.prototype.setMaxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SnsGetUserPageResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetUserPageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetUserPageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetUserPageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetUserPageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentList: jspb.Message.toObjectList(msg.getMomentList(),
    proto.padlocal.SnsMoment.toObject, includeInstance),
    tips: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetUserPageResponse}
 */
proto.padlocal.SnsGetUserPageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetUserPageResponse;
  return proto.padlocal.SnsGetUserPageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetUserPageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetUserPageResponse}
 */
proto.padlocal.SnsGetUserPageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.addMoment(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTips(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetUserPageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetUserPageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetUserPageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetUserPageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
  f = message.getTips();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated SnsMoment moment = 1;
 * @return {!Array<!proto.padlocal.SnsMoment>}
 */
proto.padlocal.SnsGetUserPageResponse.prototype.getMomentList = function() {
  return /** @type{!Array<!proto.padlocal.SnsMoment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {!Array<!proto.padlocal.SnsMoment>} value
 * @return {!proto.padlocal.SnsGetUserPageResponse} returns this
*/
proto.padlocal.SnsGetUserPageResponse.prototype.setMomentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.SnsMoment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsGetUserPageResponse.prototype.addMoment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.SnsMoment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsGetUserPageResponse} returns this
 */
proto.padlocal.SnsGetUserPageResponse.prototype.clearMomentList = function() {
  return this.setMomentList([]);
};


/**
 * optional string tips = 2;
 * @return {string}
 */
proto.padlocal.SnsGetUserPageResponse.prototype.getTips = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsGetUserPageResponse} returns this
 */
proto.padlocal.SnsGetUserPageResponse.prototype.setTips = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    momentownerusername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commenttext: jspb.Message.getFieldWithDefault(msg, 3, ""),
    replyto: (f = msg.getReplyto()) && proto.padlocal.SnsSendCommentReplyTo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendCommentRequest}
 */
proto.padlocal.SnsSendCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendCommentRequest;
  return proto.padlocal.SnsSendCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendCommentRequest}
 */
proto.padlocal.SnsSendCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentownerusername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommenttext(value);
      break;
    case 4:
      var value = new proto.padlocal.SnsSendCommentReplyTo;
      reader.readMessage(value,proto.padlocal.SnsSendCommentReplyTo.deserializeBinaryFromReader);
      msg.setReplyto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMomentownerusername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommenttext();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReplyto();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.padlocal.SnsSendCommentReplyTo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsSendCommentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentRequest} returns this
 */
proto.padlocal.SnsSendCommentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string momentOwnerUserName = 2;
 * @return {string}
 */
proto.padlocal.SnsSendCommentRequest.prototype.getMomentownerusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentRequest} returns this
 */
proto.padlocal.SnsSendCommentRequest.prototype.setMomentownerusername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commentText = 3;
 * @return {string}
 */
proto.padlocal.SnsSendCommentRequest.prototype.getCommenttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentRequest} returns this
 */
proto.padlocal.SnsSendCommentRequest.prototype.setCommenttext = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SnsSendCommentReplyTo replyTo = 4;
 * @return {?proto.padlocal.SnsSendCommentReplyTo}
 */
proto.padlocal.SnsSendCommentRequest.prototype.getReplyto = function() {
  return /** @type{?proto.padlocal.SnsSendCommentReplyTo} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsSendCommentReplyTo, 4));
};


/**
 * @param {?proto.padlocal.SnsSendCommentReplyTo|undefined} value
 * @return {!proto.padlocal.SnsSendCommentRequest} returns this
*/
proto.padlocal.SnsSendCommentRequest.prototype.setReplyto = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendCommentRequest} returns this
 */
proto.padlocal.SnsSendCommentRequest.prototype.clearReplyto = function() {
  return this.setReplyto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendCommentRequest.prototype.hasReplyto = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendCommentReplyTo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendCommentReplyTo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentReplyTo.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commentusername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commentnickname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendCommentReplyTo}
 */
proto.padlocal.SnsSendCommentReplyTo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendCommentReplyTo;
  return proto.padlocal.SnsSendCommentReplyTo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendCommentReplyTo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendCommentReplyTo}
 */
proto.padlocal.SnsSendCommentReplyTo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentusername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentnickname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendCommentReplyTo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendCommentReplyTo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentReplyTo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentusername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommentnickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string commentId = 1;
 * @return {string}
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.getCommentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentReplyTo} returns this
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commentUserName = 2;
 * @return {string}
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.getCommentusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentReplyTo} returns this
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.setCommentusername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string commentNickname = 3;
 * @return {string}
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.getCommentnickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsSendCommentReplyTo} returns this
 */
proto.padlocal.SnsSendCommentReplyTo.prototype.setCommentnickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsSendCommentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsSendCommentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsSendCommentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moment: (f = msg.getMoment()) && proto.padlocal.SnsMoment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsSendCommentResponse}
 */
proto.padlocal.SnsSendCommentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsSendCommentResponse;
  return proto.padlocal.SnsSendCommentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsSendCommentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsSendCommentResponse}
 */
proto.padlocal.SnsSendCommentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.setMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsSendCommentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsSendCommentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsSendCommentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsSendCommentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsMoment moment = 1;
 * @return {?proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsSendCommentResponse.prototype.getMoment = function() {
  return /** @type{?proto.padlocal.SnsMoment} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {?proto.padlocal.SnsMoment|undefined} value
 * @return {!proto.padlocal.SnsSendCommentResponse} returns this
*/
proto.padlocal.SnsSendCommentResponse.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsSendCommentResponse} returns this
 */
proto.padlocal.SnsSendCommentResponse.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsSendCommentResponse.prototype.hasMoment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsUploadImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsUploadImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsUploadImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUploadImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: msg.getImage_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsUploadImageRequest}
 */
proto.padlocal.SnsUploadImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsUploadImageRequest;
  return proto.padlocal.SnsUploadImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsUploadImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsUploadImageRequest}
 */
proto.padlocal.SnsUploadImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsUploadImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsUploadImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsUploadImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUploadImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes image = 1;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.SnsUploadImageRequest.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes image = 1;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.padlocal.SnsUploadImageRequest.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.padlocal.SnsUploadImageRequest.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.SnsUploadImageRequest} returns this
 */
proto.padlocal.SnsUploadImageRequest.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.padlocal.SnsUploadImageRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsUploadImageRequest} returns this
 */
proto.padlocal.SnsUploadImageRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsUploadImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsUploadImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsUploadImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUploadImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: (f = msg.getUrl()) && proto.padlocal.SnsImageUrl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsUploadImageResponse}
 */
proto.padlocal.SnsUploadImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsUploadImageResponse;
  return proto.padlocal.SnsUploadImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsUploadImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsUploadImageResponse}
 */
proto.padlocal.SnsUploadImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.padlocal.SnsImageUrl;
      reader.readMessage(value,proto.padlocal.SnsImageUrl.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsUploadImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsUploadImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsUploadImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUploadImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.SnsImageUrl.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.padlocal.SnsUploadImageResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsUploadImageResponse} returns this
 */
proto.padlocal.SnsUploadImageResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional SnsImageUrl url = 2;
 * @return {?proto.padlocal.SnsImageUrl}
 */
proto.padlocal.SnsUploadImageResponse.prototype.getUrl = function() {
  return /** @type{?proto.padlocal.SnsImageUrl} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsImageUrl, 2));
};


/**
 * @param {?proto.padlocal.SnsImageUrl|undefined} value
 * @return {!proto.padlocal.SnsUploadImageResponse} returns this
*/
proto.padlocal.SnsUploadImageResponse.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsUploadImageResponse} returns this
 */
proto.padlocal.SnsUploadImageResponse.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsUploadImageResponse.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetTimelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetTimelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetTimelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetTimelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetTimelineRequest}
 */
proto.padlocal.SnsGetTimelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetTimelineRequest;
  return proto.padlocal.SnsGetTimelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetTimelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetTimelineRequest}
 */
proto.padlocal.SnsGetTimelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetTimelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetTimelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetTimelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetTimelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string maxId = 1;
 * @return {string}
 */
proto.padlocal.SnsGetTimelineRequest.prototype.getMaxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsGetTimelineRequest} returns this
 */
proto.padlocal.SnsGetTimelineRequest.prototype.setMaxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SnsGetTimelineResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetTimelineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetTimelineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetTimelineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetTimelineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentList: jspb.Message.toObjectList(msg.getMomentList(),
    proto.padlocal.SnsMoment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetTimelineResponse}
 */
proto.padlocal.SnsGetTimelineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetTimelineResponse;
  return proto.padlocal.SnsGetTimelineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetTimelineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetTimelineResponse}
 */
proto.padlocal.SnsGetTimelineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.addMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetTimelineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetTimelineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetTimelineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetTimelineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SnsMoment moment = 1;
 * @return {!Array<!proto.padlocal.SnsMoment>}
 */
proto.padlocal.SnsGetTimelineResponse.prototype.getMomentList = function() {
  return /** @type{!Array<!proto.padlocal.SnsMoment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {!Array<!proto.padlocal.SnsMoment>} value
 * @return {!proto.padlocal.SnsGetTimelineResponse} returns this
*/
proto.padlocal.SnsGetTimelineResponse.prototype.setMomentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.SnsMoment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsGetTimelineResponse.prototype.addMoment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.SnsMoment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsGetTimelineResponse} returns this
 */
proto.padlocal.SnsGetTimelineResponse.prototype.clearMomentList = function() {
  return this.setMomentList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetMomentRequest}
 */
proto.padlocal.SnsGetMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetMomentRequest;
  return proto.padlocal.SnsGetMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetMomentRequest}
 */
proto.padlocal.SnsGetMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsGetMomentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsGetMomentRequest} returns this
 */
proto.padlocal.SnsGetMomentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsGetMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsGetMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsGetMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moment: (f = msg.getMoment()) && proto.padlocal.SnsMoment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsGetMomentResponse}
 */
proto.padlocal.SnsGetMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsGetMomentResponse;
  return proto.padlocal.SnsGetMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsGetMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsGetMomentResponse}
 */
proto.padlocal.SnsGetMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.setMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsGetMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsGetMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsGetMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsGetMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsMoment moment = 1;
 * @return {?proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsGetMomentResponse.prototype.getMoment = function() {
  return /** @type{?proto.padlocal.SnsMoment} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {?proto.padlocal.SnsMoment|undefined} value
 * @return {!proto.padlocal.SnsGetMomentResponse} returns this
*/
proto.padlocal.SnsGetMomentResponse.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsGetMomentResponse} returns this
 */
proto.padlocal.SnsGetMomentResponse.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsGetMomentResponse.prototype.hasMoment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsLikeMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsLikeMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsLikeMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsLikeMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    momentownerusername: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsLikeMomentRequest}
 */
proto.padlocal.SnsLikeMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsLikeMomentRequest;
  return proto.padlocal.SnsLikeMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsLikeMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsLikeMomentRequest}
 */
proto.padlocal.SnsLikeMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentownerusername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsLikeMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsLikeMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsLikeMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsLikeMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMomentownerusername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsLikeMomentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsLikeMomentRequest} returns this
 */
proto.padlocal.SnsLikeMomentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string momentOwnerUserName = 2;
 * @return {string}
 */
proto.padlocal.SnsLikeMomentRequest.prototype.getMomentownerusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsLikeMomentRequest} returns this
 */
proto.padlocal.SnsLikeMomentRequest.prototype.setMomentownerusername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsLikeMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsLikeMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsLikeMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsLikeMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moment: (f = msg.getMoment()) && proto.padlocal.SnsMoment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsLikeMomentResponse}
 */
proto.padlocal.SnsLikeMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsLikeMomentResponse;
  return proto.padlocal.SnsLikeMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsLikeMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsLikeMomentResponse}
 */
proto.padlocal.SnsLikeMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SnsMoment;
      reader.readMessage(value,proto.padlocal.SnsMoment.deserializeBinaryFromReader);
      msg.setMoment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsLikeMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsLikeMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsLikeMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsLikeMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SnsMoment.serializeBinaryToWriter
    );
  }
};


/**
 * optional SnsMoment moment = 1;
 * @return {?proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsLikeMomentResponse.prototype.getMoment = function() {
  return /** @type{?proto.padlocal.SnsMoment} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SnsMoment, 1));
};


/**
 * @param {?proto.padlocal.SnsMoment|undefined} value
 * @return {!proto.padlocal.SnsLikeMomentResponse} returns this
*/
proto.padlocal.SnsLikeMomentResponse.prototype.setMoment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SnsLikeMomentResponse} returns this
 */
proto.padlocal.SnsLikeMomentResponse.prototype.clearMoment = function() {
  return this.setMoment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SnsLikeMomentResponse.prototype.hasMoment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsUnlikeMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsUnlikeMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsUnlikeMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUnlikeMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsUnlikeMomentRequest}
 */
proto.padlocal.SnsUnlikeMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsUnlikeMomentRequest;
  return proto.padlocal.SnsUnlikeMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsUnlikeMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsUnlikeMomentRequest}
 */
proto.padlocal.SnsUnlikeMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsUnlikeMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsUnlikeMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsUnlikeMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUnlikeMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsUnlikeMomentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsUnlikeMomentRequest} returns this
 */
proto.padlocal.SnsUnlikeMomentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsUnlikeMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsUnlikeMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsUnlikeMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUnlikeMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsUnlikeMomentResponse}
 */
proto.padlocal.SnsUnlikeMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsUnlikeMomentResponse;
  return proto.padlocal.SnsUnlikeMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsUnlikeMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsUnlikeMomentResponse}
 */
proto.padlocal.SnsUnlikeMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsUnlikeMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsUnlikeMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsUnlikeMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsUnlikeMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsRemoveMomentCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsRemoveMomentCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commentid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsRemoveMomentCommentRequest}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsRemoveMomentCommentRequest;
  return proto.padlocal.SnsRemoveMomentCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsRemoveMomentCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsRemoveMomentCommentRequest}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsRemoveMomentCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsRemoveMomentCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsRemoveMomentCommentRequest} returns this
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commentId = 2;
 * @return {string}
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.getCommentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsRemoveMomentCommentRequest} returns this
 */
proto.padlocal.SnsRemoveMomentCommentRequest.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsRemoveMomentCommentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsRemoveMomentCommentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsRemoveMomentCommentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentCommentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsRemoveMomentCommentResponse}
 */
proto.padlocal.SnsRemoveMomentCommentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsRemoveMomentCommentResponse;
  return proto.padlocal.SnsRemoveMomentCommentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsRemoveMomentCommentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsRemoveMomentCommentResponse}
 */
proto.padlocal.SnsRemoveMomentCommentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsRemoveMomentCommentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsRemoveMomentCommentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsRemoveMomentCommentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentCommentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMakeMomentPrivateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMakeMomentPrivateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMakeMomentPrivateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPrivateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMakeMomentPrivateRequest}
 */
proto.padlocal.SnsMakeMomentPrivateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMakeMomentPrivateRequest;
  return proto.padlocal.SnsMakeMomentPrivateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMakeMomentPrivateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMakeMomentPrivateRequest}
 */
proto.padlocal.SnsMakeMomentPrivateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMakeMomentPrivateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMakeMomentPrivateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMakeMomentPrivateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPrivateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsMakeMomentPrivateRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMakeMomentPrivateRequest} returns this
 */
proto.padlocal.SnsMakeMomentPrivateRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMakeMomentPrivateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMakeMomentPrivateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMakeMomentPrivateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPrivateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMakeMomentPrivateResponse}
 */
proto.padlocal.SnsMakeMomentPrivateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMakeMomentPrivateResponse;
  return proto.padlocal.SnsMakeMomentPrivateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMakeMomentPrivateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMakeMomentPrivateResponse}
 */
proto.padlocal.SnsMakeMomentPrivateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMakeMomentPrivateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMakeMomentPrivateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMakeMomentPrivateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPrivateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMakeMomentPublicRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMakeMomentPublicRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMakeMomentPublicRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPublicRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMakeMomentPublicRequest}
 */
proto.padlocal.SnsMakeMomentPublicRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMakeMomentPublicRequest;
  return proto.padlocal.SnsMakeMomentPublicRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMakeMomentPublicRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMakeMomentPublicRequest}
 */
proto.padlocal.SnsMakeMomentPublicRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMakeMomentPublicRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMakeMomentPublicRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMakeMomentPublicRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPublicRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsMakeMomentPublicRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMakeMomentPublicRequest} returns this
 */
proto.padlocal.SnsMakeMomentPublicRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMakeMomentPublicResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMakeMomentPublicResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMakeMomentPublicResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPublicResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMakeMomentPublicResponse}
 */
proto.padlocal.SnsMakeMomentPublicResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMakeMomentPublicResponse;
  return proto.padlocal.SnsMakeMomentPublicResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMakeMomentPublicResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMakeMomentPublicResponse}
 */
proto.padlocal.SnsMakeMomentPublicResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMakeMomentPublicResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMakeMomentPublicResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMakeMomentPublicResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMakeMomentPublicResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsRemoveMomentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsRemoveMomentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsRemoveMomentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    momentid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsRemoveMomentRequest}
 */
proto.padlocal.SnsRemoveMomentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsRemoveMomentRequest;
  return proto.padlocal.SnsRemoveMomentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsRemoveMomentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsRemoveMomentRequest}
 */
proto.padlocal.SnsRemoveMomentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMomentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsRemoveMomentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsRemoveMomentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsRemoveMomentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMomentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string momentId = 1;
 * @return {string}
 */
proto.padlocal.SnsRemoveMomentRequest.prototype.getMomentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsRemoveMomentRequest} returns this
 */
proto.padlocal.SnsRemoveMomentRequest.prototype.setMomentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsRemoveMomentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsRemoveMomentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsRemoveMomentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsRemoveMomentResponse}
 */
proto.padlocal.SnsRemoveMomentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsRemoveMomentResponse;
  return proto.padlocal.SnsRemoveMomentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsRemoveMomentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsRemoveMomentResponse}
 */
proto.padlocal.SnsRemoveMomentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsRemoveMomentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsRemoveMomentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsRemoveMomentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsRemoveMomentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddLabelRequest}
 */
proto.padlocal.AddLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddLabelRequest;
  return proto.padlocal.AddLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddLabelRequest}
 */
proto.padlocal.AddLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.padlocal.AddLabelRequest.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.AddLabelRequest} returns this
 */
proto.padlocal.AddLabelRequest.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.AddLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.AddLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.AddLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.AddLabelResponse}
 */
proto.padlocal.AddLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.AddLabelResponse;
  return proto.padlocal.AddLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.AddLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.AddLabelResponse}
 */
proto.padlocal.AddLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLabelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.AddLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.AddLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.AddLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.AddLabelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 labelId = 1;
 * @return {number}
 */
proto.padlocal.AddLabelResponse.prototype.getLabelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.AddLabelResponse} returns this
 */
proto.padlocal.AddLabelResponse.prototype.setLabelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.RemoveLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.RemoveLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.RemoveLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.RemoveLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.RemoveLabelRequest}
 */
proto.padlocal.RemoveLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.RemoveLabelRequest;
  return proto.padlocal.RemoveLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.RemoveLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.RemoveLabelRequest}
 */
proto.padlocal.RemoveLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLabelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.RemoveLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.RemoveLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.RemoveLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.RemoveLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 labelId = 1;
 * @return {number}
 */
proto.padlocal.RemoveLabelRequest.prototype.getLabelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.RemoveLabelRequest} returns this
 */
proto.padlocal.RemoveLabelRequest.prototype.setLabelid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.RemoveLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.RemoveLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.RemoveLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.RemoveLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.RemoveLabelResponse}
 */
proto.padlocal.RemoveLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.RemoveLabelResponse;
  return proto.padlocal.RemoveLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.RemoveLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.RemoveLabelResponse}
 */
proto.padlocal.RemoveLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.RemoveLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.RemoveLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.RemoveLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.RemoveLabelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetLabelListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetLabelListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetLabelListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetLabelListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetLabelListRequest}
 */
proto.padlocal.GetLabelListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetLabelListRequest;
  return proto.padlocal.GetLabelListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetLabelListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetLabelListRequest}
 */
proto.padlocal.GetLabelListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetLabelListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetLabelListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetLabelListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetLabelListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.GetLabelListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetLabelListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetLabelListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetLabelListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetLabelListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelList: jspb.Message.toObjectList(msg.getLabelList(),
    proto.padlocal.Label.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetLabelListResponse}
 */
proto.padlocal.GetLabelListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetLabelListResponse;
  return proto.padlocal.GetLabelListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetLabelListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetLabelListResponse}
 */
proto.padlocal.GetLabelListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Label;
      reader.readMessage(value,proto.padlocal.Label.deserializeBinaryFromReader);
      msg.addLabel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetLabelListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetLabelListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetLabelListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetLabelListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.Label.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Label label = 1;
 * @return {!Array<!proto.padlocal.Label>}
 */
proto.padlocal.GetLabelListResponse.prototype.getLabelList = function() {
  return /** @type{!Array<!proto.padlocal.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.Label, 1));
};


/**
 * @param {!Array<!proto.padlocal.Label>} value
 * @return {!proto.padlocal.GetLabelListResponse} returns this
*/
proto.padlocal.GetLabelListResponse.prototype.setLabelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.Label}
 */
proto.padlocal.GetLabelListResponse.prototype.addLabel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.GetLabelListResponse} returns this
 */
proto.padlocal.GetLabelListResponse.prototype.clearLabelList = function() {
  return this.setLabelList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.Label}
 */
proto.padlocal.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.Label;
  return proto.padlocal.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.Label}
 */
proto.padlocal.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.padlocal.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Label} returns this
 */
proto.padlocal.Label.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.padlocal.Label.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Label} returns this
 */
proto.padlocal.Label.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SetContactLabelRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetContactLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetContactLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetContactLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetContactLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelidList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetContactLabelRequest}
 */
proto.padlocal.SetContactLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetContactLabelRequest;
  return proto.padlocal.SetContactLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetContactLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetContactLabelRequest}
 */
proto.padlocal.SetContactLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setLabelidList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetContactLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetContactLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetContactLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetContactLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelidList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.SetContactLabelRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SetContactLabelRequest} returns this
 */
proto.padlocal.SetContactLabelRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int64 labelId = 2;
 * @return {!Array<number>}
 */
proto.padlocal.SetContactLabelRequest.prototype.getLabelidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.padlocal.SetContactLabelRequest} returns this
 */
proto.padlocal.SetContactLabelRequest.prototype.setLabelidList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SetContactLabelRequest} returns this
 */
proto.padlocal.SetContactLabelRequest.prototype.addLabelid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SetContactLabelRequest} returns this
 */
proto.padlocal.SetContactLabelRequest.prototype.clearLabelidList = function() {
  return this.setLabelidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SetContactLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SetContactLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SetContactLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetContactLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SetContactLabelResponse}
 */
proto.padlocal.SetContactLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SetContactLabelResponse;
  return proto.padlocal.SetContactLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SetContactLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SetContactLabelResponse}
 */
proto.padlocal.SetContactLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SetContactLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SetContactLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SetContactLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SetContactLabelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SyncEvent.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SyncEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SyncEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SyncEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactList: jspb.Message.toObjectList(msg.getContactList(),
    proto.padlocal.Contact.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    proto.padlocal.Message.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SyncEvent}
 */
proto.padlocal.SyncEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SyncEvent;
  return proto.padlocal.SyncEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SyncEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SyncEvent}
 */
proto.padlocal.SyncEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Contact;
      reader.readMessage(value,proto.padlocal.Contact.deserializeBinaryFromReader);
      msg.addContact(value);
      break;
    case 2:
      var value = new proto.padlocal.Message;
      reader.readMessage(value,proto.padlocal.Message.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SyncEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SyncEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SyncEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.padlocal.Contact.serializeBinaryToWriter
    );
  }
  f = message.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.padlocal.Message.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Contact contact = 1;
 * @return {!Array<!proto.padlocal.Contact>}
 */
proto.padlocal.SyncEvent.prototype.getContactList = function() {
  return /** @type{!Array<!proto.padlocal.Contact>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.Contact, 1));
};


/**
 * @param {!Array<!proto.padlocal.Contact>} value
 * @return {!proto.padlocal.SyncEvent} returns this
*/
proto.padlocal.SyncEvent.prototype.setContactList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.padlocal.Contact=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.Contact}
 */
proto.padlocal.SyncEvent.prototype.addContact = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.padlocal.Contact, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SyncEvent} returns this
 */
proto.padlocal.SyncEvent.prototype.clearContactList = function() {
  return this.setContactList([]);
};


/**
 * repeated Message message = 2;
 * @return {!Array<!proto.padlocal.Message>}
 */
proto.padlocal.SyncEvent.prototype.getMessageList = function() {
  return /** @type{!Array<!proto.padlocal.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.Message, 2));
};


/**
 * @param {!Array<!proto.padlocal.Message>} value
 * @return {!proto.padlocal.SyncEvent} returns this
*/
proto.padlocal.SyncEvent.prototype.setMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.padlocal.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.Message}
 */
proto.padlocal.SyncEvent.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.padlocal.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SyncEvent} returns this
 */
proto.padlocal.SyncEvent.prototype.clearMessageList = function() {
  return this.setMessageList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.Contact.repeatedFields_ = [102];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 4, 0),
    signature: jspb.Message.getFieldWithDefault(msg, 5, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 6, ""),
    label: jspb.Message.getFieldWithDefault(msg, 7, ""),
    remark: jspb.Message.getFieldWithDefault(msg, 8, ""),
    city: jspb.Message.getFieldWithDefault(msg, 9, ""),
    province: jspb.Message.getFieldWithDefault(msg, 10, ""),
    country: jspb.Message.getFieldWithDefault(msg, 11, ""),
    contactaddscene: jspb.Message.getFieldWithDefault(msg, 12, 0),
    stranger: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    chatroomownerusername: jspb.Message.getFieldWithDefault(msg, 100, ""),
    chatroommaxcount: jspb.Message.getFieldWithDefault(msg, 101, 0),
    chatroommemberList: jspb.Message.toObjectList(msg.getChatroommemberList(),
    proto.padlocal.ChatRoomMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.Contact}
 */
proto.padlocal.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.Contact;
  return proto.padlocal.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.Contact}
 */
proto.padlocal.Contact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvince(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContactaddscene(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStranger(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatroomownerusername(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChatroommaxcount(value);
      break;
    case 102:
      var value = new proto.padlocal.ChatRoomMember;
      reader.readMessage(value,proto.padlocal.ChatRoomMember.deserializeBinaryFromReader);
      msg.addChatroommember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Contact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGender();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProvince();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getContactaddscene();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getStranger();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getChatroomownerusername();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getChatroommaxcount();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
  f = message.getChatroommemberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      102,
      f,
      proto.padlocal.ChatRoomMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nickName = 2;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 gender = 4;
 * @return {number}
 */
proto.padlocal.Contact.prototype.getGender = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setGender = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string signature = 5;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string alias = 6;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string label = 7;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string remark = 8;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string city = 9;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string province = 10;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getProvince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setProvince = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string country = 11;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 contactAddScene = 12;
 * @return {number}
 */
proto.padlocal.Contact.prototype.getContactaddscene = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setContactaddscene = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bool stranger = 13;
 * @return {boolean}
 */
proto.padlocal.Contact.prototype.getStranger = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setStranger = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string chatRoomOwnerUserName = 100;
 * @return {string}
 */
proto.padlocal.Contact.prototype.getChatroomownerusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setChatroomownerusername = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional int32 chatRoomMaxCount = 101;
 * @return {number}
 */
proto.padlocal.Contact.prototype.getChatroommaxcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.setChatroommaxcount = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};


/**
 * repeated ChatRoomMember chatRoomMember = 102;
 * @return {!Array<!proto.padlocal.ChatRoomMember>}
 */
proto.padlocal.Contact.prototype.getChatroommemberList = function() {
  return /** @type{!Array<!proto.padlocal.ChatRoomMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.ChatRoomMember, 102));
};


/**
 * @param {!Array<!proto.padlocal.ChatRoomMember>} value
 * @return {!proto.padlocal.Contact} returns this
*/
proto.padlocal.Contact.prototype.setChatroommemberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 102, value);
};


/**
 * @param {!proto.padlocal.ChatRoomMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.ChatRoomMember}
 */
proto.padlocal.Contact.prototype.addChatroommember = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 102, opt_value, proto.padlocal.ChatRoomMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.Contact} returns this
 */
proto.padlocal.Contact.prototype.clearChatroommemberList = function() {
  return this.setChatroommemberList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.Message.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fromusername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tousername: jspb.Message.getFieldWithDefault(msg, 5, ""),
    content: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pushcontent: jspb.Message.getFieldWithDefault(msg, 7, ""),
    binarypayload: msg.getBinarypayload_asB64(),
    atList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.Message}
 */
proto.padlocal.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.Message;
  return proto.padlocal.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.Message}
 */
proto.padlocal.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatetime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromusername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushcontent(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinarypayload(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFromusername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPushcontent();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBinarypayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getAtList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.padlocal.Message.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.padlocal.Message.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 createTime = 3;
 * @return {number}
 */
proto.padlocal.Message.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string fromUserName = 4;
 * @return {string}
 */
proto.padlocal.Message.prototype.getFromusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setFromusername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string toUserName = 5;
 * @return {string}
 */
proto.padlocal.Message.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string content = 6;
 * @return {string}
 */
proto.padlocal.Message.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string pushContent = 7;
 * @return {string}
 */
proto.padlocal.Message.prototype.getPushcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setPushcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes binaryPayload = 8;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.Message.prototype.getBinarypayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes binaryPayload = 8;
 * This is a type-conversion wrapper around `getBinarypayload()`
 * @return {string}
 */
proto.padlocal.Message.prototype.getBinarypayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinarypayload()));
};


/**
 * optional bytes binaryPayload = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinarypayload()`
 * @return {!Uint8Array}
 */
proto.padlocal.Message.prototype.getBinarypayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinarypayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setBinarypayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * repeated string at = 9;
 * @return {!Array<string>}
 */
proto.padlocal.Message.prototype.getAtList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.setAtList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.addAt = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.Message} returns this
 */
proto.padlocal.Message.prototype.clearAtList = function() {
  return this.setAtList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.Host.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.Host.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.Host} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Host.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.Host}
 */
proto.padlocal.Host.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.Host;
  return proto.padlocal.Host.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.Host} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.Host}
 */
proto.padlocal.Host.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.Host.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.Host.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.Host} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.Host.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.padlocal.Host.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.Host} returns this
 */
proto.padlocal.Host.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.padlocal.Host.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.Host} returns this
 */
proto.padlocal.Host.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.padlocal.SnsMoment.repeatedFields_ = [7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMoment.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMoment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMoment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMoment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isrichtext: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    likeList: jspb.Message.toObjectList(msg.getLikeList(),
    proto.padlocal.SnsMomentComment.toObject, includeInstance),
    commentList: jspb.Message.toObjectList(msg.getCommentList(),
    proto.padlocal.SnsMomentComment.toObject, includeInstance),
    withList: jspb.Message.toObjectList(msg.getWithList(),
    proto.padlocal.SnsMomentComment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsMoment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMoment;
  return proto.padlocal.SnsMoment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMoment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMoment}
 */
proto.padlocal.SnsMoment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatetime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrichtext(value);
      break;
    case 7:
      var value = new proto.padlocal.SnsMomentComment;
      reader.readMessage(value,proto.padlocal.SnsMomentComment.deserializeBinaryFromReader);
      msg.addLike(value);
      break;
    case 8:
      var value = new proto.padlocal.SnsMomentComment;
      reader.readMessage(value,proto.padlocal.SnsMomentComment.deserializeBinaryFromReader);
      msg.addComment(value);
      break;
    case 9:
      var value = new proto.padlocal.SnsMomentComment;
      reader.readMessage(value,proto.padlocal.SnsMomentComment.deserializeBinaryFromReader);
      msg.addWith(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMoment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMoment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMoment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMoment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsrichtext();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getLikeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.padlocal.SnsMomentComment.serializeBinaryToWriter
    );
  }
  f = message.getCommentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.padlocal.SnsMomentComment.serializeBinaryToWriter
    );
  }
  f = message.getWithList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.padlocal.SnsMomentComment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.padlocal.SnsMoment.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.padlocal.SnsMoment.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickName = 3;
 * @return {string}
 */
proto.padlocal.SnsMoment.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 createTime = 4;
 * @return {number}
 */
proto.padlocal.SnsMoment.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.padlocal.SnsMoment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool isRichText = 6;
 * @return {boolean}
 */
proto.padlocal.SnsMoment.prototype.getIsrichtext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.setIsrichtext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated SnsMomentComment like = 7;
 * @return {!Array<!proto.padlocal.SnsMomentComment>}
 */
proto.padlocal.SnsMoment.prototype.getLikeList = function() {
  return /** @type{!Array<!proto.padlocal.SnsMomentComment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsMomentComment, 7));
};


/**
 * @param {!Array<!proto.padlocal.SnsMomentComment>} value
 * @return {!proto.padlocal.SnsMoment} returns this
*/
proto.padlocal.SnsMoment.prototype.setLikeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.padlocal.SnsMomentComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsMomentComment}
 */
proto.padlocal.SnsMoment.prototype.addLike = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.padlocal.SnsMomentComment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.clearLikeList = function() {
  return this.setLikeList([]);
};


/**
 * repeated SnsMomentComment comment = 8;
 * @return {!Array<!proto.padlocal.SnsMomentComment>}
 */
proto.padlocal.SnsMoment.prototype.getCommentList = function() {
  return /** @type{!Array<!proto.padlocal.SnsMomentComment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsMomentComment, 8));
};


/**
 * @param {!Array<!proto.padlocal.SnsMomentComment>} value
 * @return {!proto.padlocal.SnsMoment} returns this
*/
proto.padlocal.SnsMoment.prototype.setCommentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.padlocal.SnsMomentComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsMomentComment}
 */
proto.padlocal.SnsMoment.prototype.addComment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.padlocal.SnsMomentComment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.clearCommentList = function() {
  return this.setCommentList([]);
};


/**
 * repeated SnsMomentComment with = 9;
 * @return {!Array<!proto.padlocal.SnsMomentComment>}
 */
proto.padlocal.SnsMoment.prototype.getWithList = function() {
  return /** @type{!Array<!proto.padlocal.SnsMomentComment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.padlocal.SnsMomentComment, 9));
};


/**
 * @param {!Array<!proto.padlocal.SnsMomentComment>} value
 * @return {!proto.padlocal.SnsMoment} returns this
*/
proto.padlocal.SnsMoment.prototype.setWithList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.padlocal.SnsMomentComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.padlocal.SnsMomentComment}
 */
proto.padlocal.SnsMoment.prototype.addWith = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.padlocal.SnsMomentComment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.padlocal.SnsMoment} returns this
 */
proto.padlocal.SnsMoment.prototype.clearWithList = function() {
  return this.setWithList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SnsMomentComment.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SnsMomentComment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SnsMomentComment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMomentComment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isrichtext: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    replycommentid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    replyusername: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SnsMomentComment}
 */
proto.padlocal.SnsMomentComment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SnsMomentComment;
  return proto.padlocal.SnsMomentComment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SnsMomentComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SnsMomentComment}
 */
proto.padlocal.SnsMomentComment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatetime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrichtext(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplycommentid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplyusername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SnsMomentComment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SnsMomentComment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SnsMomentComment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SnsMomentComment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsrichtext();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getReplycommentid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReplyusername();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 createTime = 2;
 * @return {number}
 */
proto.padlocal.SnsMomentComment.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string userName = 3;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nickName = 4;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool isRichText = 6;
 * @return {boolean}
 */
proto.padlocal.SnsMomentComment.prototype.getIsrichtext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setIsrichtext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string replyCommentId = 7;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getReplycommentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setReplycommentid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string replyUserName = 8;
 * @return {string}
 */
proto.padlocal.SnsMomentComment.prototype.getReplyusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SnsMomentComment} returns this
 */
proto.padlocal.SnsMomentComment.prototype.setReplyusername = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SystemKickOutEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SystemKickOutEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SystemKickOutEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemKickOutEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    errormessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SystemKickOutEvent}
 */
proto.padlocal.SystemKickOutEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SystemKickOutEvent;
  return proto.padlocal.SystemKickOutEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SystemKickOutEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SystemKickOutEvent}
 */
proto.padlocal.SystemKickOutEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrorcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SystemKickOutEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SystemKickOutEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SystemKickOutEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemKickOutEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getErrormessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errorCode = 1;
 * @return {number}
 */
proto.padlocal.SystemKickOutEvent.prototype.getErrorcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.SystemKickOutEvent} returns this
 */
proto.padlocal.SystemKickOutEvent.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string errorMessage = 2;
 * @return {string}
 */
proto.padlocal.SystemKickOutEvent.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.SystemKickOutEvent} returns this
 */
proto.padlocal.SystemKickOutEvent.prototype.setErrormessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.padlocal.SystemEventRequest.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.padlocal.SystemEventRequest.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  KICKOUTEVENT: 2
};

/**
 * @return {proto.padlocal.SystemEventRequest.PayloadCase}
 */
proto.padlocal.SystemEventRequest.prototype.getPayloadCase = function() {
  return /** @type {proto.padlocal.SystemEventRequest.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.padlocal.SystemEventRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SystemEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SystemEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SystemEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    kickoutevent: (f = msg.getKickoutevent()) && proto.padlocal.SystemKickOutEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SystemEventRequest}
 */
proto.padlocal.SystemEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SystemEventRequest;
  return proto.padlocal.SystemEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SystemEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SystemEventRequest}
 */
proto.padlocal.SystemEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.SystemEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.padlocal.SystemKickOutEvent;
      reader.readMessage(value,proto.padlocal.SystemKickOutEvent.deserializeBinaryFromReader);
      msg.setKickoutevent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SystemEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SystemEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SystemEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getKickoutevent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.padlocal.SystemKickOutEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional SystemEventType type = 1;
 * @return {!proto.padlocal.SystemEventType}
 */
proto.padlocal.SystemEventRequest.prototype.getType = function() {
  return /** @type {!proto.padlocal.SystemEventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.SystemEventType} value
 * @return {!proto.padlocal.SystemEventRequest} returns this
 */
proto.padlocal.SystemEventRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SystemKickOutEvent kickOutEvent = 2;
 * @return {?proto.padlocal.SystemKickOutEvent}
 */
proto.padlocal.SystemEventRequest.prototype.getKickoutevent = function() {
  return /** @type{?proto.padlocal.SystemKickOutEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SystemKickOutEvent, 2));
};


/**
 * @param {?proto.padlocal.SystemKickOutEvent|undefined} value
 * @return {!proto.padlocal.SystemEventRequest} returns this
*/
proto.padlocal.SystemEventRequest.prototype.setKickoutevent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.padlocal.SystemEventRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SystemEventRequest} returns this
 */
proto.padlocal.SystemEventRequest.prototype.clearKickoutevent = function() {
  return this.setKickoutevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SystemEventRequest.prototype.hasKickoutevent = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SystemEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SystemEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SystemEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SystemEventResponse}
 */
proto.padlocal.SystemEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SystemEventResponse;
  return proto.padlocal.SystemEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SystemEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SystemEventResponse}
 */
proto.padlocal.SystemEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SystemEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SystemEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SystemEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SystemEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SyncRequest}
 */
proto.padlocal.SyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SyncRequest;
  return proto.padlocal.SyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SyncRequest}
 */
proto.padlocal.SyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: (f = msg.getPayload()) && proto.padlocal.SyncEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SyncResponse}
 */
proto.padlocal.SyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SyncResponse;
  return proto.padlocal.SyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SyncResponse}
 */
proto.padlocal.SyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.SyncEvent;
      reader.readMessage(value,proto.padlocal.SyncEvent.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.SyncEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional SyncEvent payload = 1;
 * @return {?proto.padlocal.SyncEvent}
 */
proto.padlocal.SyncResponse.prototype.getPayload = function() {
  return /** @type{?proto.padlocal.SyncEvent} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.SyncEvent, 1));
};


/**
 * @param {?proto.padlocal.SyncEvent|undefined} value
 * @return {!proto.padlocal.SyncResponse} returns this
*/
proto.padlocal.SyncResponse.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.SyncResponse} returns this
 */
proto.padlocal.SyncResponse.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.SyncResponse.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imagetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    messagecontent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageImageRequest}
 */
proto.padlocal.GetMessageImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageImageRequest;
  return proto.padlocal.GetMessageImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageImageRequest}
 */
proto.padlocal.GetMessageImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.padlocal.ImageType} */ (reader.readEnum());
      msg.setImagetype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ImageType imageType = 1;
 * @return {!proto.padlocal.ImageType}
 */
proto.padlocal.GetMessageImageRequest.prototype.getImagetype = function() {
  return /** @type {!proto.padlocal.ImageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.padlocal.ImageType} value
 * @return {!proto.padlocal.GetMessageImageRequest} returns this
 */
proto.padlocal.GetMessageImageRequest.prototype.setImagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string messageContent = 2;
 * @return {string}
 */
proto.padlocal.GetMessageImageRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageImageRequest} returns this
 */
proto.padlocal.GetMessageImageRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string messageToUserName = 3;
 * @return {string}
 */
proto.padlocal.GetMessageImageRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageImageRequest} returns this
 */
proto.padlocal.GetMessageImageRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f),
    imagetype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageImageResponse}
 */
proto.padlocal.GetMessageImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageImageResponse;
  return proto.padlocal.GetMessageImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageImageResponse}
 */
proto.padlocal.GetMessageImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    case 2:
      var value = /** @type {!proto.padlocal.ImageType} */ (reader.readEnum());
      msg.setImagetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
  f = message.getImagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional CdnRequest cdnRequest = 1;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.GetMessageImageResponse.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 1));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.GetMessageImageResponse} returns this
*/
proto.padlocal.GetMessageImageResponse.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetMessageImageResponse} returns this
 */
proto.padlocal.GetMessageImageResponse.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetMessageImageResponse.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ImageType imageType = 2;
 * @return {!proto.padlocal.ImageType}
 */
proto.padlocal.GetMessageImageResponse.prototype.getImagetype = function() {
  return /** @type {!proto.padlocal.ImageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.padlocal.ImageType} value
 * @return {!proto.padlocal.GetMessageImageResponse} returns this
 */
proto.padlocal.GetMessageImageResponse.prototype.setImagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.CdnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.CdnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.CdnRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CdnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = msg.getHost()) && proto.padlocal.Host.toObject(includeInstance, f),
    payload: msg.getPayload_asB64(),
    unpackaeskey: msg.getUnpackaeskey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.CdnRequest}
 */
proto.padlocal.CdnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.CdnRequest;
  return proto.padlocal.CdnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.CdnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.CdnRequest}
 */
proto.padlocal.CdnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.Host;
      reader.readMessage(value,proto.padlocal.Host.deserializeBinaryFromReader);
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUnpackaeskey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.CdnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.CdnRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.CdnRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.CdnRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.Host.serializeBinaryToWriter
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getUnpackaeskey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional Host host = 1;
 * @return {?proto.padlocal.Host}
 */
proto.padlocal.CdnRequest.prototype.getHost = function() {
  return /** @type{?proto.padlocal.Host} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.Host, 1));
};


/**
 * @param {?proto.padlocal.Host|undefined} value
 * @return {!proto.padlocal.CdnRequest} returns this
*/
proto.padlocal.CdnRequest.prototype.setHost = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.CdnRequest} returns this
 */
proto.padlocal.CdnRequest.prototype.clearHost = function() {
  return this.setHost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.CdnRequest.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.CdnRequest.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.padlocal.CdnRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.padlocal.CdnRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.CdnRequest} returns this
 */
proto.padlocal.CdnRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes unpackAesKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.CdnRequest.prototype.getUnpackaeskey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes unpackAesKey = 3;
 * This is a type-conversion wrapper around `getUnpackaeskey()`
 * @return {string}
 */
proto.padlocal.CdnRequest.prototype.getUnpackaeskey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUnpackaeskey()));
};


/**
 * optional bytes unpackAesKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUnpackaeskey()`
 * @return {!Uint8Array}
 */
proto.padlocal.CdnRequest.prototype.getUnpackaeskey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUnpackaeskey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.CdnRequest} returns this
 */
proto.padlocal.CdnRequest.prototype.setUnpackaeskey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SyncContactRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SyncContactRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SyncContactRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncContactRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SyncContactRequest}
 */
proto.padlocal.SyncContactRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SyncContactRequest;
  return proto.padlocal.SyncContactRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SyncContactRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SyncContactRequest}
 */
proto.padlocal.SyncContactRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SyncContactRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SyncContactRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SyncContactRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncContactRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.SyncContactResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.SyncContactResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.SyncContactResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncContactResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.SyncContactResponse}
 */
proto.padlocal.SyncContactResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.SyncContactResponse;
  return proto.padlocal.SyncContactResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.SyncContactResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.SyncContactResponse}
 */
proto.padlocal.SyncContactResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.SyncContactResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.SyncContactResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.SyncContactResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.SyncContactResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagecontent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVoiceRequest}
 */
proto.padlocal.GetMessageVoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVoiceRequest;
  return proto.padlocal.GetMessageVoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVoiceRequest}
 */
proto.padlocal.GetMessageVoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string messageId = 1;
 * @return {string}
 */
proto.padlocal.GetMessageVoiceRequest.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVoiceRequest} returns this
 */
proto.padlocal.GetMessageVoiceRequest.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageContent = 2;
 * @return {string}
 */
proto.padlocal.GetMessageVoiceRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVoiceRequest} returns this
 */
proto.padlocal.GetMessageVoiceRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string messageToUserName = 3;
 * @return {string}
 */
proto.padlocal.GetMessageVoiceRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVoiceRequest} returns this
 */
proto.padlocal.GetMessageVoiceRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVoiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVoiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVoiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVoiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    voice: msg.getVoice_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVoiceResponse}
 */
proto.padlocal.GetMessageVoiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVoiceResponse;
  return proto.padlocal.GetMessageVoiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVoiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVoiceResponse}
 */
proto.padlocal.GetMessageVoiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVoice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVoiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVoiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVoiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVoiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoice_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes voice = 1;
 * @return {!(string|Uint8Array)}
 */
proto.padlocal.GetMessageVoiceResponse.prototype.getVoice = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes voice = 1;
 * This is a type-conversion wrapper around `getVoice()`
 * @return {string}
 */
proto.padlocal.GetMessageVoiceResponse.prototype.getVoice_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVoice()));
};


/**
 * optional bytes voice = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVoice()`
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVoiceResponse.prototype.getVoice_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVoice()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.padlocal.GetMessageVoiceResponse} returns this
 */
proto.padlocal.GetMessageVoiceResponse.prototype.setVoice = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVideoThumbRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVideoThumbRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoThumbRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagecontent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVideoThumbRequest}
 */
proto.padlocal.GetMessageVideoThumbRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVideoThumbRequest;
  return proto.padlocal.GetMessageVideoThumbRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVideoThumbRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVideoThumbRequest}
 */
proto.padlocal.GetMessageVideoThumbRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVideoThumbRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVideoThumbRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoThumbRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageContent = 1;
 * @return {string}
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVideoThumbRequest} returns this
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageToUserName = 2;
 * @return {string}
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVideoThumbRequest} returns this
 */
proto.padlocal.GetMessageVideoThumbRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVideoThumbResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVideoThumbResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVideoThumbResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoThumbResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVideoThumbResponse}
 */
proto.padlocal.GetMessageVideoThumbResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVideoThumbResponse;
  return proto.padlocal.GetMessageVideoThumbResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVideoThumbResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVideoThumbResponse}
 */
proto.padlocal.GetMessageVideoThumbResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVideoThumbResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVideoThumbResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVideoThumbResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoThumbResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional CdnRequest cdnRequest = 1;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.GetMessageVideoThumbResponse.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 1));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.GetMessageVideoThumbResponse} returns this
*/
proto.padlocal.GetMessageVideoThumbResponse.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetMessageVideoThumbResponse} returns this
 */
proto.padlocal.GetMessageVideoThumbResponse.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetMessageVideoThumbResponse.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagecontent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVideoRequest}
 */
proto.padlocal.GetMessageVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVideoRequest;
  return proto.padlocal.GetMessageVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVideoRequest}
 */
proto.padlocal.GetMessageVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageContent = 1;
 * @return {string}
 */
proto.padlocal.GetMessageVideoRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVideoRequest} returns this
 */
proto.padlocal.GetMessageVideoRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageToUserName = 2;
 * @return {string}
 */
proto.padlocal.GetMessageVideoRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageVideoRequest} returns this
 */
proto.padlocal.GetMessageVideoRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageVideoResponse}
 */
proto.padlocal.GetMessageVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageVideoResponse;
  return proto.padlocal.GetMessageVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageVideoResponse}
 */
proto.padlocal.GetMessageVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional CdnRequest cdnRequest = 1;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.GetMessageVideoResponse.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 1));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.GetMessageVideoResponse} returns this
*/
proto.padlocal.GetMessageVideoResponse.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetMessageVideoResponse} returns this
 */
proto.padlocal.GetMessageVideoResponse.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetMessageVideoResponse.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageAttachRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageAttachRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageAttachRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagecontent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageAttachRequest}
 */
proto.padlocal.GetMessageAttachRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageAttachRequest;
  return proto.padlocal.GetMessageAttachRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageAttachRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageAttachRequest}
 */
proto.padlocal.GetMessageAttachRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageAttachRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageAttachRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageAttachRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageContent = 1;
 * @return {string}
 */
proto.padlocal.GetMessageAttachRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageAttachRequest} returns this
 */
proto.padlocal.GetMessageAttachRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageToUserName = 2;
 * @return {string}
 */
proto.padlocal.GetMessageAttachRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageAttachRequest} returns this
 */
proto.padlocal.GetMessageAttachRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageAttachResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageAttachResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageAttachResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageAttachResponse}
 */
proto.padlocal.GetMessageAttachResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageAttachResponse;
  return proto.padlocal.GetMessageAttachResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageAttachResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageAttachResponse}
 */
proto.padlocal.GetMessageAttachResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageAttachResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageAttachResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageAttachResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional CdnRequest cdnRequest = 1;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.GetMessageAttachResponse.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 1));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.GetMessageAttachResponse} returns this
*/
proto.padlocal.GetMessageAttachResponse.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetMessageAttachResponse} returns this
 */
proto.padlocal.GetMessageAttachResponse.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetMessageAttachResponse.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageAttachThumbRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageAttachThumbRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachThumbRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagecontent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageAttachThumbRequest}
 */
proto.padlocal.GetMessageAttachThumbRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageAttachThumbRequest;
  return proto.padlocal.GetMessageAttachThumbRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageAttachThumbRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageAttachThumbRequest}
 */
proto.padlocal.GetMessageAttachThumbRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageAttachThumbRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageAttachThumbRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachThumbRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageContent = 1;
 * @return {string}
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageAttachThumbRequest} returns this
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageToUserName = 2;
 * @return {string}
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.GetMessageAttachThumbRequest} returns this
 */
proto.padlocal.GetMessageAttachThumbRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.GetMessageAttachThumbResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.GetMessageAttachThumbResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.GetMessageAttachThumbResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachThumbResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cdnrequest: (f = msg.getCdnrequest()) && proto.padlocal.CdnRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.GetMessageAttachThumbResponse}
 */
proto.padlocal.GetMessageAttachThumbResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.GetMessageAttachThumbResponse;
  return proto.padlocal.GetMessageAttachThumbResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.GetMessageAttachThumbResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.GetMessageAttachThumbResponse}
 */
proto.padlocal.GetMessageAttachThumbResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.padlocal.CdnRequest;
      reader.readMessage(value,proto.padlocal.CdnRequest.deserializeBinaryFromReader);
      msg.setCdnrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.GetMessageAttachThumbResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.GetMessageAttachThumbResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.GetMessageAttachThumbResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.GetMessageAttachThumbResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCdnrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.padlocal.CdnRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional CdnRequest cdnRequest = 1;
 * @return {?proto.padlocal.CdnRequest}
 */
proto.padlocal.GetMessageAttachThumbResponse.prototype.getCdnrequest = function() {
  return /** @type{?proto.padlocal.CdnRequest} */ (
    jspb.Message.getWrapperField(this, proto.padlocal.CdnRequest, 1));
};


/**
 * @param {?proto.padlocal.CdnRequest|undefined} value
 * @return {!proto.padlocal.GetMessageAttachThumbResponse} returns this
*/
proto.padlocal.GetMessageAttachThumbResponse.prototype.setCdnrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.padlocal.GetMessageAttachThumbResponse} returns this
 */
proto.padlocal.GetMessageAttachThumbResponse.prototype.clearCdnrequest = function() {
  return this.setCdnrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.padlocal.GetMessageAttachThumbResponse.prototype.hasCdnrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.ForwardMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.ForwardMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.ForwardMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ForwardMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tousername: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messagecontent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    messagetousername: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.ForwardMessageRequest}
 */
proto.padlocal.ForwardMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.ForwardMessageRequest;
  return proto.padlocal.ForwardMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.ForwardMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.ForwardMessageRequest}
 */
proto.padlocal.ForwardMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTousername(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagetype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetousername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.ForwardMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.ForwardMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.ForwardMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ForwardMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTousername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessagetousername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string toUserName = 1;
 * @return {string}
 */
proto.padlocal.ForwardMessageRequest.prototype.getTousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ForwardMessageRequest} returns this
 */
proto.padlocal.ForwardMessageRequest.prototype.setTousername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 messageType = 2;
 * @return {number}
 */
proto.padlocal.ForwardMessageRequest.prototype.getMessagetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.padlocal.ForwardMessageRequest} returns this
 */
proto.padlocal.ForwardMessageRequest.prototype.setMessagetype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string messageContent = 3;
 * @return {string}
 */
proto.padlocal.ForwardMessageRequest.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ForwardMessageRequest} returns this
 */
proto.padlocal.ForwardMessageRequest.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string messageToUserName = 4;
 * @return {string}
 */
proto.padlocal.ForwardMessageRequest.prototype.getMessagetousername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ForwardMessageRequest} returns this
 */
proto.padlocal.ForwardMessageRequest.prototype.setMessagetousername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.padlocal.ForwardMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.padlocal.ForwardMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.padlocal.ForwardMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ForwardMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.padlocal.ForwardMessageResponse}
 */
proto.padlocal.ForwardMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.padlocal.ForwardMessageResponse;
  return proto.padlocal.ForwardMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.padlocal.ForwardMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.padlocal.ForwardMessageResponse}
 */
proto.padlocal.ForwardMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.padlocal.ForwardMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.padlocal.ForwardMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.padlocal.ForwardMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.padlocal.ForwardMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgId = 1;
 * @return {string}
 */
proto.padlocal.ForwardMessageResponse.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.padlocal.ForwardMessageResponse} returns this
 */
proto.padlocal.ForwardMessageResponse.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.padlocal.WeChatRequestChannel = {
  SHORT: 0,
  LONG: 1,
  SOCKET: 3,
  CDN: 4
};

/**
 * @enum {number}
 */
proto.padlocal.LongLinkPacketPushType = {
  NEW_MESSAGE: 0
};

/**
 * @enum {number}
 */
proto.padlocal.LoginPolicy = {
  DEFAULT: 0
};

/**
 * @enum {number}
 */
proto.padlocal.LoginStatus = {
  START: 0,
  ONE_CLICK_EVENT: 1,
  QRCODE_EVENT: 2,
  AUTH_SUCCESS: 3,
  SYNC: 4
};

/**
 * @enum {number}
 */
proto.padlocal.LoginType = {
  QRLOGIN: 0,
  AUTOLOGIN: 1,
  ONECLICKLOGIN: 2
};

/**
 * @enum {number}
 */
proto.padlocal.QRCodeStatus = {
  NEW: 0,
  SCANNED: 1,
  CONFIRMED: 2,
  CANCELLED: 3,
  EXPIRED: 4,
  UNKNOWN_ERROR: 5
};

/**
 * @enum {number}
 */
proto.padlocal.AddContactScene = {
  MOBILE_PHONE: 0,
  WECHAT_ID: 1,
  QQ_ID: 2,
  CHATROOM: 3,
  CONTACT_QR: 4,
  CONTACT_CARD: 5,
  SINGLE_CHAT: 6
};

/**
 * @enum {number}
 */
proto.padlocal.SystemEventType = {
  DID_REFRESH_TOKEN: 0,
  DID_KICKOUT: 1
};

/**
 * @enum {number}
 */
proto.padlocal.ImageType = {
  THUMB: 0,
  NORMAL: 1,
  HD: 2
};

goog.object.extend(exports, proto.padlocal);
