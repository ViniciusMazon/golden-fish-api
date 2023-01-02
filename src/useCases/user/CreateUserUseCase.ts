import { UserRepository } from "@core/repositories/UserRepository";
import { UseCase } from "@core/UseCase";
import { User } from "@entities/User";

export class CreateUserUseCase implements UseCase {
    constructor(
        private userRepository: UserRepository,
    ) { }

    async exec(user: User) {
        await this.userRepository.create(user);
    }

    static factory(userRepository: UserRepository) {
        return new CreateUserUseCase(userRepository);
    }
}