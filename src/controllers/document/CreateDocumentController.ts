import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Document } from "@entities/Document";
import { Request, Response } from "express";

class CreateDocumentController implements Controller {
    constructor(
        private createDocumentUseCase: UseCase
    ) { }

    async handle(request: Request, response: Response): Promise<any> {
        try {
            this.validate(request, response);

            const { title, content, ownerId, parentId } = request.body;

            const document = new Document(title, content, ownerId, parentId);

            await this.createDocumentUseCase.exec(document)
            return Presenter.SuccessCreated(response);
        } catch (error) {
            return Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response) {
        const { body } = request;

        if (!body.title) Presenter.BadRequest(response, "Title cannot be empty");
        if (!body.content) Presenter.BadRequest(response, "Content cannot be empty");
        if (!body.ownerId) Presenter.BadRequest(response, "OwnerId cannot be empty");
        if (!body.parentId) Presenter.BadRequest(response, "ParentId is required");
    }

    static factory(createDocumentUseCase: UseCase) {
        return new CreateDocumentController(createDocumentUseCase);
    }
}

export {
    CreateDocumentController
}