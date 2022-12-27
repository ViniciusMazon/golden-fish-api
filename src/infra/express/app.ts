import express from "express";
import cors from "cors";
import { routes } from "@infra/express/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

export {
    app
}