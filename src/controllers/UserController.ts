import { Request, RequestHandler, Response } from "express";
import { User } from "../models/User";


export default class UserController{

    saveUser:RequestHandler = async (
        req:Request,
        res:Response
        ):Promise<Response> => {

       try{
           let user = new User(req.body);
           let saveUser = await user.save();

           return res.status(200).json({message:"Successfully saved..!", responseData :saveUser});

       }catch(error:unknown){
           if(error instanceof Error){
               return res.status(500).json({message:error});


           }else{
            return res.status(500).json({message:"unknwon error"});
           }


       }
    };

}