import mongoose from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const goalSchema = new mongoose.Schema({
    owner:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    title:{
        type: String,
        required:[true,'Title is required']
    },
    text:{
        type: String,
        required:[true,'Text is required']
    },
},{timestamps:true})

goalSchema.plugin(mongooseAggregatePaginate)

export const Goal = mongoose.model("Goal",goalSchema)