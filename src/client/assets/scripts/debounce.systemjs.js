/* eslint-disable */
"use strict";

System.register([], function (_export, _context) {
  "use strict";

  _export("default", function (callback) {
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
  });

  return {
    setters: [],
    execute: function () {}
  };
});
