import { CreateSettingsController } from "@controllers/settings/CreateSettingsController";
import { Main } from "@core/Main";
import { CreateSettingsUseCase } from "@useCases/settings/CreateSettingsUseCase";
import { Request, Response } from "express";
import { InMemorySettingsRepository } from "src/tests/repositories/InMemorySettingsRepository";

export class CreateSettingsMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = CreateSettingsUseCase.factory(InMemorySettingsRepository.getInstance());
        const controller = CreateSettingsController.factory(useCase);

        return controller.handle(request, response);
    }
}