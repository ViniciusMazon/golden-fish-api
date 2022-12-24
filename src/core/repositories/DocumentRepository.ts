import { DocumentDTO } from "@entities/Document";

export abstract class DocumentRepository {
    abstract create(document: DocumentDTO): void;
}