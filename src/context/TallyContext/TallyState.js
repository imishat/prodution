import React from "react";
import TallyContext from "./TallyContext";
import { useState } from "react";

const TallyState =(props)=>{
  const port = "http://localhost:5000";
  const [teams, setTeams] = useState([]);
  const [totalkill, settotalkill] = useState([])
  const [SelectedTeam, setSelectedTeam] = useState([])
  const [FilteredTeam, setFilteredTeam] = useState([])
  const SelectTeams=(Teams)=>{
    setSelectedTeam(Teams)
    // console.log(SelectedTeam)
  }
  const getfilter = async (id) => {
    // console.log("this is it")

    const response = await fetch(`${port}/api/filteredteam/fetchFilterteam/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("back",json)
    setFilteredTeam(json)
     console.log("pro",FilteredTeam)
    
    
  };
  const FilteringTeam= (Teams)=>{
    //  setFilteredTeam(Teams)
    // console.log(SelectedTeam)
  }
  const DeadState = (team, player1Status, player2Status, player3Status, player4Status) => {
    let index = teams.indexOf(teams.filter(t => t.team === team)[0]);
    if (index !== -1) {
      // Update existing team
      setTeams((prevTeams) => {
        prevTeams[index] = { team, player1Status, player2Status, player3Status, player4Status };
        return [...prevTeams];
      });
    } else {
      // Add new team
      setTeams((prevTeams) => [...prevTeams, { team, player1Status, player2Status, player3Status, player4Status }]);
    }
  };
  const addFilterteam = async (matchId,value) => {
      // console.log("this is it")
    // console.log(value,"value")
    const response = await fetch(`${port}/api/filteredteam/storefilterteam`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({matchId,value }), // body data type must match "Content-Type" header
    });
  };
  const KillState = (team, kill) => {
    let index = totalkill.indexOf(totalkill.filter(t => t.team === team)[0]);
    if (index !== -1) {
      // Update existing team
      settotalkill((prevTeams) => {
        prevTeams[index] = { team, kill };
        return [...prevTeams];
      });
    } else {
      // Add new team
      settotalkill((prevTeams) => [...prevTeams, { team,kill }]);
    }
  };
      return (
        <TallyContext.Provider
          value={{
            DeadState,
           teams,
           KillState,
           totalkill,
           addFilterteam,
           SelectedTeam,
           SelectTeams,
           FilteringTeam,
           FilteredTeam,
           getfilter

          }}
        >
          {props.children}
        </TallyContext.Provider>
      );

}
export default TallyState;