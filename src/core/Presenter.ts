import { response, Response } from "express";

class Presenter {
    // 200
    static SuccessCreated(response: Response): Response {
        return response.status(201).json({
            code: 201,
            status: "success",
            message: "Created successfully"
        });
    }

    static Success(response: Response, data): Response {
        return response.status(200).json({
            code: 200,
            status: "success",
            message: "Successfully",
            data
        })
    }

    static SuccessNoContent(response: Response): Response {
        return response.status(204).json({
            code: 204,
            status: "success",
            message: "No content"
        });
    }

    // 400
    static BadRequest(response: Response, message: string): Response {
        return response.status(400).json({
            code: 400,
            status: "Bad request",
            message
        })
    }

    // 500
    static InternalServerError(response: Response): Response {
        return response.status(500).json({
            code: 500,
            status: "error",
            message: "Internal Server Error"
        });
    }
}

export {
    Presenter
}