import { SettingsDTO } from "@entities/Settings";

export abstract class SettingsRepository {
    abstract create(settings: SettingsDTO): void
}