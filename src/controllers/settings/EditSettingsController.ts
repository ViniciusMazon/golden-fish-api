import { Controller } from "@core/Controller";
import { Presenter } from "@core/Presenter";
import { UseCase } from "@core/UseCase";
import { Settings } from "@entities/Settings";
import { Request, Response } from "express";

export class EditSettingsController implements Controller {
    constructor(
        private editSettingsUseCase: UseCase
    ) { }

    async handle(request: Request, response: Response) {
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
            const { settingsId } = request.params;

            const settings = new Settings(
                userId,
                initialScreen,
                editorTheme,
                isLineNumber,
                editorFontSize,
                previewFontSize,
                isPreview,
                isAutoClean,
                settingsId
            );
            await this.editSettingsUseCase.exec(settings);
            Presenter.SuccessNoContent(response);
        } catch (error) {
            console.error(error);
            Presenter.InternalServerError(response);
        }
    }

    private validate(request, response) {
        const { body, params } = request;
        if (!body.userId) Presenter.BadRequest(response, "UserId is required");
        if (!body.editorFontSize) Presenter.BadRequest(response, "EditorFontSize is required");
        if (!body.previewFontSize) Presenter.BadRequest(response, "PreviewFontSize is required");
        if (!params.settingsId) Presenter.BadRequest(response, "Param settingsId is required");
    }

    static factory(editSettingsUseCase: UseCase) {
        return new EditSettingsController(editSettingsUseCase)
    }
}