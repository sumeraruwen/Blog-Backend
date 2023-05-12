import { Request, RequestHandler, Response } from "express";


export default class UserController{

    saveUser:RequestHandler = async (
        req:Request,
        res:Response
        ):Promise<Response> => {
        return res;
    }

}