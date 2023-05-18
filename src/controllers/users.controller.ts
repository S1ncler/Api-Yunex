import { Request, Response } from "express";
import {delete_user_service, get_user_service, get_users_service, post_user_service, put_user_service} from "../services/users.service"

export const get_users = async (req: Request, res: Response) => {
    try{
        const response = await get_users_service();
        res.status(200).json({msg: response});
    }
    catch(e){console.log(e);}
}

export const get_user = async ({ params }: Request, res: Response) => {
    try{
        const response = await get_user_service(params.email);
        res.status(200).json({msg: response});
    }
    catch(e){console.log(e);}
}

export const post_user = async ({ body }: Request, res: Response) => {
    try{
        const response = await post_user_service(body);
        res.status(200).json({msg: response});
    }
    catch(e){console.log(e);}
}

export const put_user = async ({ params, body }: Request, res: Response) => {
    try{
        const response = await put_user_service(params.email, body);
        res.status(200).json({msg: response});
    }
    catch(e){console.log(e);}
}

export const delete_user = async ({ params }: Request, res: Response) => {
    try{
        const response = await delete_user_service(params.email);
        res.status(200).json({msg: response});
    }
    catch(e){console.log(e);}
}