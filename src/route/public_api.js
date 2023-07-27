import express  from "express"

import user_controller from "../controller/user_controller.js";

const publicRouter = new express.Router()
publicRouter.post('/api/users', user_controller.register);
publicRouter.post('/api/users/login', user_controller.login);

export {
    publicRouter
}