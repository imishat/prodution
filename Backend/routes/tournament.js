const { Title } = require("@mui/icons-material");
const express = require("express");
const router = express.Router();
const Tournament = require("../models/Tournamentmodel");

//create tournament
router.post("/", (req, res) => {
    const tournament = Tournament(req.body);
    tournament.save();
    res.send(tournament);
});


//fetch tournament
router.get("/fetchalltournament", async (req, res) => {
    const tourns = await Tournament.find();
    res.json(tourns);
});
//edit tournament
router.put("/updatetournament/:id", async (req, res) => {
    const { name, url } = req.body;

    const newTournament = {};
    if (name) {
        newTournament.name = name;
    }
    if (url) {
        newTournament.url = url;
    }

    let tournament = await Tournament.findByIdAndUpdate(
        req.params.id,
        { $set: newTournament },
        { new: true }
    );
    res.json(tournament);
});
router.delete("/deletetournament/:id", async (req, res) => {
    let tournament = await Tournament.findByIdAndDelete(req.params.id);
    res.json("Tournament has beeen deleted");
});
module.exports = router;
