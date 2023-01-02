import { EditUserController } from "@controllers/user/EditUserController";
import { Main } from "@core/Main";
import { Bcrypt } from "@infra/libs/Bcrypt";
import { EditUserUseCase } from "@useCases/user/EditUserUseCase";
import { Request, Response } from "express";
import { InMemoryUserRepository } from "src/tests/repositories/InMemoryUserRepository";

export class EditUserMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = EditUserUseCase.factory(InMemoryUserRepository.getInstance(), new Bcrypt());
        const controller = EditUserController.factory(useCase, new Bcrypt());

        return controller.handle(request, response);
    }
}