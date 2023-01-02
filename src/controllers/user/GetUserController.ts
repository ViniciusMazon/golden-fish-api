import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class GetUserController implements Controller {
    constructor(
        private getUserUseCase: UseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const result = await this.getUserUseCase.exec(request.params.userId);
            Presenter.Success(response, result);
        } catch (error) {
            console.error(error)
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { params } = request;
        if (!params.userId) Presenter.BadRequest(response, "userId is required");
    }

    static factory(getUserUseCase: UseCase) {
        return new GetUserController(getUserUseCase);
    }
}