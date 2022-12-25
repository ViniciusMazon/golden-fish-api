import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class DeleteDocumentController implements Controller {
    constructor(
        private deleteDocumentUseCase: UseCase,
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validation(request, response);
            const { documentId } = request.params;

            await this.deleteDocumentUseCase.exec(documentId);
            Presenter.SuccessNoContent(response);
        } catch (error) {
            Presenter.InternalServerError(response);
        }
    }

    private validation(request: Request, response: Response) {
        if (!request.params.documentId) Presenter.BadRequest(response, "DocumentId is required");
    }

    static factory(deleteDocumentUseCase: UseCase): Controller {
        return new DeleteDocumentController(deleteDocumentUseCase);
    }
}