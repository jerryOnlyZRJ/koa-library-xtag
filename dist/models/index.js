"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let indexModel = {
  getData: () => {
    return (0, _requestPromise.default)('http://www.baidu.com').then(data => {
      const $ = _cheerio.default.load(data);

      return $('.mnav').text();
    });
  }
};
var _default = indexModel;
exports.default = _default;