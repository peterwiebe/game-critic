import express from "express";

const app = express();
export const port = 5000;

const start = () => {
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
};

start();
