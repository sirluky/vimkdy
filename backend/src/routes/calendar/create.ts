import {Request, Response} from "express";

export function createCalendar(req: Request, res: Response): any {
    return res.json({status: "success", message: "create"});
}
