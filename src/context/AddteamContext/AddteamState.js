import React from "react";
import AddteamContext from "./AddteamContext";
import { useState } from "react";

const AddteamState =(props)=>{
  const port = "http://localhost:5000";
  const IntialAddteam =[    ]
  
  const [Addteam, setAddteam] = useState(IntialAddteam)

  //Fetch all team
      const getTeams = async () => {
        // ("this is it")
    
        const response = await fetch(`${port}/api/teams/fetchallteams`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setAddteam(json)
        
      };
      //Add team 
      const addTeam = async (teamName,teamTag,teamLogo,player_1,player_1photo,player_2,player_2photo,player_3,player_3photo,player_4,player_4photo,player_5,player_5photo ) => {
        // ("this is it")
       
        const response = await fetch(`${port}/api/teams/createteam`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({teamName,teamTag,teamLogo,"player_1":{"name":player_1,"photo":player_1photo},"player_2":{"name":player_2,"photo":player_2photo},"player_3":{"name":player_3,"photo":player_3photo},"player_4":{"name":player_4,"photo":player_4photo},"player_5":{"name":player_5,"photo":player_5photo}}), // body data type must match "Content-Type" header
        });
        const team = {
          _id: "63c8f3950fbc44671c55049e",
    teamName: teamName,
    teamTag: teamTag,
    teamLogo: teamLogo,
    "player_1":{"name":player_1,"photo":player_1photo},
    "player_2":{"name":player_2,"photo":player_2photo},
    "player_3":{"name":player_3,"photo":player_3photo},
    "player_4":{"name":player_4,"photo":player_4photo},
    "player_5":{"name":player_5,"photo":player_5photo},
    
    "__v": 0
        };
        setAddteam(Addteam.concat(team));
      };
      //delete team 
      const deleteTeam = async (id) => {
        (id)
        ("delete the node with id", id);
        const newTeam = Addteam.filter((team) => {
          return team._id !== id;
        });
        setAddteam(newTeam);
        const response = await fetch(`${port}/api/teams/deleteteam/${id}`, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
      
        });
      };
      return (
        <AddteamContext.Provider
          value={{
            Addteam,
            addTeam,
            deleteTeam,
            getTeams,
          }}
        >
          {props.children}
        </AddteamContext.Provider>
      );

}
export default AddteamState;