export abstract class Hash {
    abstract encrypt(value: string): Promise<string>;
    abstract compare(value: string, hash: string): Promise<boolean>;
}