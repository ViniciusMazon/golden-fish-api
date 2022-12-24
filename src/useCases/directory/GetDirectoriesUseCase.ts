import { DirectoryRepository } from "@core/repositories/DirectoryRepository";
import { UseCase } from "@core/UseCase";

export class GetDirectoriesUseCase implements UseCase {
    constructor(
        private directoryRepository: DirectoryRepository
    ) { }

    exec(parentId: string) {
        return this.directoryRepository.getByParentId(parentId);
    }

    static factory(directoryRepository: DirectoryRepository): UseCase {
        return new GetDirectoriesUseCase(directoryRepository);
    }

}