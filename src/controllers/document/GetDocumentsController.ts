import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class GetDocumentsController implements Controller {
    constructor(
        private getDocumentsUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response): Promise<any> {
        try {
            this.validate(request, response);
            const { parentId } = request.params;

            const documents = await this.getDocumentsUseCase.exec(parentId);
            return Presenter.Success(response, documents);
        } catch (error) {
            return Presenter.InternalServerError(response);
        }
    }

    private validate(request: Request, response: Response) {
        const { params } = request;
        if (!params.parentId) Presenter.BadRequest(response, "ParentId cannot be empty");
    }

    static factory(getDocumentsUseCase: UseCase) {
        return new GetDocumentsController(getDocumentsUseCase);
    }
}