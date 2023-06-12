import React, { useState } from "react";
import TallyContext from "./TallyContext";
// import selectedTeam from "../../../Backend/models/selectedTeam";

const TallyState = (props) => {
  const port = "http://localhost:5000";
  const [teams, setTeams] = useState([]);
  const [totalkill, settotalkill] = useState([]);
  const [SelectedTeam, setSelectedTeam] = useState([]);
  const [FilteredTeam, setFilteredTeam] = useState([]);
  const [FilteredTeams, setFilteredTeams] = useState([]);
  const [AliveteamCount, setAliveteamCount] = useState([]);
  const [alive, setalive] = useState([]);
  const SelectTeams = (team, id) => {
    selectingteam(team, id);
  };
  const setAlive = (count) => {
    setalive(count);
  };

  const undoAliveCount = (teamName) => {
    // only perform this task if team position is most recent
    if (
      AliveteamCount.findIndex((team) => team.teamName === teamName) ===
      AliveteamCount.length - 1
    ) {
      setalive((prevAlive) => prevAlive + 1);
      setAliveteamCount((prevState) =>
        prevState.filter((_, i) => i != prevState.length - 1)
      );
    }
  };

  const ChangeAliveCount = (teamName) => {
    const teamIndex = AliveteamCount.findIndex(
      (team) => team.teamName === teamName
    );
    if (teamIndex === -1) {
      setAliveteamCount((prevState) => [
        ...prevState,
        { teamName, alive: alive },
      ]);
      setalive((prevAlive) => prevAlive - 1);
    }
  };

  const getfilter = async (id) => {
    // ("this is it")
console.log(id,'id');
    const response = await fetch(
      `${port}/api/filteredteam/fetchFilterteam/${id}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setFilteredTeam(json);
    return json;
  };
  const getselectedteam = async () => {
    // ("this is it")

    const response = await fetch(`${port}/api/filteredteam/selectedteamfetch`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setSelectedTeam(json);
  };
  const FilteringTeam = (Teams) => {
    setFilteredTeams(Teams)(FilteredTeams, "why");
  };
  const DeadState = (
    team,
    player1Status,
    player2Status,
    player3Status,
    player4Status
  ) => {
    let index = teams.indexOf(teams.filter((t) => t.team === team)[0]);
    if (index !== -1) {
      // Update existing team
      setTeams((prevTeams) => {
        prevTeams[index] = {
          team,
          player1Status,
          player2Status,
          player3Status,
          player4Status,
        };
        return [...prevTeams];
      });
    } else {
      // Add new team
      setTeams((prevTeams) => [
        ...prevTeams,
        { team, player1Status, player2Status, player3Status, player4Status },
      ]);
    }
  };
  const addFilterteam = async (matchId, value) => {
    // ("this is it")
    // (value,"value")
    console.log(matchId, value, "now");
    const response = await fetch(`${port}/api/filteredteam/storefilterteam`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchId, value }), // body data type must match "Content-Type" header
    });
  };

  const selectingteam = async (team, matchId) => {
    // ("this is it")
    // (value,"value")
    console.log(team);
    const response = await fetch(`${port}/api/filteredteam/selectedteam`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchId, team }), // body data type must match "Content-Type" header
    });
    getselectedteam();
  };

  const KillState = (team, kill) => {
    let index = totalkill.indexOf(totalkill.filter((t) => t.team === team)[0]);
    if (index !== -1) {
      // Update existing team
      settotalkill((prevTeams) => {
        prevTeams[index] = { team, kill };
        return [...prevTeams];
      });
    } else {
      // Add new team
      settotalkill((prevTeams) => [...prevTeams, { team, kill }]);
    }
  };
  const updatePlayersKill = async (
    matchId,
    teamId,
    playerId,
    kills,
    status
  ) => {
    try {
      const response = await fetch(`${port}/api/filteredteam/updatekill`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ matchId, teamId, playerId, kills, status }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
    } catch (err) {
      console.error("Error updating players kill:", err.message);
    }
  };

  const updatekillsandpoints = async (
    matchId,
    teamId,
    totalkills,
    totalpoints,
    match_id,
    rankpoint,
    player1Status,
    player2Status,
    player3Status,
    player4Status,
    player1Kills,
    player2Kills,
    player3Kills,
    player4Kills,
    rank
  ) => {
    // ("this is it")
console.log(matchId);
    const response = await fetch(`${port}/api/filteredteam/teaminfo`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matchId,
        teamId,
        match_id,
        totalkills,
        totalpoints,
        rankpoint,
        player1Status,
        player2Status,
        player3Status,
        player4Status,
        player1Kills,
        player2Kills,
        player3Kills,
        player4Kills,
        rank
      }), // body data type must match "Content-Type" header
    });
    
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
        undoAliveCount,
        setAlive,
        updatekillsandpoints,
        updatePlayersKill,
        getselectedteam,
      }}
    >
      {props.children}
    </TallyContext.Provider>
  );
};
export default TallyState;
