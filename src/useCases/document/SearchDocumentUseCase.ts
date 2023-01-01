import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { UseCase } from "@core/UseCase";

export class SearchDocumentUseCase implements UseCase {
    constructor(
        private documentRepository: DocumentRepository
    ) { }

    async exec(title: string) {
        return await this.documentRepository.getByTitle(title);
    }

    static factory(documentRepository: DocumentRepository) {
        return new SearchDocumentUseCase(documentRepository);
    }
}