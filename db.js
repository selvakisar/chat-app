
import mongoose from "mongoose";

import dotenv from 'dotenv'

dotenv.config()

const {URI}=process.env 

export function dbConnect(){
    try{
        mongoose.connect(URI);
        console.log("Database connected Successfully")
    }
    catch(error){
        console.log("Error connecting DB", error) 
    }
}