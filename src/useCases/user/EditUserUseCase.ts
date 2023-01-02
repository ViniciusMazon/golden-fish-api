import { Hash } from "@core/libs/Hash";
import { UserRepository } from "@core/repositories/UserRepository";
import { UseCase } from "@core/UseCase";
import { User } from "@entities/User";

export class EditUserUseCase implements UseCase {
    constructor(
        private userRepository: UserRepository,
        private hash: Hash
    ) { }

    async exec(user: User) {
        const savedUser = await this.userRepository.getById(user.id);
        if(!savedUser.length) return "User not found";
        const isValidPassword = await this.hash.compare(user.password, savedUser[0].password);
        if (!isValidPassword) return "Invalid password";

        await this.userRepository.update(user);
    }

    static factory(userRepository: UserRepository, hash: Hash) {
        return new EditUserUseCase(userRepository, hash);
    }
}