import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { UseCase } from "@core/UseCase";
import { Document } from "@entities/Document";

export class CreateDocumentUseCase implements UseCase {
    constructor(
        private documentRepository: DocumentRepository
    ) { }

    async exec(document: Document): Promise<void> {
        this.documentRepository.create({
            id: document.id,
            title: document.title,
            content: document.content,
            ownerId: document.ownerId,
            parentId: document.parentId,
            createdAt: document.createdAt
        })
    }

    static factory(documentRepository: DocumentRepository): UseCase {
        return new CreateDocumentUseCase(documentRepository);
    }
}