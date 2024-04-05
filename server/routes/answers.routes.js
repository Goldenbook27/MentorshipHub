import express from 'express'
const router = express.Router()
import { Answer } from '../models/answer.model'

router.post('/:id',async(req,res)=>{
    const newAnswer = new Answer({
        question_id:req.params.id,
        answer:req.body.answer,
        user:req.body.user
    })
    await newAnswer.save().then((doc)=>{
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

router.get('/',async(req,res)=>{
    
})

export default router