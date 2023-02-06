const express = require('express');
const router = express.Router();
const FilteredTeamModel = require("../models/FilteredTeamModel")

router.post('/storefilterteam',(req,res)=>{
    const FilteredTeam = FilteredTeamModel(req.body)
    FilteredTeam.save()
    res.send(FilteredTeam)
    }
  )

  router.get('/fetchFilterteam/:id',async (req,res)=>{
    const group = await FilteredTeamModel.find({matchId:req.params.id})
    res.json(group)
    }
  )
module.exports =router