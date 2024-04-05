import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags:[],
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    },
    user:Object

},{timestamps:true})

export const Question = mongoose.model("Question",questionSchema)