import axios from "axios";
import React, { useEffect, useState } from "react";
import GroupstageContext from "./GroupstageContext";


const GroupstageState =(props)=>{
    const port = "http://localhost:5000";
    const intialgroup=[]
    const [Groups, setGroups] = useState(intialgroup)
    const [getId,setGetID] = useState('')
    const getGroup = async (id) => {
      setGetID(id)
        
      };

      useEffect(()=>{
        axios.get(`${port}/api/groupstage/fetchallgroups/${getId}`)
        .then(res=>{
          setGroups(res.data)
        })
      },[getId,Groups])
    const addGroup = async (tournament_id,title, total_matches) => {
        console.log(tournament_id)
    
        const response = await fetch(`${port}/api/groupstage/creategroupstage`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({tournament_id,  title, total_matches }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json)
        const group = {
          id: json.insertedId,
          tournament_id:tournament_id,
          title: title,
            total_matches: total_matches,
          __v: 0,
        };
        setGroups(Groups.concat(group));
      };
      const deleteGroup = async (id) => {
        // console.log(id)
        // console.log("delete the node with id", id);
        const newTeam = Groups.filter((team) => {
          return team._id !== id;
        });
        setGroups(newTeam);
        const response = await fetch(`${port}/api/groupstage/deletegroup/${id}`, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
      
        });
      };
    return (
        <GroupstageContext.Provider
          value={{
            Groups,
            addGroup,
            getGroup,
            deleteGroup,
          }}
        >
          {props.children}
        </GroupstageContext.Provider>
      );
}
export default GroupstageState;