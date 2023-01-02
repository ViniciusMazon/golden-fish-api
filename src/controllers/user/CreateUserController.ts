import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";
import { User } from "@entities/User";
import { Hash } from "@core/libs/Hash";
export class CreateUserController implements Controller {
    constructor(
        private createUserUseCase: UseCase,
        private hash: Hash
    ) { }

    async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { username, password, email, avatarUrl } = request.body;
            const user = new User(username, await this.hash.encrypt(password), email, avatarUrl);

            await this.createUserUseCase.exec(user);
            Presenter.SuccessCreated(response);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { body } = request;

        if (!body.username) Presenter.BadRequest(response, "Username is required");
        if (!body.password) Presenter.BadRequest(response, "Password is required");
        if (!body.email) Presenter.BadRequest(response, "Email is required");
        if (!body.avatarUrl) Presenter.BadRequest(response, "AvatarURL is required");
    }

    static factory(createUserUseCase: UseCase, hash: Hash) {
        return new CreateUserController(createUserUseCase, hash);
    }
}