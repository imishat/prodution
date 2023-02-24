import React from "react";
import TallyContext from "./TallyContext";
import { useState } from "react";
import { useEffect } from "react";

const TallyState =(props)=>{
  const port = "http://localhost:5000";
  const [teams, setTeams] = useState([]);
  const [totalkill, settotalkill] = useState([])
  const [SelectedTeam, setSelectedTeam] = useState([])
  const [FilteredTeam, setFilteredTeam] = useState([])
   const [FilteredTeams, setFilteredTeams] = useState([])
   const [AliveteamCount, setAliveteamCount] = useState([])  
   const [alive, setalive] = useState([])
  const SelectTeams=(Teams)=>{
    setSelectedTeam(Teams)
    // console.log(SelectedTeam)
  }
  const setAlive = (count)=>
  {
    setalive(count)
  }

  const ChangeAliveCount = (teamName) => {
    console.log(teamName,"lisa")
    const teamIndex = AliveteamCount.findIndex(team => team.teamName === teamName);
    if (teamIndex === -1) {
      setAliveteamCount(prevState => [...prevState, { teamName, alive: alive  }]);
      setalive(prevAlive => prevAlive - 1);
    } else {
      setAliveteamCount(prevState => {
        const updatedTeams = [...prevState];
        return updatedTeams; 
      });
    }
    
  };
  
  
  
  const getfilter = async (id) => {
    // console.log("this is it")

    const response = await fetch(`${port}/api/filteredteam/fetchFilterteam/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("hi " ,json)
    setFilteredTeam(json);
    console.log("you " ,FilteredTeam)
    
    
  };
  const FilteringTeam= (Teams)=>{
      setFilteredTeams(Teams)
    console.log(FilteredTeams,"why")
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
           getfilter,
           FilteredTeams,
           AliveteamCount,
           ChangeAliveCount,
           setAlive 

          }}
        >
          {props.children}
        </TallyContext.Provider>
      );

}
export default TallyState;