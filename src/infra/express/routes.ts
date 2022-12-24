import { Router } from "express";
import { CreateDirectoryMain } from "src/main/directory/CreateDirectoryMain";
import { CreateDocumentMain } from "src/main/document/CreateDocumentMain";
import { EditDocumentMain } from "src/main/document/EditDocumentMain";
import { GetDocumentMain } from "src/main/document/GetDocumentsMain";

const routes = Router();

routes.post("/document", (request, response) => CreateDocumentMain.exec(request, response));
routes.get("/document/:parentId", (request, response) => GetDocumentMain.exec(request, response));
routes.put("/document/:documentId", (request, response) => EditDocumentMain.exec(request, response));


routes.post("/directory", (request, response) => CreateDirectoryMain.exec(request, response));

export {
    routes
}