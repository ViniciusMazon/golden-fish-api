import { DirectoryRepository } from "@core/repositories/DirectoryRepository";
import { UseCase } from "@core/UseCase";

export class DeleteDirectoryUseCase implements UseCase {
    constructor(
        private directoryRepository: DirectoryRepository,
    ) {}

    async exec(directoryId: string) {
        await this.directoryRepository.delete(directoryId);
    }

    static factory(directoryRepository: DirectoryRepository) {
        return new DeleteDirectoryUseCase(directoryRepository);
    }
}