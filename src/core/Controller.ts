import { Request, Response } from "express";
import { Presenter } from "@core/Presenter";

abstract class Controller {
    public abstract handle(request: Request, response: Response): Response | Promise<Response>;
}

export {
    Controller
}