import { GetUserController } from "@controllers/user/GetUserController";
import { Main } from "@core/Main";
import { GetUserUseCase } from "@useCases/user/GetUserUseCase";
import { Response, Request } from "express";
import { InMemoryUserRepository } from "src/tests/repositories/InMemoryUserRepository";

export class GetUserMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = GetUserUseCase.factory(InMemoryUserRepository.getInstance());
        const controller = GetUserController.factory(useCase);

        return controller.handle(request, response);
    }
}