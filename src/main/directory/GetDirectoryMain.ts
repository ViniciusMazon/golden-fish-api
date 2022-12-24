import { GetDirectoryController } from "@controllers/directory/GetDirectoryController";
import { Main } from "@core/Main";
import { GetDirectoriesUseCase } from "@useCases/directory/GetDirectoriesUseCase";
import { Request, Response } from "express";
import { InMemoryDirectoryRepository } from "src/tests/repositories/InMemoryDirectoryRepository";

export class GetDirectoryMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = GetDirectoriesUseCase.factory(InMemoryDirectoryRepository.getInstance());
        const controller = GetDirectoryController.factory(useCase);

        return controller.handle(request, response);
    }
}