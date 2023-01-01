import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Request, Response } from "express";

export class GetSettingsController implements Controller {
    constructor(
        private getSettingsUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const { userId } = request.params;
            const settings = await this.getSettingsUseCase.exec(userId);
            Presenter.Success(response, settings);
        } catch (error) {
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { params } = request;
        if (!params.userId) Presenter.BadRequest(response, "userId is required");
    }

    static factory(getSettingsUseCase: UseCase) {
        return new GetSettingsController(getSettingsUseCase);
    }
}