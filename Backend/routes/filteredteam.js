const express = require("express");
const router = express.Router();
const FilteredTeamModel = require("../models/FilteredTeamModel");
const SelectedTeam = require("../models/selectedTeam");


router.post("/storefilterteam", async (req, res) => {
  const matchId = req.body.matchId;
  const value = req.body.value;

  const result = await FilteredTeamModel.updateOne(
    { matchId: matchId },
    { value: value },
    { upsert: true }
  );
  res.send(result);
});



router.post("/selectedteam", async (req, res) => {
  const { matchId, team } = req.body;
  const existingTeam = await SelectedTeam.findOneAndUpdate(
    { matchId },
    { team },
    { new: true, upsert: true }
  );
  res.send(existingTeam);
});



router.get("/selectedteamfetch", async (req, res) => {
  const selectedTeams = await SelectedTeam.find({});
  res.send(selectedTeams);
});











router.post("/updatekill", async (req, res) => {
  const { matchId, teamId, playerId, kills, status } = req.body;

  try {
    const doc = await FilteredTeamModel.findOne({
      "matchId": matchId,
      "value._id": teamId,
    });

    if (doc) {
      const team = doc.value.id(teamId);
      const playerField = Object.keys(team.toObject()).find(
        (field) => field.startsWith("player_") && team[field]._id.toString() === playerId
      );

      if (playerField) {
        team[playerField].kills = kills;
        team[playerField].status = status;
        await doc.save();
        res.send(doc);
      } else {
        res.status(404).send("Player not found");
      }
    } else {
      res.status(404).send("Not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


router.post("/teaminfo", async (req, res) => {
  const matchId = req.body.matchId;
  const teamId = req.body.teamId;
  const totalkills = req.body.totalkills;
  const totalpoints = req.body.totalpoints;
  const rankpoint = req.body.rankpoint;
  try {
    // Find the team document with the given matchId
    const team = await FilteredTeamModel.findOne({ matchId: matchId });

    if (team) {
      // Find the team subdocument with the given teamId
      const teamIndex = team.value.findIndex(
        (team) => team._id.toString() === teamId
      );

      if (teamIndex !== -1) {
        const teamSubdoc = team.value[teamIndex];
        
        // Find the player subdocument with the given playerId in the team subdocument
        
        if (teamSubdoc) {
          //   // Update the kills field of the player subdocument
          teamSubdoc.totalkills = totalkills;
          teamSubdoc.totalpoints = totalpoints;
          teamSubdoc.rankpoint = rankpoint;
          // console.log(teamSubdoc, "sw os");

          //   // Mark the team document as modified and save it
          try{

            team.markModified("value");
            const result = await team.save();
            res.send(result);
          }
          catch(err){
            // console.log("error",err)
          }

        } else {
          res.status(404).send("Player not found");
        }
      } else {
        res.status(404).send("Team not found");
      }
    } else {
      res.status(404).send("Match not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.get("/fetchFilterteam/:id", async (req, res) => {
  const group = await FilteredTeamModel.find({ matchId: req.params.id });
  res.json(group);
});
router.get('/getpoints/:matchId/:teamId', async (req, res) => {
  try {
    const match = await FilteredTeamModel.findOne({ matchId: req.params.matchId });
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    const team = match.value.find((team) => team._id.toString() === req.params.teamId);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    const stats = {
      totalkills: team.totalkills,
      totalpoints: team.totalpoints,
      rankpoint: team.rankpoint,
    };

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get("/playerdata/:matchId/:teamId", async (req, res) => {
  const matchId = req.params.matchId;
  const teamId = req.params.teamId;

  try {
    // Find the team document with the given matchId
    const team = await FilteredTeamModel.findOne({ matchId: matchId });

    if (team) {
      // Find the team subdocument with the given teamId
      const teamSubdoc = team.value.find(
        (team) => team._id.toString() === teamId
      );

      if (teamSubdoc) {
        const players = [
          teamSubdoc.player_1,
          teamSubdoc.player_2,
          teamSubdoc.player_3,
          teamSubdoc.player_4,
          teamSubdoc.player_5
        ];

        const playerInfo = players.map((player) => {
          return {
            id: player._id,
            kills: player.kills,
            status: player.status || false
          };
        });

        res.send({ status: "success", playerInfo });
      } else {
        res.status(404).send("Team not found");
      }
    } else {
      res.status(404).send("Match not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
