import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { UseCase } from "@core/UseCase";
import { Document } from "@entities/Document";

export class EditDocumentUseCase implements UseCase {
    constructor(
        private documentRepository: DocumentRepository
    ) { }

    async exec(document: Document) {
        await this.documentRepository.update({
            id: document.id,
            title: document.title,
            content: document.content,
            ownerId: document.ownerId,
            parentId: document.parentId,
            createdAt: document.createdAt,
            deletedAt: document.deletedAt
        });
    }

    static factory(documentRepository: DocumentRepository) {
        return new EditDocumentUseCase(documentRepository);
    }
} 