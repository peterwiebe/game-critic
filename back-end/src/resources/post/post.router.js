import { Router } from "express";
import controllers from "./post.controller";

const router = Router();

// /api/post
router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);

export default router;
