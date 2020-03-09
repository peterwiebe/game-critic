import { json, urlencoded } from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import postRouter from "./resources/post/post.router.js";

dotenv.config();

export const app = express();
export const port = 5000;
app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose
  .connect(`mongodb://mongo:27017/${process.env.NODE_ENV}?authSource=admin`, {
    useNewUrlParser: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    keepAlive: true
  })
  .then(() => console.log("MongoDB connected 🔥"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("It's working 🙌");
});
app.use("/api/post", postRouter);

const server = portNumber => {
  app.listen(portNumber, () => {
    console.log(`API server 👂 on port ${portNumber}`);
  });
};

if (process.env.NODE_ENV !== "test") {
  server(port);
}
