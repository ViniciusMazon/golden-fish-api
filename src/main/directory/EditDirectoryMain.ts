import { EditDirectoryController } from "@controllers/directory/EditDirectoryController";
import { Main } from "@core/Main";
import { EditDirectoryUseCase } from "@useCases/directory/EditDirectoryUseCase";
import { Request, Response } from "express";
import { InMemoryDirectoryRepository } from "src/tests/repositories/InMemoryDirectoryRepository";

export class EditDirectoryMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = EditDirectoryUseCase.factory(InMemoryDirectoryRepository.getInstance());
        const controller = EditDirectoryController.factory(useCase);

        return controller.handle(request, response);
    }
}