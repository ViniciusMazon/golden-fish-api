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
        const index = this.documents.findIndex(doc => doc.id === document.id);
        const { createdAt, deletedAt } = this.documents[index];
        this.documents[index] = {
            id: document.id,
            title: document.title,
            content: document.content,
            parentId: document.parentId,
            ownerId: document.ownerId,
            createdAt,
            deletedAt
        };
        console.log(this.documents[index]);
    }

    delete(documentId: string): void {
        this.documents = this.documents.filter(document => document.id !== documentId);
    }
}