import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class GetDirectoryController implements Controller {
    constructor(
        private getDirectoryUseCase: UseCase
    ) { }

    public handle(request: Request, response: Response): void {
        try {
            this.validate(request, response);
            const { parentId } = request.params;

            const directories = this.getDirectoryUseCase.exec(parentId);
            Presenter.Success(response, directories);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response): void {
        if (!request.params.parentId) Presenter.BadRequest(response, "parentId is required");
    }

    static factory(getDirectoryUseCase: UseCase): Controller {
        return new GetDirectoryController(getDirectoryUseCase);
    }
}