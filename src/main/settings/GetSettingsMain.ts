import { GetSettingsController } from "@controllers/settings/GetSettingsController";
import { Main } from "@core/Main";
import { GetSettingsUseCase } from "@useCases/settings/GetSettingsUseCase";
import { Request, Response } from "express";
import { InMemorySettingsRepository } from "src/tests/repositories/InMemorySettingsRepository";

export class GetSettingsMain implements Main {
    static exec(request: Request, response: Response) {
        const useCase = GetSettingsUseCase.factory(InMemorySettingsRepository.getInstance());
        const controller = GetSettingsController.factory(useCase);

        return controller.handle(request, response);
    }
}