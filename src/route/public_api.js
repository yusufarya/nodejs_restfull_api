// import { express } from "express";
//import pkg_express from 'express';
const { pkg_express } = require('express');
const { express } = pkg_express;

import user_controller from "../controller/user_controller.js";

const publicRouter = new express.router();
publicRouter.post('/api/users', user_controller.register);

export {
    publicRouter
}