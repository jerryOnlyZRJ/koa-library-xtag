"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(callback) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        callback();
        clearTimeout(timer);
        timer = null;
      }, ms);
    }
  };
}
