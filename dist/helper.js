!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReduxShuttle=e():t.ReduxShuttle=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var n,o,u;!function(i,a){o=[t,e,r(4)],n=a,u="function"==typeof n?n.apply(e,o):n,!(void 0!==u&&(t.exports=u))}(this,function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(r),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=u({},o.default),t.exports=e.default})},,function(t,e,r){var n,o,u;!function(r,i){o=[t,e],n=i,u="function"==typeof n?n.apply(e,o):n,!(void 0!==u&&(t.exports=u))}(this,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.prototype.toString,n=function(t){if("undefined"==typeof t)return"undefined";if(null===t)return"null";if(t===!0||t===!1||t instanceof Boolean)return"boolean";if("string"==typeof t||t instanceof String)return"string";if("number"==typeof t||t instanceof Number)return"number";if("function"==typeof t||t instanceof Function)return"function";if("undefined"!=typeof Array.isArray&&Array.isArray(t))return"array";if(t instanceof RegExp)return"regexp";if(t instanceof Date)return"date";var e=r.call(t);return"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"},o=function(t){return"object"===n(t)},u=function(t){return"array"===n(t)},i=function(t){return"function"===n(t)},a=function(t){return"null"===n(t)},f=function(t){return"undefined"===n(t)},c=function(t){var e=n(t);if("number"!==e&&"string"!==e)return!1;var r=+t;return r-r+1>=0&&""!==t},s=function(t){return"string"===n(t)};e.default={typeOf:n,isArray:u,isObject:o,isNull:a,isUndefined:f,isFunction:i,isNumber:c,isString:s},t.exports=e.default})},,function(t,e,r){var n,o,u;!function(i,a){o=[t,e,r(2)],n=a,u="function"==typeof n?n.apply(e,o):n,!(void 0!==u&&(t.exports=u))}(this,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="@@redux-shuttle/SHUTTLE_KEY",o="@@redux-shuttle/REDUCER_KEY",u=function(t){return Symbol(t)},i=function(t){return!("function"!=typeof t||!t.constructor)&&"GeneratorFunction"===(ctor.displayName||ctor.name)},a=function(t){return(0,r.isObject)(t)&&Boolean(t[n])},f=function(t,e,r){return Object.defineProperty(t,e,{value:r})},c=function(t){var e={};return Array.isArray(t)?(t.forEach(function(t){e[t]=t}),e):e};e.default={SHUTTLE_KEY:n,REDUCER_KEY:o,genKey:u,defineProperty:f,isGenerator:i,isShuttle:a,keyMirror:c},t.exports=e.default})}])});