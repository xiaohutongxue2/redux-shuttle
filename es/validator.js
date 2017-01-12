(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'src/util/validator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('src/util/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.validator);
    global.validator = mod.exports;
  }
})(this, function (exports, _validator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _validator2 = _interopRequireDefault(_validator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  exports.default = _extends({}, _validator2.default);
});