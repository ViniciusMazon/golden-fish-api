import { UserDTO } from "@entities/User";

export abstract class UserRepository {
    abstract create(user: UserDTO): void;
    abstract getById(id: string): UserDTO[];
}