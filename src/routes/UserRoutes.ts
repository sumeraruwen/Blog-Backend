import express, { Router } from "express";
import UserController from "../controllers/UserController";


export default class UserRoutes{

    constructor(){
        this.configRoutes();
    }

    private router: Router=express.Router();
    private controller: UserController = new UserController();

    private configRoutes = (): void => {
        this.router.post("/" , this.controller.saveUser);

    }

    public getRouter =(): Router => {
        return this.router;
    }
}

