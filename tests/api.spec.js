/* eslint-disable */
// node api测试
const app = require("../app.js");
const request = require("supertest");
const testTemp = require("./template.js");

describe("test api", () => {
  // create -> index -> view -> delete -> index
  let tempId = 0;
  test("test /api/index", async () => {
    // index
    let res = await request(app.listen())
      .get("/api/index")
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.body.find(item => item.name === testTemp.name)).toBeUndefined();
  });
  test("test create a book", async () => {
    // create
    await request(app.listen())
      .post("/api/create")
      .send(testTemp)
      .set("Accept", "application/json");
    res = await request(app.listen())
      .get("/api/index")
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.body.find(item => item.name === testTemp.name)).toBeDefined();
    tempId = res.body.find(item => item.name === testTemp.name).id;
  });
  test("test update a book", async () => {
    // update
    testTemp.name = "test2";
    testTemp.id = tempId;
    await request(app.listen())
      .post("/api/update")
      .send(testTemp)
      .set("Accept", "application/json");
    // view
    res = await request(app.listen())
      .get(`/api/view?id=${tempId}`)
      .set("Accept", "application/json");
    expect(res.body.name).toBe(testTemp.name);
  });
  test("test delete a book", async () => {
    // delete
    await request(app.listen())
      .post(`/api/delete?id=${tempId}`)
      .set("Accept", "application/json");
    res = await request(app.listen())
      .get("/api/index")
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.body.find(item => item.name === testTemp.name)).toBeUndefined();
  });
});
