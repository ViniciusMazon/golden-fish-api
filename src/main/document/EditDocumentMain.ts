import { EditDocumentController } from "@controllers/document/EditDocumentController";
import { Main } from "@core/Main";
import { EditDocumentUseCase } from "@useCases/document/EditDocumentUseCase";
import { Request, Response } from "express";
import { InMemoryDocumentRepository } from "src/tests/repositories/InMemoryDocumentRepository";

export class EditDocumentMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = EditDocumentUseCase.factory(InMemoryDocumentRepository.getInstance());
        const controller = EditDocumentController.factory(useCase);

        return controller.handle(request, response);
    }
}