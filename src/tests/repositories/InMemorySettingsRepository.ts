import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { SettingsDTO } from "@entities/Settings";

export class InMemorySettingsRepository implements SettingsRepository {
    private static intance: InMemorySettingsRepository;
    private settingsInMemory = [];

    private constructor() { }

    static getInstance() {
        if(this.intance == null) {
            this.intance = new InMemorySettingsRepository();
        }

        return this.intance;
    }

    create(settings: SettingsDTO): void {
        this.settingsInMemory.push(settings);
        console.log(this.settingsInMemory);
    }
}