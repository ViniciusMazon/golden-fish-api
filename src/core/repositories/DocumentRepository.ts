import { DocumentDTO } from "@entities/Document";

export abstract class DocumentRepository {
    abstract create(document: DocumentDTO): void;
    abstract getByParentId(parentId: string): Array<DocumentDTO> | [];
    abstract getByTitle(title: string): Array<DocumentDTO> | [];
    abstract update(document: DocumentDTO): void;
    abstract delete(documentId: string): void;
}