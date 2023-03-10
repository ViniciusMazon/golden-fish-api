import { Router } from "express";
import { CreateDirectoryMain } from "src/main/directory/CreateDirectoryMain";
import { DeleteDirectoryMain } from "src/main/directory/DeleteDirectoryMain";
import { EditDirectoryMain } from "src/main/directory/EditDirectoryMain";
import { GetDirectoryMain } from "src/main/directory/GetDirectoryMain";
import { CreateDocumentMain } from "src/main/document/CreateDocumentMain";
import { DeleteDocumentMain } from "src/main/document/DeleteDocumentMain";
import { EditDocumentMain } from "src/main/document/EditDocumentMain";
import { GetDocumentMain } from "src/main/document/GetDocumentsMain";
import { SearchDocumentMain } from "src/main/document/SearchDocumentMain";
import { CreateSettingsMain } from "src/main/settings/CreateSettingsMain";
import { EditSettingsMain } from "src/main/settings/EditSettingsMain";
import { GetSettingsMain } from "src/main/settings/GetSettingsMain";
import { CreateUserMain } from "src/main/user/CreateUserMain";
import { EditUserMain } from "src/main/user/EditUserMain";
import { GetUserMain } from "src/main/user/GetUserMain";

const routes = Router();

routes.post("/document", (request, response) => CreateDocumentMain.exec(request, response));
routes.get("/document/:parentId", (request, response) => GetDocumentMain.exec(request, response));
routes.put("/document/:documentId", (request, response) => EditDocumentMain.exec(request, response));
routes.delete("/document/:documentId", (request, response) => DeleteDocumentMain.exec(request, response));

routes.get("/document/search/:title", (request, response) => SearchDocumentMain.exec(request, response));

routes.post("/directory", (request, response) => CreateDirectoryMain.exec(request, response));
routes.get("/directory/:parentId", (request, response) => GetDirectoryMain.exec(request, response));
routes.put("/directory/:directoryId", (request, response) => EditDirectoryMain.exec(request, response));
routes.delete("/directory/:directoryId", (request, response) => DeleteDirectoryMain.exec(request, response));

routes.post("/settings", (request, response) => CreateSettingsMain.exec(request, response));
routes.get("/settings/:userId", (request, response) => GetSettingsMain.exec(request, response));
routes.put("/settings/:settingsId", (request, response) => EditSettingsMain.exec(request, response));

routes.get("/user/:userId", (request, response) => GetUserMain.exec(request, response));
routes.post("/user", (request, response) => CreateUserMain.exec(request, response));
routes.put("/user/:userId", (request, response) => EditUserMain.exec(request, response));

export {
    routes
}