import { json } from "body-parser";
import {config} from "dotenv";
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import routes from "./routes";

const app = express();

app.use(json());

app.use("/", routes)

app.use((error: Error, req:Request , res:Response) =>{
    res.status(500).json({state:"Error", message:error});
});

db.connect(process.env.MONGO_DB_URL!)
.then(() =>{
    console.log("DB Connected");
    app.listen(process.env.PORT, ()=>{
        console.log("server is running in port 5000");
        
    });
    
})
.catch((error) => {
    console.log("Error");
    
});