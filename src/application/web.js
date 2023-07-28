import express from "express";
import { publicRouter } from "../route/public_api.js";
import { errorMiddleware } from "../middleware/error_middleware.js";
import { userRouter } from "../route/api.js";
import bodyParser from "body-parser";

export const web = express();
// body parser
web.use(bodyParser.json());
web.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

web.use(publicRouter);
// web.use(userRouter);
web.use(errorMiddleware);
