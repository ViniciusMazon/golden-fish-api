import { SettingsRepository } from "@core/repositories/SettingsRepository";
import { SettingsDTO } from "@entities/Settings";

export class InMemorySettingsRepository implements SettingsRepository {
    private static intance: InMemorySettingsRepository;
    private settingsInMemory: SettingsDTO[] = [];

    private constructor() { }

    update(settings: SettingsDTO): void {
        const index = this.settingsInMemory.findIndex(item => item.id === settings.id);
        this.settingsInMemory[index] = {
            id: settings.id,
            userId: settings.userId,
            initialScreen: settings.initialScreen,
            editorTheme: settings.editorTheme,
            isLineNumber: settings.isLineNumber,
            editorFontSize: settings.editorFontSize,
            previewFontSize: settings.previewFontSize,
            isPreview: settings.isPreview,
            isAutoClean: settings.isAutoClean
        }
        console.log(this.settingsInMemory[index]);
    }

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