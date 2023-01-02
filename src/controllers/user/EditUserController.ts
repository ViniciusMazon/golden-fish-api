import { Controller } from "@core/Controller";
import { Hash } from "@core/libs/Hash";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { User } from "@entities/User";
import { Request, Response } from "express";

export class EditUserController implements Controller {
    constructor(
        private editUserUseCase: UseCase,
        private hash: Hash
    ) { }

    async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { username, password, email, avatarUrl } = request.body;
            const { userId } = request.params;
            const user = new User(username, password, await this.hash.encrypt(password), email, avatarUrl, userId);

            const errors = await this.editUserUseCase.exec(user);
            if (errors) {
                Presenter.BadRequest(response, errors);
            }
            Presenter.SuccessNoContent(response);
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

    static factory(editUserUseCase: UseCase, hash: Hash) {
        return new EditUserController(editUserUseCase, hash);
    }
}