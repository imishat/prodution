const express = require('express');
const router = express.Router();
const FilteredTeamModel = require("../models/FilteredTeamModel")

router.post('/storefilterteam',async (req,res)=>{
  const matchId = req.body.matchId;
  const value = req.body.value;

  const result = await FilteredTeamModel.updateOne({ matchId: matchId }, { value: value }, { upsert: true });
  res.send(result);
    }
  )

  router.get('/fetchFilterteam/:id',async (req,res)=>{
    const group = await FilteredTeamModel.find({matchId:req.params.id})
    res.json(group)
    }
  )
module.exports =router