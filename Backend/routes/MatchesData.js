const express = require('express');
const router = express.Router();
const MatchesDataModel =require("../models/MatchesData");

router.post('/creatematchdatas',(req,res)=>{
  const matchdatas = MatchesDataModel(req.body)
  matchdatas.save()
  res.send(matchdatas)
  }
)
router.get('/fetchallgroups/:id',async (req,res)=>{
  const group = await GroupstageModel.find({tournament_id:req.params.id})
  res.json(group)
  }
  )
  router.delete('/deletegroup/:id',async (req,res)=>{

    let addgroup = await GroupstageModel.findByIdAndDelete(req.params.id)
    res.json("Team has beeen deleted")
}
  )
module.exports =router