import { CreateUserController } from "@controllers/user/CreateUserController";
import { Main } from "@core/Main";
import { Bcrypt } from "@infra/libs/Bcrypt";
import { CreateUserUseCase } from "@useCases/user/CreateUserUseCase";
import { Response, Request } from "express";
import { InMemoryUserRepository } from "src/tests/repositories/InMemoryUserRepository";

export class CreateUserMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = CreateUserUseCase.factory(InMemoryUserRepository.getInstance());
        const controller = CreateUserController.factory(useCase, new Bcrypt());

        return controller.handle(request, response);
    }
}