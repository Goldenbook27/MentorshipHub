import express from 'express'
const router = express.Router()
import { Comment } from '../models/comment.model'

router.post('/:id',async(req,res)=>{
    const newComment = new Comment({
        question_id:req.body.params.id,
        comment:req.body.comment,
        user:req.body.user
    })
    await newComment.save().then((doc)=>{
        res.status(201).send({
            status:true,
            data:doc
        })
    }).catch((err)=>{
        res.status(401).send({
            status:false,
            message:"Error adding answer"
        })
    })
})

export default router