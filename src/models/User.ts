import {  model, Schema } from "mongoose";

interface IUSer extends Document{
    fname:string;
    lName:string;
    email:string;
    password:string;
}


const UserSchema = new Schema({

    fName:{
        type:String,
        required:true,
    },

    lName:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    }



});

export const User = model<IUSer>("User", UserSchema);