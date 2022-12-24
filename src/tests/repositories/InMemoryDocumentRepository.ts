import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { DocumentDTO } from "@entities/Document";

export class InMemoryDocumentRepository implements DocumentRepository {
    private documents = [];

    create(document: DocumentDTO): void {
        this.documents.push(document);

        console.log(this.documents);
    }

}