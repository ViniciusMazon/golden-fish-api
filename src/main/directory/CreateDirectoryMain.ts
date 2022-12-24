import { CreateDirectoryController } from "@controllers/directory/CreateDirectoryController";
import { Main } from "@core/Main";
import { CreateDirectoryUseCase } from "@useCases/directory/CreateDirectoryUseCase";
import { Request, Response } from "express";
import { InMemoryDirectoryRepository } from "src/tests/repositories/InMemoryDirectoryRepository";

export class CreateDirectoryMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = CreateDirectoryUseCase.factory(InMemoryDirectoryRepository.getInstance());
        const controller = CreateDirectoryController.factory(useCase);

        return controller.handle(request, response);
    }
}