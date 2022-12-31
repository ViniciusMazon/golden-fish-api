import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Directory } from "@entities/Directory";
import { Request, Response } from "express";

export class EditDirectoryController implements Controller {
    constructor(
        private editDirectoryUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { title, ownerId, parentId } = request.body;
            const { directoryId: id } = request.params;
            const directory = new Directory(title, ownerId, parentId, id);

            await this.editDirectoryUseCase.exec(directory);
            Presenter.SuccessNoContent(response);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response) {
        const { body } = request;
        if (!body.title) Presenter.BadRequest(response, "Title is required");
        if (!body.ownerId) Presenter.BadRequest(response, "OwnerId is required");
        if (!body.parentId) Presenter.BadRequest(response, "ParentId is required");
    }

    static factory(editDirectoryUseCase: UseCase): Controller {
        return new EditDirectoryController(editDirectoryUseCase);
    }
}