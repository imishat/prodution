import React from 'react'
import { useContext } from 'react';
import AddteamContext from "../../context/AddteamContext/AddteamContext";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Dialog, DialogContent,DialogTitle } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function AddteamItem(props) {
  const context =useContext(AddteamContext)
  const {deleteTeam} =context
 
  return (
    <div className='animated-background' style={{width:"400px", margin:"50px 20px",border:"4px solid red", display:"inline-block",borderRadius:"20px" ,padding:"20px 20px",backgroundColor:"	grey"}}>
      <div> 
      <button style={{margin:"10px",marginLeft:"200px"}} onClick={()=>{deleteTeam(props.Addteams._id)}} ><DeleteIcon/></button>
        <button style={{margin:"10px",}}> <EditIcon/></button>
      </div>
    <div style={{display:"flex" ,padding:"20px"}}>

   <img src={`${props.Addteams.teamLogo}`} height={100} width={100} />
   <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
   <h4>Team :{props.Addteams.teamName}</h4>
   <h4>Team Tag: {props.Addteams.teamTag}</h4>
   </div>
    </div>
   <DialogContent dividers >Players:</DialogContent>
    <div style={{margin:"0px auto" ,width:"230px",fontWeight:"600"}}>
      

    <p> <NavigateNextIcon/> Player 1 : {props.Addteams.teamTag} <a target="_blank" href={`${props.Addteams.player_1.photo}`}>{props.Addteams.player_1.name} </a> </p>
    <p> <NavigateNextIcon/> Player 2 : {props.Addteams.teamTag} <a target="_blank" href={`${props.Addteams.player_2.photo}`}> {props.Addteams.player_2.name}</a> </p>
    <p>  <NavigateNextIcon/>Player 3 : {props.Addteams.teamTag} <a  target="_blank" href={`${props.Addteams.player_3.photo}`}>{props.Addteams.player_3.name}</a> </p>
    <p> <NavigateNextIcon/>Player 4 : {props.Addteams.teamTag}<a target="_blank" href={`${props.Addteams.player_4.photo}`}> {props.Addteams.player_4.name}</a> </p>
    <p> <NavigateNextIcon/>Player 5 : {props.Addteams.teamTag} <a target="_blank"  href={``}></a></p>
    </div>

  </div>
  )
}
