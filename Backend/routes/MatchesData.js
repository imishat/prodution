const express = require('express');
const GroupstageModel = require('../models/GroupstageModel');
const router = express.Router();
const MatchesDataModel =require("../models/MatchesData");
const MatchModel =require("../models/MatchModel");
const Tournamentmodel = require('../models/Tournamentmodel');
const Tournament = require("../models/Tournamentmodel")
const FilteredTeamModel = require("../models/FilteredTeamModel")
MatchModel.find({}, async (err, matches) => {
  if (err) {
    console.error(err);
    return;
  }

  // Loop through all matches and create MatchesData documents
  for (let match of matches) {
    try {
      const matchExists = await MatchesDataModel.exists({ matchID: match._id });

      if (matchExists) {
        console.log("MatchesData document for match with ID ${match._id} already exists. Skipping...");
        continue;
      }

      const matchesData = new MatchesDataModel({
        matchID: match._id
      });

      // Save the MatchesData document to the database
      await matchesData.save();

      console.log("Created MatchesData document for match with ID ${match._id}");
    } catch (err) {
      console.error(err);
    }
  }
});
MatchModel.find({}, async (err, matches) => {
  if (err) {
    console.error(err);
    return;
  }

  // Loop through all matches and create MatchesData documents
  for (let match of matches) {
    try {
      const matchData = await MatchesDataModel.findOne({ matchID: match._id });

      if (!matchData) {
        console.log(`MatchesData document for match with ID ${match._id} does not exist. Skipping...`);
        continue;
      } else if (matchData.match) {
        console.log(`Match data for match with ID ${match._id} already exists. Skipping...`);
        continue;
      }

      // Find the corresponding match data from MatchModel
      const matchModelData = await MatchModel.findById(match._id);

      // Update the MatchesDataModel document with the match data
      await MatchesDataModel.updateOne({ matchID: match._id }, { $set: { match: matchModelData } });

      console.log(`Match data for match with ID ${match._id} updated successfully!`);
    } catch (err) {
      console.error(err);
    }
  }
});

MatchesDataModel.find({}, async (err, matchesData) => {
  if (err) {
    console.error(err);
    return;
  }

  // Loop through all MatchesData documents and update their group data if applicable
  for (let matchData of matchesData) {
    try {
      // Check if the group data has already been set
      if (matchData.Group) {
        console.log(`Group data for match with ID ${matchData.matchID} already exists. Skipping...`);
        continue;
       }

      // Get the group ID from the MatchData model
      const groupID = matchData.match.group_id;

      // Find the corresponding group data from the GroupStageModel
      const groupData = await GroupstageModel.findById(groupID);
      console.log(groupData)
      // If the group data exists, update the MatchesDataModel document with it
      if (groupData) {
        await MatchesDataModel.updateOne({ matchID: matchData.matchID }, { $set: { Group: groupData } });

        console.log(`Group data for match with ID ${matchData.matchID} updated successfully!`);
      } else {
        console.log(`Group data for match with ID ${matchData.matchID} not found. Skipping...`);
      }
    } catch (err) {
      console.error(err);
    }
  }
});
MatchesDataModel.find({}, async (err, matchesData) => {
  if (err) {
    console.error(err);
    return;
  }

  // Loop through all MatchesData documents and update their group data if applicable
  for (let matchData of matchesData) {
    try {
      // Check if the group data has already been set
      if (matchData.Tournament) {
        console.log(`Tournament data for match with ID ${matchData.matchID} already exists. Skipping...`);
        continue;
      }

      // Get the group ID from the MatchData model
      const TournamentID = matchData.Group.tournament_id;

      // Find the corresponding group data from the GroupStageModel
      const TournamentData = await Tournamentmodel.findById(TournamentID);
      console.log(TournamentData)
      // If the group data exists, update the MatchesDataModel document with it
      if (TournamentData) {
        await MatchesDataModel.updateOne({ matchID: matchData.matchID }, { $set: { Tournament: TournamentData } });

        console.log(`Tournament data for match with ID ${matchData.matchID} updated successfully!`);
      } else {
        console.log(`Tournament data for match with ID ${matchData.matchID} not found. Skipping...`);
      }
    } catch (err) {
      console.error(err);
    }
  }
});



MatchesDataModel.find({}, async (err, matches) => {
  if (err) {
    console.error(err);
    return;
  }

  // Loop through each match
  for (let match of matches) {
    // Find the corresponding data in FilteredTeamModel using the match ID
    const filteredData = await FilteredTeamModel.findOne({ matchId: match.matchID });
    console.log(filteredData,"hero")
    // If filteredData exists, update the value field in matchesDataModel with the filtered data
    if (filteredData) {
      await MatchesDataModel.updateOne(
        { matchID: match.matchId },
        { $set: { value: filteredData } }
      );
    }
  }
});

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