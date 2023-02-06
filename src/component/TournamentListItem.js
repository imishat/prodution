import React from 'react'
import Controls from './Controls'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import TournamentContext from '../context/TournamentContext'
import { useContext } from 'react';

export const TournamentListItem=({tournaments})=> {
  const context= useContext(TournamentContext)
  const {deleteTournament}=context
  
  return (
    <div style={{ margin:"5px 20px", backgroundColor:"grey", borderRadius:"10px", width:"70vw",display:"flex",justifyContent:"flex-start"}}>
      <Link style={{color:"white"}} to={`/groupstage/${tournaments._id}`} >
        <h4 style={{margin:"10px 10px"}}>{tournaments.name}</h4>
        {/* <div><img src={tournaments.url}  /></div> */}
 </Link>
        <button style={{margin:"10px",marginLeft:"200px"}} onClick={()=>{deleteTournament(tournaments._id)}}><DeleteIcon/></button>
        <button style={{margin:"10px",}}> <EditIcon/></button>
        
    </div>
   
  )
}
