export abstract class Hash {
    abstract encrypt(value: string): Promise<string>;
}