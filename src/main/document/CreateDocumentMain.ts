import { CreateDocumentController } from "@controllers/document/CreateDocumentController";
import { Main } from "@core/Main";
import { CreateDocumentUseCase } from "@useCases/document/CreateDocumentUseCase";
import { Request, Response } from "express";
import { InMemoryDocumentRepository } from "src/tests/repositories/InMemoryDocumentRepository";

export class CreateDocumentMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = CreateDocumentUseCase.factory(new InMemoryDocumentRepository());
        const controller = CreateDocumentController.factory(useCase);

        return controller.handle(request, response);
    }
}