import { SettingsDTO } from "@entities/Settings";

export abstract class SettingsRepository {
    abstract create(settings: SettingsDTO): void
    abstract getByUserId(userId: string): SettingsDTO[] 
}