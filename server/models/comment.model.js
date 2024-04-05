import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    question_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Questions"
    },
    comment: String,

    
    User:Object

},{timestamps:true})

export const Comment = mongoose.model("Answer",commentSchema)