import {Request, Response} from "express";

export function defaultApi(req: Request, res: Response): any {
    return res.json({status: "success", message: "Welcome to API Servic"});
}
