(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './lib/createShuttle', './lib/createReducer', './lib/bindShuttle', './lib/createShuttleTree', './lib/mapShuttleDispatch', './lib/mapShuttleState'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./lib/createShuttle'), require('./lib/createReducer'), require('./lib/bindShuttle'), require('./lib/createShuttleTree'), require('./lib/mapShuttleDispatch'), require('./lib/mapShuttleState'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createShuttle, global.createReducer, global.bindShuttle, global.createShuttleTree, global.mapShuttleDispatch, global.mapShuttleState);
    global.index = mod.exports;
  }
})(this, function (exports, _createShuttle, _createReducer, _bindShuttle, _createShuttleTree, _mapShuttleDispatch, _mapShuttleState) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mapShuttleState = exports.mapShuttleDispatch = exports.createShuttleTree = exports.bindShuttle = exports.createReducer = exports.createShuttle = undefined;

  var _createShuttle2 = _interopRequireDefault(_createShuttle);

  var _createReducer2 = _interopRequireDefault(_createReducer);

  var _bindShuttle2 = _interopRequireDefault(_bindShuttle);

  var _createShuttleTree2 = _interopRequireDefault(_createShuttleTree);

  var _mapShuttleDispatch2 = _interopRequireDefault(_mapShuttleDispatch);

  var _mapShuttleState2 = _interopRequireDefault(_mapShuttleState);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.createShuttle = _createShuttle2.default;
  exports.createReducer = _createReducer2.default;
  exports.bindShuttle = _bindShuttle2.default;
  exports.createShuttleTree = _createShuttleTree2.default;
  exports.mapShuttleDispatch = _mapShuttleDispatch2.default;
  exports.mapShuttleState = _mapShuttleState2.default;
});