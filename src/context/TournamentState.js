import React, { useState } from "react";
import TournamentContext from "./TournamentContext";

const TournamentState = (props) => {
  const port = "http://localhost:5000";
  const tournamentInitial = [];
  const [tournaments, settournaments] = useState(tournamentInitial);

  const getTournament = async () => {
    // ("this is it")

    const response = await fetch(`${port}/api/tournament/fetchalltournament`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    settournaments(json)
    
  };

  const addTournament = async (name, url) => {
    // ("this is it")
 
    const response = await fetch(`${port}/api/tournament`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, url}), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    const tournament = {
      _id:   json.insertedId,
      name: name,
      url: url,
      __v: 0,
    };
    settournaments(tournaments.concat(tournament));
  };
  const deleteTournament = async (id) => {
    const newTournament = tournaments.filter((tournament) => {
      return tournament._id !== id;
    });
    settournaments(newTournament);
    const response = await fetch(`${port}/api/tournament/deletetournament/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
  
    });
  };
  const editTournament = async (id, name, url) => {
    const response = await fetch(
      `${port}/api/tournament/updatetournament/${id}`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, url }), // body data type must match "Content-Type" header
      }
    );

    const json = response.json();
    //Logic to Edit

    for (let index = 0; index < tournaments.length; index++) {
      const element = tournaments[index];
      if (element._id === id) {
        element.name = name;
        element.url = url;
      }
    }
  };
  return (
    <TournamentContext.Provider
      value={{
        tournaments,
        settournaments,
        addTournament,
        deleteTournament,
        editTournament,
        getTournament
      }}
    >
      {props.children}
    </TournamentContext.Provider>
  );
};

export default TournamentState;
