import { request, response } from "express";
import user_service from "../service/user_service.js";

const register = async (req, res, next) => {
    try {
        const result = user_service.register(req.body);
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const result = await user_service.login(req.body);
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const get = async (req, res, next) => {
    try {
        const username = req.user.username;
        const result = await user_service.get(username);
        res.status(200).json({
            data : result
        })
    } catch (error) {
        next(error);
    }
}

export default {
    register,
    login,
    get
}