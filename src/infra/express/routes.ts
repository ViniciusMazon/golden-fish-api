import { Router } from "express";
import { CreateDirectoryMain } from "src/main/directory/CreateDirectoryMain";
import { GetDirectoryMain } from "src/main/directory/GetDirectoryMain";
import { CreateDocumentMain } from "src/main/document/CreateDocumentMain";
import { EditDocumentMain } from "src/main/document/EditDocumentMain";
import { GetDocumentMain } from "src/main/document/GetDocumentsMain";

const routes = Router();

routes.post("/document", (request, response) => CreateDocumentMain.exec(request, response));
routes.get("/document/:parentId", (request, response) => GetDocumentMain.exec(request, response));
routes.put("/document/:documentId", (request, response) => EditDocumentMain.exec(request, response));


routes.post("/directory", (request, response) => CreateDirectoryMain.exec(request, response));
routes.get("/directory/:parentId", (request, response) => GetDirectoryMain.exec(request, response));

export {
    routes
}