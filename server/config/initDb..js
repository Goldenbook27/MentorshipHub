import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
import goalRouter from '../../src/routes/routes.js'
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
        app.listen(8000,(req,res)=>{
            console.log("Server is listening to port 8000")
        })

    }  catch(error){
        console.error("ERROR: ",error)
        process.exit(1)
    }
    }  

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/goal',goalRouter)

