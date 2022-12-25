import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class DeleteDirectoryController implements Controller {
    constructor(
        private deleteDirectoryUseCase: UseCase
    ) { }

    public handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { directoryId } = request.params;

            this.deleteDirectoryUseCase.exec(directoryId);
            Presenter.SuccessNoContent(response);
        } catch (error) {
            Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response) {
        if (!request.params.directoryId) Presenter.BadRequest(response, "DirectoryId is required");
    }

    static factory(deleteDirectoryUseCase: UseCase): Controller {
        return new DeleteDirectoryController(deleteDirectoryUseCase);
    }
}