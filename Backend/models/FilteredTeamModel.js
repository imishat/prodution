const mongoose = require("mongoose");
const { Schema } = mongoose;
const { number } = require("prop-types");
const PlayerSchema = new Schema({
  _id :{
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  status:{
    type: Boolean,
    default: false,
  },
  kills:{
    type:Number,
    default: 0,
  }


});

const Team = new mongoose.Schema({
  _id :{
    type: String,
    require: true,
  },
  teamName: {
    type: String,
    require: true,
  },
  teamTag: {
    type: String,
    require: true,
  },
  teamLogo: {
    type: String,
    require: true,
  },
  totalkills:{
    type: Number,
    default: 0,
  },
  totalpoints:{
    type: Number,
    default: 0,
  },
  rankpoint:{
    type: Number,
    default: 0,
  },
  position:{
    type: Number,
    default:0,
  },
  player_1: {
    type: PlayerSchema,
  },
  player_2: {
    type: PlayerSchema,
  },
  player_3: {
    type: PlayerSchema,
  },
  player_4: {
    type: PlayerSchema,
  },
  player_5: {
    type: PlayerSchema,
  },
  _v:{
   type:Number 
  }
  });

const FilteredTeamModel = new mongoose.Schema({
  matchId: {
    type: String,
    required: true
  },
  value: [Team],
});

const Data = mongoose.model("FilteredTeam", FilteredTeamModel);

module.exports = Data;