import express from "express"
import mongoose from "mongoose"
import connectDB from "../server/config/initDb..js"
import {app} from "./server.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR:  ",error);
        throw error;
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at Port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("MONGO db connection failed!!! ",err)
})
