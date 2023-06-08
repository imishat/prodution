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
  const teamCollection = client.db("CricketDB").collection("teams");

  try {
    app.post("/createTeam", async (req, res) => {
      const team = req.body;
      const result = await teamCollection.insertOne(team);
      res.send(result);
    });

   
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