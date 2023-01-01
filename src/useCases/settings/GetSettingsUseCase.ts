import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { UseCase } from "@core/UseCase";

export class GetSettingsUseCase implements UseCase {
    constructor(
        private settingsRepository: SettingsRepository
    ) { }

    async exec(userId: string) {
        return await this.settingsRepository.getByUserId(userId);
    }

    static factory(settingsRepository: SettingsRepository) {
        return new GetSettingsUseCase(settingsRepository);
    }
}