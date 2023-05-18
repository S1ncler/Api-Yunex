import { Request, Response } from "express";

export const get_reports = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}

export const get_report = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}

export const post_report = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}

export const put_report = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}

export const delete_report = (req: Request, res: Response) => {
    try{
        res.status(200).json({msg: "get usuarios"})
    }
    catch(e){console.log(e);}
}