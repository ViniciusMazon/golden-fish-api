import { DirectoryDTO } from "@entities/Directory";

export abstract class DirectoryRepository {
    abstract create(directory: DirectoryDTO): void;
    abstract update(directory: DirectoryDTO): void;
    abstract getByParentId(directory: DirectoryDTO): void;
}