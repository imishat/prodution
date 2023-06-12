import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GroupstageContext from '../../context/GroupstageContext/GroupstageContext';

export const GroupstageItem=(props)=> {
    const context = useContext(GroupstageContext)
    const{deleteGroup}=context
 
  return (
    <div style={{ margin:"5px 20px", backgroundColor:"grey", borderRadius:"10px", width:"70vw",display:"flex",justifyContent:"flex-start"}}>
      <Link style={{color:"white"}} to={`/match/${props.Groups._id}`} >
        <h4 style={{margin:"10px 10px"}}>{props.Groups.title}</h4>
 </Link>
        <button style={{margin:"10px",marginLeft:"200px"}} onClick={()=>{deleteGroup(props.Groups._id)}}  ><DeleteIcon/></button>
        <button style={{margin:"10px",}}> <EditIcon/></button>
        
    </div>
   
  )
}