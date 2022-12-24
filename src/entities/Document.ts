import { randomUUID } from "node:crypto";

export interface DocumentDTO {
    title: string;
    content: string;
    ownerId: string;
    parentId: string;
    id?: string | null;
    createdAt?: Date | null;
    deletedAt?: Date | null
}

export class Document {
    constructor(
        private readonly _title: string,
        private readonly _content: string,
        private readonly _ownerId: string,
        private readonly _parentId: string | null,
        private readonly _createdAt: Date = new Date(),
        private readonly _id: string = randomUUID(),
        private readonly _deletedAt?: Date | null,
    ) {
        this.isTitleValid(_title);
    }

    private isTitleValid(title: string) {
        if (title.length < 3) throw new Error("Title must be at least 3 characters");
        if (title.length > 120) throw new Error("Title must be at least 120 characters");
    }

    public get title(): string {
        return this._title;
    }

    public get content(): string {
        return this._content;
    }

    public get ownerId(): string {
        return this._ownerId;
    }

    public get parentId(): string | null {
        return this._parentId;
    }

    public get id(): string | null | undefined {
        return this._id;
    }

    public get createdAt(): Date | null | undefined {
        return this._createdAt;
    }

    public get deletedAt(): Date | null | undefined {
        return this._deletedAt;
    }
}
