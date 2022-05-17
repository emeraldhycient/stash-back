const request = require("supertest");
const app = require("../../main");

/*test("all todo endpoint ", async () => {
  const res = await request(app).get("/api/todos");
  expect(res.statusCode).toEqual(201);
  expect(res.body.todos).tobe(Array);
});
*/
describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});
