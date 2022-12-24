import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { UseCase } from "@core/UseCase";

export class GetDocumentsUseCase implements UseCase {
    constructor(
        private documentRepository: DocumentRepository
    ) { }

    async exec(parentId: string) {
        return await this.documentRepository.getByParentId(parentId);
    }

    static factory(documentRepository: DocumentRepository): UseCase {
        return new GetDocumentsUseCase(documentRepository);
    }
}