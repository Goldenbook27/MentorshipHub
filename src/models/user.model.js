import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true,'Username is required']
    },
    name:{
        type:String,
        required: [true,'Name is required']
    },
    email:{
        type:String,
        required: [true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required: [true,'password is required']
    },
    Bio:{
        type:String
        
    },
    
},{timestamps:true})

export const User = mongoose.model("User",userSchema)