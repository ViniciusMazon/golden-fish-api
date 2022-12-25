import { DirectoryRepository } from "@core/repositories/DirectoryRepository";
import { DirectoryDTO } from "@entities/Directory";

export class InMemoryDirectoryRepository implements DirectoryRepository {
    private static instance: InMemoryDirectoryRepository;
    private directories = [];

    private constructor() { }

    static getInstance(): InMemoryDirectoryRepository {
        if (this.instance == null) {
            this.instance = new InMemoryDirectoryRepository();
        }

        return this.instance;
    }

    create(directory: DirectoryDTO): void {
        this.directories.push(directory);
        console.log(this.directories);
    }

    update(directory: DirectoryDTO): void {
        const index = this.directories.findIndex(item => item.id === directory.id);
        const { createdAt, deletedAt } = this.directories[index];
        this.directories[index] = {
            id: directory.id,
            title: directory.title,
            parentId: directory.parentId,
            ownerId: directory.ownerId,
            createdAt,
            deletedAt
        }
        console.log(this.directories[index]);
    }

    getByParentId(parentId: string): DirectoryDTO[] {
        return this.directories.filter(item => item.parentId === parentId);
    }

    delete(directoryId: string): void {
        this.directories = this.directories.filter(item => item.id !== directoryId);
    }
}