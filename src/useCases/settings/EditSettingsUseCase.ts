import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { UseCase } from "@core/UseCase";
import { Settings } from "@entities/Settings";

export class EditSettingsUseCase implements UseCase {
    constructor(
        private settingsRepository: SettingsRepository
    ) { }

    async exec(settings: Settings) {
        await this.settingsRepository.update(settings);
    }

    static factory(settingsRepository: SettingsRepository) {
        return new EditSettingsUseCase(settingsRepository);
    }
}