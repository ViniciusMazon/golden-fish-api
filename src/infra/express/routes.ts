import { Router } from "express";
import { CreateDocumentMain } from "src/main/document/CreateDocumentMain";

const routes = Router();

routes.post("/document", (request, response) => CreateDocumentMain.exec(request, response));

export {
    routes
}