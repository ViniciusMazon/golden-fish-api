import express from "express";
import { routes } from "@infra/express/routes";

const app = express();

app.use(express.json());
app.use(routes);

export {
    app
}