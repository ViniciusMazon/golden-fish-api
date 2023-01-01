import { randomUUID } from "node:crypto";

export class User {
    constructor(
        private readonly _username: string,
        private readonly _password: string,
        private readonly _email: string,
        private readonly _avatarUrl: string,
        private readonly _id?: string
    ) {
        this._id = _id ? _id : randomUUID();
    }

    public get username(): string {
        return this._username;
    }

    public get email(): string {
        return this._email;
    }

    public get avatarUrl(): string {
        return this._avatarUrl;
    }

    public get id(): string {
        return this._id;
    }
}