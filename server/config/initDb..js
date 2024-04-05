import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()


const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{
            console.log("Connected to Database")
        })
        app.on("error",()=>{
            console.log("ERROR: ",error)
            throw error
        })
        

    }  catch(error){
        console.error("ERROR: ",error)
        process.exit(1)
    }
    }  

export default connectDB

