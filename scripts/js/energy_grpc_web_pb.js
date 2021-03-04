/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.service = require('./energy_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.EnergyClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.EnergyPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.StringRequest,
 *   !proto.service.StringResponse>}
 */
const methodDescriptor_Energy_Ping = new grpc.web.MethodDescriptor(
  '/service.Energy/Ping',
  grpc.web.MethodType.UNARY,
  proto.service.StringRequest,
  proto.service.StringResponse,
  /**
   * @param {!proto.service.StringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.StringResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.StringRequest,
 *   !proto.service.StringResponse>}
 */
const methodInfo_Energy_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.StringResponse,
  /**
   * @param {!proto.service.StringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.StringResponse.deserializeBinary
);


/**
 * @param {!proto.service.StringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.StringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.StringResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.EnergyClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Energy/Ping',
      request,
      metadata || {},
      methodDescriptor_Energy_Ping,
      callback);
};


/**
 * @param {!proto.service.StringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.StringResponse>}
 *     A native promise that resolves to the response
 */
proto.service.EnergyPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Energy/Ping',
      request,
      metadata || {},
      methodDescriptor_Energy_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.ChartDataRequest,
 *   !proto.service.ChartDataResponse>}
 */
const methodDescriptor_Energy_ChartData = new grpc.web.MethodDescriptor(
  '/service.Energy/ChartData',
  grpc.web.MethodType.UNARY,
  proto.service.ChartDataRequest,
  proto.service.ChartDataResponse,
  /**
   * @param {!proto.service.ChartDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.ChartDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.ChartDataRequest,
 *   !proto.service.ChartDataResponse>}
 */
const methodInfo_Energy_ChartData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.ChartDataResponse,
  /**
   * @param {!proto.service.ChartDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.ChartDataResponse.deserializeBinary
);


/**
 * @param {!proto.service.ChartDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.ChartDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.ChartDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.EnergyClient.prototype.chartData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Energy/ChartData',
      request,
      metadata || {},
      methodDescriptor_Energy_ChartData,
      callback);
};


/**
 * @param {!proto.service.ChartDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.ChartDataResponse>}
 *     A native promise that resolves to the response
 */
proto.service.EnergyPromiseClient.prototype.chartData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Energy/ChartData',
      request,
      metadata || {},
      methodDescriptor_Energy_ChartData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.EventsRequest,
 *   !proto.service.EventsResponse>}
 */
const methodDescriptor_Energy_Events = new grpc.web.MethodDescriptor(
  '/service.Energy/Events',
  grpc.web.MethodType.UNARY,
  proto.service.EventsRequest,
  proto.service.EventsResponse,
  /**
   * @param {!proto.service.EventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.EventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.EventsRequest,
 *   !proto.service.EventsResponse>}
 */
const methodInfo_Energy_Events = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.EventsResponse,
  /**
   * @param {!proto.service.EventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.EventsResponse.deserializeBinary
);


/**
 * @param {!proto.service.EventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.service.EventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.service.EventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.EnergyClient.prototype.events =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.Energy/Events',
      request,
      metadata || {},
      methodDescriptor_Energy_Events,
      callback);
};


/**
 * @param {!proto.service.EventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.service.EventsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.EnergyPromiseClient.prototype.events =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.Energy/Events',
      request,
      metadata || {},
      methodDescriptor_Energy_Events);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.service.StringRequest,
 *   !proto.service.LastDataResponse>}
 */
const methodDescriptor_Energy_LastData = new grpc.web.MethodDescriptor(
  '/service.Energy/LastData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.service.StringRequest,
  proto.service.LastDataResponse,
  /**
   * @param {!proto.service.StringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.LastDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.service.StringRequest,
 *   !proto.service.LastDataResponse>}
 */
const methodInfo_Energy_LastData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.service.LastDataResponse,
  /**
   * @param {!proto.service.StringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.service.LastDataResponse.deserializeBinary
);


/**
 * @param {!proto.service.StringRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.service.LastDataResponse>}
 *     The XHR Node Readable Stream
 */
proto.service.EnergyClient.prototype.lastData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/service.Energy/LastData',
      request,
      metadata || {},
      methodDescriptor_Energy_LastData);
};


/**
 * @param {!proto.service.StringRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.service.LastDataResponse>}
 *     The XHR Node Readable Stream
 */
proto.service.EnergyPromiseClient.prototype.lastData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/service.Energy/LastData',
      request,
      metadata || {},
      methodDescriptor_Energy_LastData);
};


module.exports = proto.service;

