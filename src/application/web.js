// import { express } from "express";
import pkg_express from 'express';
const { express } = pkg_express;
import { publicRouter } from "../route/public_api.js";
import { errorMiddleware } from "../middleware/error_middleware.js";

export const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(errorMiddleware)