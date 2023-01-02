import { UserRepository } from "@core/repositories/UserRepository";
import { UserDTO } from "@entities/User";

export class InMemoryUserRepository implements UserRepository {
    private static instance: InMemoryUserRepository;
    private users: UserDTO[] = [];

    private constructor() { }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new InMemoryUserRepository();
        }

        return this.instance;
    }

    update(user: UserDTO): void {
        const index = this.users.findIndex(item => item.id === user.id);
        this.users[index] = {
            id: user.id,
            username: user.username,
            password: user.hashPassword,
            email: user.email,
            avatarUrl: user.avatarUrl
        }
        console.log(this.users[index]);
    }

    create(user: UserDTO): void {
        const newUser = {
            id: user.id,
            username: user.username,
            password: user.hashPassword,
            email: user.email,
            avatarUrl: user.avatarUrl
        }
        this.users.push(newUser);
        console.log(this.users);
    }

    getById(id: string): UserDTO[] {
        return this.users.filter(user => user.id === id);
    }
}