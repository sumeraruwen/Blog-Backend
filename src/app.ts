import {config} from "dotenv";
config();

import express from "express";
import db from "mongoose";

const app = express();


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