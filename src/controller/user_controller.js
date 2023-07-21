import user_service from "../service/user_service.js";

const register = async (request, response, next) => {
    try {
        const result = user_service.register(request.body);
        response.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    register
}