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

goog.exportSymbol('proto.GrpcPadchat.PackLongRequest', null, global);
goog.exportSymbol('proto.GrpcPadchat.PackLongResponse', null, global);
goog.exportSymbol('proto.GrpcPadchat.PackShortRequest', null, global);
goog.exportSymbol('proto.GrpcPadchat.PackShortResponse', null, global);
goog.exportSymbol('proto.GrpcPadchat.ParseRequest', null, global);
goog.exportSymbol('proto.GrpcPadchat.ParsedResponse', null, global);

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
proto.GrpcPadchat.PackLongRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.PackLongRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.PackLongRequest.displayName = 'proto.GrpcPadchat.PackLongRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.PackLongRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.PackLongRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.PackLongRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackLongRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    params: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.GrpcPadchat.PackLongRequest}
 */
proto.GrpcPadchat.PackLongRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.PackLongRequest;
  return proto.GrpcPadchat.PackLongRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.PackLongRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.PackLongRequest}
 */
proto.GrpcPadchat.PackLongRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParams(value);
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
proto.GrpcPadchat.PackLongRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.PackLongRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.PackLongRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackLongRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParams();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.GrpcPadchat.PackLongRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackLongRequest.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string apiName = 2;
 * @return {string}
 */
proto.GrpcPadchat.PackLongRequest.prototype.getApiname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackLongRequest.prototype.setApiname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string params = 3;
 * @return {string}
 */
proto.GrpcPadchat.PackLongRequest.prototype.getParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackLongRequest.prototype.setParams = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



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
proto.GrpcPadchat.PackLongResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.PackLongResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.PackLongResponse.displayName = 'proto.GrpcPadchat.PackLongResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.PackLongResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.PackLongResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.PackLongResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackLongResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buffer: msg.getBuffer_asB64()
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
 * @return {!proto.GrpcPadchat.PackLongResponse}
 */
proto.GrpcPadchat.PackLongResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.PackLongResponse;
  return proto.GrpcPadchat.PackLongResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.PackLongResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.PackLongResponse}
 */
proto.GrpcPadchat.PackLongResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBuffer(value);
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
proto.GrpcPadchat.PackLongResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.PackLongResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.PackLongResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackLongResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuffer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes buffer = 2;
 * @return {!(string|Uint8Array)}
 */
proto.GrpcPadchat.PackLongResponse.prototype.getBuffer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes buffer = 2;
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {string}
 */
proto.GrpcPadchat.PackLongResponse.prototype.getBuffer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBuffer()));
};


/**
 * optional bytes buffer = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBuffer()`
 * @return {!Uint8Array}
 */
proto.GrpcPadchat.PackLongResponse.prototype.getBuffer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBuffer()));
};


/** @param {!(string|Uint8Array)} value */
proto.GrpcPadchat.PackLongResponse.prototype.setBuffer = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



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
proto.GrpcPadchat.PackShortRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.PackShortRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.PackShortRequest.displayName = 'proto.GrpcPadchat.PackShortRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.PackShortRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.PackShortRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.PackShortRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackShortRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    params: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.GrpcPadchat.PackShortRequest}
 */
proto.GrpcPadchat.PackShortRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.PackShortRequest;
  return proto.GrpcPadchat.PackShortRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.PackShortRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.PackShortRequest}
 */
proto.GrpcPadchat.PackShortRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParams(value);
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
proto.GrpcPadchat.PackShortRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.PackShortRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.PackShortRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackShortRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParams();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.GrpcPadchat.PackShortRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackShortRequest.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string apiName = 2;
 * @return {string}
 */
proto.GrpcPadchat.PackShortRequest.prototype.getApiname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackShortRequest.prototype.setApiname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string params = 3;
 * @return {string}
 */
proto.GrpcPadchat.PackShortRequest.prototype.getParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackShortRequest.prototype.setParams = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



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
proto.GrpcPadchat.PackShortResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.PackShortResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.PackShortResponse.displayName = 'proto.GrpcPadchat.PackShortResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.PackShortResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.PackShortResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.PackShortResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackShortResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.GrpcPadchat.PackShortResponse}
 */
proto.GrpcPadchat.PackShortResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.PackShortResponse;
  return proto.GrpcPadchat.PackShortResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.PackShortResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.PackShortResponse}
 */
proto.GrpcPadchat.PackShortResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandurl(value);
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
proto.GrpcPadchat.PackShortResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.PackShortResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.PackShortResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.PackShortResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandurl();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string commandUrl = 1;
 * @return {string}
 */
proto.GrpcPadchat.PackShortResponse.prototype.getCommandurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.GrpcPadchat.PackShortResponse.prototype.setCommandurl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.GrpcPadchat.PackShortResponse.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.GrpcPadchat.PackShortResponse.prototype.getPayload_asB64 = function() {
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
proto.GrpcPadchat.PackShortResponse.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.GrpcPadchat.PackShortResponse.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



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
proto.GrpcPadchat.ParseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.ParseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.ParseRequest.displayName = 'proto.GrpcPadchat.ParseRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.ParseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.ParseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.ParseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.ParseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiname: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.GrpcPadchat.ParseRequest}
 */
proto.GrpcPadchat.ParseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.ParseRequest;
  return proto.GrpcPadchat.ParseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.ParseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.ParseRequest}
 */
proto.GrpcPadchat.ParseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiname(value);
      break;
    case 3:
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
proto.GrpcPadchat.ParseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.ParseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.ParseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.ParseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.GrpcPadchat.ParseRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.GrpcPadchat.ParseRequest.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string apiName = 2;
 * @return {string}
 */
proto.GrpcPadchat.ParseRequest.prototype.getApiname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.GrpcPadchat.ParseRequest.prototype.setApiname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes payload = 3;
 * @return {!(string|Uint8Array)}
 */
proto.GrpcPadchat.ParseRequest.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes payload = 3;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.GrpcPadchat.ParseRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.GrpcPadchat.ParseRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.GrpcPadchat.ParseRequest.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



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
proto.GrpcPadchat.ParsedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GrpcPadchat.ParsedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GrpcPadchat.ParsedResponse.displayName = 'proto.GrpcPadchat.ParsedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GrpcPadchat.ParsedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GrpcPadchat.ParsedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GrpcPadchat.ParsedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.ParsedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.GrpcPadchat.ParsedResponse}
 */
proto.GrpcPadchat.ParsedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GrpcPadchat.ParsedResponse;
  return proto.GrpcPadchat.ParsedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GrpcPadchat.ParsedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GrpcPadchat.ParsedResponse}
 */
proto.GrpcPadchat.ParsedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.GrpcPadchat.ParsedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GrpcPadchat.ParsedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GrpcPadchat.ParsedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GrpcPadchat.ParsedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payload = 1;
 * @return {string}
 */
proto.GrpcPadchat.ParsedResponse.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.GrpcPadchat.ParsedResponse.prototype.setPayload = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.GrpcPadchat);