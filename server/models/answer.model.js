import mongoose from "mongoose"

const answerSchema = new mongoose.Schema({
    question_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Questions"
    },
    answer: String,

    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    },
    User:Object

},{timestamps:true})

export const Answer = mongoose.model("Answer",answerSchema)