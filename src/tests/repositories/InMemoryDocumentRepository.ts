import { DocumentRepository } from "@core/repositories/DocumentRepository";
import { DocumentDTO } from "@entities/Document";

export class InMemoryDocumentRepository implements DocumentRepository {
    private static instance: InMemoryDocumentRepository;
    private documents = [];

    private constructor() { }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new InMemoryDocumentRepository();
        }

        return this.instance;
    }

    getByParentId(parentId: string): DocumentDTO[] | [] {
        return this.documents.filter(doc => doc.parentId === parentId);
    }

    create(document: DocumentDTO): void {
        this.documents.push(document);

        console.log(this.documents);
    }

    update(document: DocumentDTO) {
        const index = this.documents.indexOf(doc => doc.id === document.id);
        if (!index) throw new Error("Document not found");
        this.documents[index] = document;
        console.log(this.documents[index]);
    }

}