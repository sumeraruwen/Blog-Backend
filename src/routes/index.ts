import { Router } from "express";
import UserRoutes from "./UserRoutes";


const router : Router = Router();

const baseURL = "/api/v1/";

router.use(`${baseURL}user`, new UserRoutes().getRouter());