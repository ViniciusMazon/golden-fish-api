import { UserRepository } from "@core/repositories/UserRepository";
import { UseCase } from "@core/UseCase";

export class GetUserUseCase implements UseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async exec(userId: string) {
        return await this.userRepository.getById(userId);
    }

    static factory(userRepository: UserRepository) {
        return new GetUserUseCase(userRepository);
    }
}