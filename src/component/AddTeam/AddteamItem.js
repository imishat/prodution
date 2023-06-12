import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { DialogContent } from '@mui/material';
import React, { useContext } from 'react';
import AddteamContext from "../../context/AddteamContext/AddteamContext";

export default function AddteamItem(props) {
  const team = props.Addteams
  console.log(props.Addteams);
  const context =useContext(AddteamContext)
  const {deleteTeam} =context
 
  return (
    <div className='animated-background' style={{width:"400px", margin:"50px 20px",border:"4px solid red", display:"inline-block",borderRadius:"20px" ,padding:"20px 20px",backgroundColor:"	grey"}}>
      <div> 
      <button style={{margin:"10px",marginLeft:"200px"}} onClick={()=>{deleteTeam(team._id)}} ><DeleteIcon/></button>
        <button style={{margin:"10px",}}> <EditIcon/></button>
      </div>
    <div style={{display:"flex" ,padding:"20px"}}>

   <img src={`${team.teamLogo}`} height={100} width={100} />
   <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
   <h4>Team :{team.teamName}</h4>
   <h4>Team Tag: {team.teamTag}</h4>
   </div>
    </div>
   <DialogContent dividers >Players:</DialogContent>
    <div style={{margin:"0px auto" ,width:"230px",fontWeight:"600"}}>
      

    <p> <NavigateNextIcon/> Player 1 : {team.player_1} <a target="_blank" href={`${team.player_1.photo}`} rel="noreferrer">{team.player_1.name} </a> </p>
    <p> <NavigateNextIcon/> Player 2 : {team.player_1} <a target="_blank" href={`${team.player_2.photo}`} rel="noreferrer"> {team.player_2.name}</a> </p>
    <p>  <NavigateNextIcon/>Player 3 : {team.player_1} <a  target="_blank" href={`${team.player_3.photo}`} rel="noreferrer">{team.player_3.name}</a> </p>
    <p> <NavigateNextIcon/>Player 4 : {team.player_1}<a target="_blank" href={`${team.player_4.photo}`} rel="noreferrer"> {team.player_4.name}</a> </p>
    <p> <NavigateNextIcon/>Player 5 : {team.player_1} <a target="_blank"  href={``} rel="noreferrer"></a></p>
    </div>

  </div>
  )
}
