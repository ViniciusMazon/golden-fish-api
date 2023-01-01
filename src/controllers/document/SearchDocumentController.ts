import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class SearchDocumentController implements Controller {
    constructor(
        private searchDocumentUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { title } = request.params;

            const documents = await this.searchDocumentUseCase.exec(title);
            Presenter.Success(response, documents);
        } catch (error) {
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { params } = request;
        if (!params.title) Presenter.BadRequest(response, "Title is required");
    }

    static factory(searchDocumentUseCase: UseCase) {
        return new SearchDocumentController(searchDocumentUseCase);
    }
}