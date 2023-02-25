const mongoose = require("mongoose");
const { string } = require("prop-types");
const { Schema } = mongoose;



const GroupstageModel = new Schema({
    tournament_id: {
      type:String,
    },
    title:{
      type:String,
      require:true,
    },
    total_matches:{
      type: Number,
      require:true,
    }
  });
  const Tournamentmodel = new Schema({

    name: {
      type:String,
      require:true,
    },
    url: {
      type:String,
      require:true
    },
    
  });

  const MatchModel = new Schema({
    group_id: {
      type:String,
    },
    match_no:{
      type:Number,
      require:true,
    },
    time:{
      type: String,
      require:true,
    },
    map:{
     type: String,
     require:true,
    }
  });
  const PlayerSchema = new Schema({
    id:{
      type:String,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    Kills:{
      type: Number
  },
  Status:{
    type: Boolean
  },
  NoOfMatch:{
    type:Number
  }
});
const TeamModel = new Schema({
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
});
const AllMatch = new mongoose.Schema({
   Team: TeamModel,
   
  });

const MatchesData = new mongoose.Schema({
  match:{
    type:MatchModel
},
Tournament:{
    type:Tournamentmodel
},
Group:{
    type:GroupstageModel
},
  value: [AllMatch],
});

const Data = mongoose.model("MatchesData", MatchesData);

module.exports = Data;