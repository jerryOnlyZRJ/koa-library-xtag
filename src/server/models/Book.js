import request from "request-promise";
const {
  api
} = require('../config').default

class IndexModel {
  actionIndex() {
    return request(`${api}/index.php`).then(data => JSON.parse(data));
  }
  actionView(id) {
    return request(`${api}/view.php?id=${id}`).then(data => JSON.parse(data));
  }
  actionCreate(body) {
    const options = {
      method: "POST",
      uri: `${api}/create.php`,
      body: body,
      json: true // Automatically stringifies the body to JSON
    };
    return request(options);
  }
  actionUpdate(body) {
    const options = {
      method: "POST",
      uri: `${api}/update.php`,
      body: body,
      json: true
    };
    return request(options).then(data => JSON.parse(data));
  }
  actionDelete(body) {
    const options = {
      method: "POST",
      uri: `${api}/delete.php`,
      body: body,
      json: true
    };
    return request(options).then(data => JSON.parse(data));
  }
}

export default IndexModel;