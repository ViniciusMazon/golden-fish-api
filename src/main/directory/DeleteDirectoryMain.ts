import { DeleteDirectoryController } from "@controllers/directory/DeleteDirectoryController";
import { Main } from "@core/Main";
import { DeleteDirectoryUseCase } from "@useCases/directory/DeleteDirectoryUseCase";
import { Request, Response } from "express";
import { InMemoryDirectoryRepository } from "src/tests/repositories/InMemoryDirectoryRepository";

export class DeleteDirectoryMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = DeleteDirectoryUseCase.factory(InMemoryDirectoryRepository.getInstance());
        const controller = DeleteDirectoryController.factory(useCase);

        return controller.handle(request, response);
    }
}