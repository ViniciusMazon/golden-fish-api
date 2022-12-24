import { DirectoryRepository } from "@core/repositories/DirectoryRepository";
import { UseCase } from "@core/UseCase";
import { Directory } from "@entities/Directory";

export class CreateDirectoryUseCase implements UseCase {
    constructor(
        private directoryRepository: DirectoryRepository
    ) {}

    async exec(directory: Directory) {
        await this.directoryRepository.create(directory);
    }

    static factory(directoryRepository: DirectoryRepository): UseCase {
        return new CreateDirectoryUseCase(directoryRepository);
    }
}