import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { UseCase } from "@core/UseCase";
import { Settings } from "@entities/Settings";

export class CreateSettingsUseCase implements UseCase {
    constructor(
        private settingsRepository: SettingsRepository
    ) {}

    async exec(settings: Settings) {
        await this.settingsRepository.create(settings);
    }

    static factory(settingsRepository: SettingsRepository) {
        return new CreateSettingsUseCase(settingsRepository);
    }
}