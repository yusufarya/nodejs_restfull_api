import { response } from "express";
import { ResponseError } from "../error/response_error.js";
// import {ValidationError} from "joi";
import pkg from 'joi';
const {ValidationError} = pkg;

const errorMiddleware = async (error, request, response, next) => {

    if(!error) {
        next();
        return;
    }
    if(error instanceof ResponseError) {
        response.status(error.status).json({
            errors : error.message
        }).end();
    } else if(error instanceof ValidationError) {
        response.status(400).json({
            errors : error.message
        }).end();
    } else {
        // jenis error yg tidak bisa kita handle //
        response.status(500).json({
            errors : error.message
        }).end();
    }
}

export {
    errorMiddleware
}