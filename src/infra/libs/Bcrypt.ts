import { Hash } from "@core/libs/Hash";
import bcrypt from "bcrypt";

export class Bcrypt implements Hash {
    async encrypt(value: string): Promise<string> {
        return await bcrypt.hash(value, 8);
    }
}