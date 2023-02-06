const express = require('express');
const router = express.Router();
const MatchModel =require("../models/MatchModel");

router.post('/creatematch',(req,res)=>{
  const matchmodel = MatchModel(req.body)
  matchmodel.save()
  res.send(matchmodel)
  }
)
router.get('/fetchallmatch/:id',async (req,res)=>{
  const match = await MatchModel.find({group_id:req.params.id})
    res.json(match)
    }
    )
    router.delete('/deletematch/:id',async (req,res)=>{

        let addteam = await MatchModel.findByIdAndDelete(req.params.id)
        res.json("Match has beeen deleted")
    }
    )
module.exports =router