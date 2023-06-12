const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  const tournamentCollection = client.db("CricketDB").collection("tournaments");
  const teamCollection = client.db("CricketDB").collection("teams");
  const groupStageCollection = client.db("CricketDB").collection("groups");
  const matchStageCollection = client.db("CricketDB").collection("matches");
  const selectedTeamsCollection = client
    .db("CricketDB")
    .collection("selectedteams");
  const filterTeamCollection = client.db("CricketDB").collection("filterTeams");
  const pointInfoCollection = client.db("CricketDB").collection("pointInfo");

  try {
    // create turnament
    app.post("/api/tournament", async (req, res) => {
      const tournament = req.body;
      const result = await tournamentCollection.insertOne(tournament);
      res.send(result);
    });
    // get turnament
    app.get("/api/tournament/fetchalltournament", async (req, res) => {
      const result = await tournamentCollection.find({}).toArray();
      res.send(result);
    });

    // Team create route
    app.post("/api/teams/createTeams", async (req, res) => {
      const team = req.body;
      const result = await teamCollection.insertOne(team);
      res.send(result);
    });
    // get all teams route
    app.get("/api/teams/fetchallteams", async (req, res) => {
      const result = await teamCollection.find({}).toArray();
      res.send(result);
    });

    // group stage create route
    app.post("/api/groupstage/creategroupstage", async (req, res) => {
      const groupStage = req.body;
      const result = await groupStageCollection.insertOne(groupStage);
      res.send(result);
    });
    //get  group stage route
    app.get(`/api/groupstage/fetchallgroups/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { tournament_id: id };
      const result = await groupStageCollection.find(query).toArray();
      console.log(result);
      res.send(result);
    });

    // create match route
    // group stage create route
    app.post("/api/match/creatematch", async (req, res) => {
      const matchStage = req.body;
      const result = await matchStageCollection.insertOne(matchStage);
      res.send(result);
    });

    //get match route
    app.get(`/api/match/fetchallmatch/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { group_id: id };
      const result = await matchStageCollection.find(query).toArray();
      res.send(result);
    });

    // post selected team

    app.post("/api/filteredteam/selectedteam", async (req, res) => {
      const { matchId, team } = req.body;
      // get old team
      const oldTeam = await selectedTeamsCollection.findOne({ matchId });

      if (oldTeam?.matchId) {
        const result = await selectedTeamsCollection.updateOne(
          { matchId },
          { $set: { team } },
          { new: true, upsert: true }
        );
        res.send(result);
      } else {
        const result = await selectedTeamsCollection.insertOne({
          matchId,
          team,
        });
        res.send(result);
      }
    });

    //get selected match route
    app.get(`/api/filteredteam/selectedteamfetch`, async (req, res) => {
      const result = await selectedTeamsCollection.find({}).toArray();
      res.send(result);
    });

    app.get("/delete", async (req, res) => {
      await selectedTeamsCollection.deleteMany({});
    });

    // post selected team

    app.post("/api/filteredteam/storefilterteam", async (req, res) => {
      const matchId = req.body.matchId;
      const value = req.body.value;

      const result = await filterTeamCollection.updateOne(
        { matchId: matchId },
        { $set: {value: value} },
        { upsert: true }
      );
      res.send(result);
    });

    //get selected match route
    app.get(`/api/filteredteam/fetchFilterteam/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { matchId: id };
      const result = await filterTeamCollection.find(query).toArray();
      res.send(result);
    });

    // get point team
    app.post(`/api/filteredteam/teaminfo`, async (req, res) => {
      const info = req.body;
      const oldInfo = await pointInfoCollection.findOne({matchId:info.matchId,teamId:info.teamId})
      console.log(oldInfo);
      if (oldInfo) {
        const result = await pointInfoCollection.updateOne(
          { teamId:info.teamId },
          { $set:  info  },
          { new: true, upsert: true }
        );
        res.send(result);
      } else {
        const result = await pointInfoCollection.insertOne(info );
        res.send(result);
      }
    });

    // get point team
    app.get(`/api/filteredteam/getpoints/:id`,async(req,res)=>{
      const matchId = req.params.id
      const teamId = req.query.teamId
      const query   = {matchId:matchId,teamId:teamId}
      const result = await pointInfoCollection.findOne(query)
      res.send(result);
    })
    // get point team
    // app.get(`api/filteredteam/fetchFilterteam/:id`,async(req,res)=>{
    //   console.log(req.params.id);
    // })
    // End
  } finally {
  }
};

run().catch((err) => {
  console.error(err);
});

app.listen(port, () => {
  console.log("port running on port:", port);
});
