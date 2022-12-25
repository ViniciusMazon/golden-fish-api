import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { UseCase } from "@core/UseCase";

export class DeleteDocumentUseCase implements UseCase {
    constructor(
        private documentRepository: DocumentRepository
    ) { }

    exec(documentId: string) {
        this.documentRepository.delete(documentId);
    }

    static factory(documentRepository: DocumentRepository): UseCase {
        return new DeleteDocumentUseCase(documentRepository);
    }

}