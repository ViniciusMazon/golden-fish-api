import { DirectoryRepository } from "@core/repositories/DirectoryRepository";
import { UseCase } from "@core/UseCase";
import { Directory } from "@entities/Directory";

export class EditDirectoryUseCase implements UseCase {
    constructor(
        private directoryRepository: DirectoryRepository
    ) { }

    async exec(directory: Directory) {
        await this.directoryRepository.update(directory);
    }

    static factory(directoryRepository: DirectoryRepository) {
        return new EditDirectoryUseCase(directoryRepository);
    }
}