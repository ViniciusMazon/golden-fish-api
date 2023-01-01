import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { SettingsDTO } from "@entities/Settings";

export class InMemorySettingsRepository implements SettingsRepository {
    private static intance: InMemorySettingsRepository;
    private settingsInMemory: SettingsDTO[] = [];

    private constructor() { }

    static getInstance() {
        if (this.intance == null) {
            this.intance = new InMemorySettingsRepository();
        }

        return this.intance;
    }

    create(settings: SettingsDTO): void {
        const newSettings = {
            id: settings.id,
            initialScreen: settings.initialScreen,
            editorTheme: settings.editorTheme,
            isLineNumber: settings.isLineNumber,
            editorFontSize: settings.editorFontSize,
            previewFontSize: settings.previewFontSize,
            isPreview: settings.isPreview,
            isAutoClean: settings.isAutoClean,
            userId: settings.userId
        }
        this.settingsInMemory.push(newSettings);
        console.log(this.settingsInMemory);
    }

    getByUserId(userId: string): SettingsDTO[] {
        return this.settingsInMemory.filter(item => item.userId === userId);
    }
}