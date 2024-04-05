import express from 'express'
const router = express.Router()
import {Goal} from '../models/goal.model.js'

router.post('/',async(req,res)=>{
    try{
        if( !req.body.title || !req.body.text ){
            return res.status(404).send({message:"Please send username, title,text"})
        }
        const newGoal = {
            
            title:req.body.title,
            text:req.body.text
        }
        const goal = new Goal(newGoal);
        await newGoal.save()
        res.status(201).send({ message: "Goal created successfully", goal });
        // const goal = await Goal.create(newGoal)
        // res.send(goal)
    } catch(error){
        console.log(error.message)
    }
})

export default router

