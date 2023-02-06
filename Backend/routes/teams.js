const express = require('express');
const router = express.Router();
const Teammodel =require("../models/TeamModel");

router.post('/createteam',(req,res)=>{
  const teammodel = Teammodel(req.body)
  teammodel.save()
  res.send(teammodel)
  }
)
router.get('/fetchallteams',async (req,res)=>{
  const teams = await Teammodel.find()
  res.json(teams)
  }
  )

  router.delete('/deleteteam/:id',async (req,res)=>{

    let addteam = await Teammodel.findByIdAndDelete(req.params.id)
    res.json("Team has beeen deleted")
}
)
module.exports =router
module.exports =router