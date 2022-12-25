import { DeleteDocumentController } from "@controllers/document/DeleteDocumentController";
import { Main } from "@core/Main";
import { DeleteDocumentUseCase } from "@useCases/document/DeleteDocumentUseCase";
import { Request, Response } from "express";
import { InMemoryDocumentRepository } from "src/tests/repositories/InMemoryDocumentRepository";

export class DeleteDocumentMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = DeleteDocumentUseCase.factory(InMemoryDocumentRepository.getInstance());
        const controller = DeleteDocumentController.factory(useCase);

        return controller.handle(request, response);
    }
}