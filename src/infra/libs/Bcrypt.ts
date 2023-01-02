import { Hash } from "@core/libs/Hash";
import bcrypt from "bcrypt";

export class Bcrypt implements Hash {
    async compare(value: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(value, hash)
    }
    async encrypt(value: string): Promise<string> {
        return await bcrypt.hash(value, 8);
    }
}