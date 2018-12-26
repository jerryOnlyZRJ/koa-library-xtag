"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  api
} = require('../config');

class IndexModel {
  actionIndex() {
    return (0, _requestPromise.default)(`${api}/index.php`).then(data => JSON.parse(data));
  }

  actionView(id) {
    return (0, _requestPromise.default)(`${api}/view.php?id=${id}`).then(data => JSON.parse(data));
  }

  actionCreate(body) {
    const options = {
      method: 'POST',
      uri: `${api}/create.php`,
      body: body,
      json: true // Automatically stringifies the body to JSON

    };
    return (0, _requestPromise.default)(options);
  }

  actionUpdate(body) {
    const options = {
      method: 'POST',
      uri: `${api}/update.php`,
      body: body,
      json: true
    };
    return (0, _requestPromise.default)(options).then(data => JSON.parse(data));
  }

  actionDelete(body) {
    const options = {
      method: 'POST',
      uri: `${api}/delete.php`,
      body: body,
      json: true
    };
    return (0, _requestPromise.default)(options).then(data => JSON.parse(data));
  }

}

var _default = IndexModel;
exports.default = _default;