import { Request, Response } from "express";

export const get_reportes = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}