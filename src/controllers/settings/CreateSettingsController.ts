import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Settings } from "@entities/Settings";
import { Request, Response } from "express";

export class CreateSettingsController implements Controller {
    constructor(
        private createSettingsUseCase: UseCase
    ) { }

    public async handle(request: Request, response: Response) {
        try {
            this.validate(request, response);
            const {
                userId,
                initialScreen,
                editorTheme,
                isLineNumber,
                editorFontSize,
                previewFontSize,
                isPreview,
                isAutoClean,
            } = request.body;
            const setting = new Settings(
                userId,
                initialScreen,
                editorTheme,
                isLineNumber,
                editorFontSize,
                previewFontSize,
                isPreview,
                isAutoClean
            );
            await this.createSettingsUseCase.exec(setting);
            Presenter.SuccessCreated(response);
        } catch (error) {
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { body } = request;
        if (!body.userId) Presenter.BadRequest(response, "UserId is required")
        if (!body.isLineNumber) Presenter.BadRequest(response, "IsLineNumber is required")
        if (!body.editorFontSize) Presenter.BadRequest(response, "EditorFontSize is required")
        if (!body.previewFontSize) Presenter.BadRequest(response, "PreviewFontSize is required")
    }

    static factory(createSettingsUseCase: UseCase) {
        return new CreateSettingsController(createSettingsUseCase);
    }
}