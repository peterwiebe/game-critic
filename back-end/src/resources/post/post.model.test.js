import request from "supertest";
import { port, app } from "../../index";
import { Post } from "./post.model";

const server = app(port);

describe("Post model", () => {
  describe("Schema", () => {
    test("Body property", () => {
      const body = Post.schema.obj.body;
      expect(body).toEqual(String);
    });
  });
});

describe("Post endpoints", () => {
  it("Should create a new post", async () => {
    const res = await request(server)
      .post("/api/post")
      .send({
        title: "check the mic",
        body: "intergalactic planetary"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
