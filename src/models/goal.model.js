import mongoose from 'mongoose'

const goalSchema = new mongoose.Schema({
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'User'
    // },
    title:{
        type: String,
        required:[true,'Title is required']
    },
    text:{
        type: String,
        required:[true,'Text is required']
    },
},{timestamps:true})
export const Goal = mongoose.model("Goal",goalSchema)