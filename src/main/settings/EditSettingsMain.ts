import { EditSettingsController } from "@controllers/settings/EditSettingsController";
import { Main } from "@core/Main";
import { EditSettingsUseCase } from "@useCases/settings/EditSettingsUseCase";
import { Request, Response } from "express";
import { InMemorySettingsRepository } from "src/tests/repositories/InMemorySettingsRepository";

export class EditSettingsMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = EditSettingsUseCase.factory(InMemorySettingsRepository.getInstance());
        const controller = EditSettingsController.factory(useCase);

        return controller.handle(request, response);
    }
}