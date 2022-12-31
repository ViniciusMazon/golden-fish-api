import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";
import { Document } from "@entities/Document";

export class EditDocumentController implements Controller {
    constructor(
        private editDocumentUseCase: UseCase
    ) { }

    async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { documentId } = request.params;
            const { title, content, ownerId, parentId} = request.body;

            const document = new Document(title, content, ownerId, parentId, documentId);

            await this.editDocumentUseCase.exec(document);
            Presenter.SuccessNoContent(response);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response) {
        const { body } = request;
        if (!body.title) Presenter.BadRequest(response, "title is required");
        if (!body.ownerId) Presenter.BadRequest(response, "ownerId is required");
        if (!body.parentId) Presenter.BadRequest(response, "parentId is required");

        if (!request.params.documentId) Presenter.BadRequest(response, "Param documentId is required");
    }

    static factory(editDocumentUseCase: UseCase) {
        return new EditDocumentController(editDocumentUseCase);
    }
}