import { randomUUID } from "node:crypto";

export interface SettingsDTO {
    userId: string;
    initialScreen: string;
    editorTheme: string;
    isLineNumber: boolean;
    editorFontSize: number;
    previewFontSize: number;
    isPreview: boolean;
    isAutoClean: boolean;
    id?: string;
}

export class Settings {
    constructor(
        private readonly _userId: string,
        private readonly _initialScreen: string,
        private readonly _editorTheme: string,
        private readonly _isLineNumber: boolean,
        private readonly _editorFontSize: number,
        private readonly _previewFontSize: number,
        private readonly _isPreview: boolean,
        private readonly _isAutoClean: boolean,
        private readonly _id?: string 
    ) {
        this._id = _id ? _id : randomUUID();
    }

    public get userId(): string {
        return this._userId;
    }

    public get initialScreen(): string {
        return this._initialScreen;
    }

    public get editorTheme(): string {
        return this._editorTheme;
    }

    public get isLineNumber(): boolean {
        return this._isLineNumber;
    }

    public get editorFontSize(): number {
        return this._editorFontSize;
    }

    public get previewFontSize(): number {
        return this._previewFontSize;
    }

    public get isPreview(): boolean {
        return this._isPreview;
    }

    public get isAutoClean(): boolean {
        return this._isAutoClean;
    }

    public get id(): string {
        return this._id;
    }
}