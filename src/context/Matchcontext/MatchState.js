import React from "react";
import MatchContext from "./MatchContext";
import { useState } from "react";

const MatchState = (props) => {
  const port = "http://localhost:5000";
const intialmatch =[ ]
  const [Match, setMatch] = useState(intialmatch)
  const getMatch = async (id) => {
    // ("this is it")

    const response = await fetch(`${port}/api/match/fetchallmatch/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setMatch(json)
    
  };
  const addMatch = async ( group_id,match_no,time,map) => {
    // ("this is it")

    const response = await fetch(`${port}/api/match/creatematch`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ group_id,match_no,time,map}), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    const match = {
      _id: json._id,
      group_id: group_id,
      matchno: match_no,
      time: time,
      map: map,
      "__v": 0
    };
    setMatch(Match.concat(match));
  };
  const deleteMatch = async (id) => {
    const newmatch= Match.filter((match) => {
      return match._id !== id;
    });
    setMatch(newmatch);
    const response = await fetch(`${port}/api/match/deletematch/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
  
    });
  };
  return (
    <MatchContext.Provider
      value={{ Match,
        addMatch,
        deleteMatch,
        getMatch
      }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default MatchState;
