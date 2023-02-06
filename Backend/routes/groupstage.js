const express = require('express');
const router = express.Router();
const GroupstageModel =require("../models/GroupstageModel");

router.post('/creategroupstage',(req,res)=>{
  const groupstage = GroupstageModel(req.body)
  groupstage.save()
  res.send(groupstage)
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