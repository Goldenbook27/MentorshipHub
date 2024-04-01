import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
import goalRouter from '../../src/routes/routes.js'
dotenv.config()

const MONGO_URL=process.env.MONGO_URL
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Connected to Database")
}).catch((error)=>{
    console.log(error.message)
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/goal',goalRouter)

app.listen(8000,(req,res)=>{
    console.log("Server is listening to port 8000")
})