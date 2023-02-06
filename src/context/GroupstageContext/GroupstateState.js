import React from "react";
import GroupstageContext from "./GroupstageContext";
import { useState } from "react";


const GroupstageState =(props)=>{
    const port = "http://localhost:5000";
    const intialgroup=[]
    const [Groups, setGroups] = useState(intialgroup)
    const getGroup = async (id) => {
        // console.log("this is it")
    
        const response = await fetch(`${port}/api/groupstage/fetchallgroups/${id}`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setGroups(json)
        
      };
    const addGroup = async (tournament_id,title, total_matches) => {
        // console.log("this is it")
    
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
          _id: json._id,
          tournament_id:tournament_id,
          title: title,
            total_matches: total_matches,
          __v: 0,
        };
        setGroups(Groups.concat(group));
      };
      const deleteGroup = async (id) => {
        console.log(id)
        console.log("delete the node with id", id);
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