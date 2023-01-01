import { SearchDocumentController } from "@controllers/document/SearchDocumentController";
import { Main } from "@core/Main";
import { SearchDocumentUseCase } from "@useCases/document/SearchDocumentUseCase";
import { Request, Response } from "express";
import { InMemoryDocumentRepository } from "src/tests/repositories/InMemoryDocumentRepository";

export class SearchDocumentMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = SearchDocumentUseCase.factory(InMemoryDocumentRepository.getInstance());
        const controller = SearchDocumentController.factory(useCase);

        return controller.handle(request, response);
    }
}