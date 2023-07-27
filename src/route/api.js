import express  from "express"
import user_controller from "../controller/user_controller.js";
import { authMiddleware } from "../middleware/auth_middleware.js";

const userRouter = new express.Router()
userRouter.use(authMiddleware)
userRouter.get('/api/users/current', user_controller.get);

export {
    userRouter
}