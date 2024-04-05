import express from 'express'
const router = express.Router()
import { Question } from '../models/questions.model'

router.post('/',async(req,res)=>{
    const newQuestion = new Question({
        title: req.body.title,
        body:req.body.body,
        tags:req.body.tag,
        user:req.body.user
    })

    await newQuestion.save().then((doc)=>{
        res.status(201).send({
            status:true,
            data:doc
        })
    }).catch((err)=>{
        res.status(401).send({
            status:false,
            message:"Error adding question"
        })
    })

})


export default router