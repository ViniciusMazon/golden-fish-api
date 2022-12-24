import { Request, Response } from "express";
import { Main } from "@core/Main";
import { GetDocumentsController } from "@controllers/document/GetDocumentsController";
import { GetDocumentsUseCase } from "@useCases/document/GetDocumentsUseCase";
import { InMemoryDocumentRepository } from "src/tests/repositories/InMemoryDocumentRepository";

export class GetDocumentMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = GetDocumentsUseCase.factory(InMemoryDocumentRepository.getInstance());
        const controller = GetDocumentsController.factory(useCase)

        return controller.handle(request, response);
    }
}