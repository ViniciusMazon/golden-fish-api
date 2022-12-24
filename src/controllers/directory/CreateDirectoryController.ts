import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Directory } from "@entities/Directory";
import { Request, Response } from "express";

export class CreateDirectoryController implements Controller {
    constructor(
        private createDirectoryUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { title, ownerId, parentId } = request.body;
            const directory = new Directory(title, ownerId, parentId);

            await this.createDirectoryUseCase.exec(directory);
            Presenter.SuccessCreated(response);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response): void {
        const { body } = request;
        if (!body.title) Presenter.BadRequest(response, "Title is required");
        if (!body.ownerId) Presenter.BadRequest(response, "OwnerId is required");
        if (!body.parentId) Presenter.BadRequest(response, "ParentId is required");
    }

    static factory(createDirectoryUseCase: UseCase): Controller {
        return new CreateDirectoryController(createDirectoryUseCase);
    }
}