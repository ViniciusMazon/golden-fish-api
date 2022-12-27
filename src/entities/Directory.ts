import { randomUUID } from "node:crypto";

export interface DirectoryDTO {
    id: string;
    title: string;
    parentId: string;
    ownerId: string;
    createdAt: Date;
    deletedAt: Date | null;
}

export class Directory {
    constructor(
        private readonly _title: string,
        private readonly _ownerId: string,
        private readonly _parentId: string,
        private readonly _id?: string,
        private readonly _createdAt?: Date,
        private readonly _deletedAt?: Date | null,
    ) {
        this.isTitleValid(_title);

        this._id = _id ? _id : randomUUID();
        this._createdAt = _createdAt ? _createdAt : new Date();
        this._deletedAt = _deletedAt ? _deletedAt : null;
    }

    private isTitleValid(title: string) {
        if (title.length < 3) throw new Error("Title must be at least 3 characters");
        if (title.length > 120) throw new Error("Title must be at least 120 characters");
    }

    public get title(): string {
        return this._title;
    }

    public get parentId(): string {
        return this._parentId;
    }

    public get ownerId(): string {
        return this._ownerId;
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