import { port, app } from "../../index";
import request from "supertest";

const server = app.listen(port);

describe("Post API Tests", () => {
  it("GET /api/post returns an array of posts", async () => {
    const response = await request(server).get("/api/post");
    expect(response.status).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
