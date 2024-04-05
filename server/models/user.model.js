import mongoose, { Schema } from 'mongoose'
import jwt from "jsonwebtoken"

// const jwt = require('jsonwebtoken');
// const { JsonWebTokenError } = jwt;

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true,'Username is required'],
        unique:true,
        index:true,
        trim:true
    },
    fullName:{
        type:String,
        required: [true,'Name is required'],
        index:true
    },
    avatar:{
        type: String, //cloudinary url
        required:true
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
    goals:{
        type: Schema.Types.ObjectId,
        ref:"Goal"
    },
    interests:{
        type:String,
        required: [true,'interests is required']
    },
    Bio:{
        type:String
        
    },
    refreshToken:{
        type:String
    }
    
    
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.method.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAcessToken = function(){
    jwt.sign(
        {
            _id: this.id,
            email:this.email,
            username:this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this.id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)