import { Router } from "express";
import { CreateDocumentMain } from "src/main/document/CreateDocumentMain";
import { GetDocumentMain } from "src/main/document/GetDocumentsMain";

const routes = Router();

routes.post("/document", (request, response) => CreateDocumentMain.exec(request, response));
routes.get("/document/:parentId", (request, response) => GetDocumentMain.exec(request, response));

export {
    routes
}