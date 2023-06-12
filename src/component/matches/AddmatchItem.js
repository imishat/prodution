import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MatchContext from '../../context/Matchcontext/MatchContext';

export default function AddmatchItem(props) {
  console.log(props.Match);
  const context = useContext(MatchContext)
  const {deleteMatch}=context
  return (
    <div>
      <div style={{ margin:"5px 20px", backgroundColor:"grey", borderRadius:"10px", width:"70vw",display:"flex",justifyContent:"flex-start"}}>
      <Link style={{color:"white"}} to={`/tally/${props.Match.id}`} >
        <h4 style={{margin:"10px 10px"}}>MatchNo.{props.Match.match_no}---Map:{props.Match.map}---Time:{props.Match.time}</h4>
 </Link>
        <button style={{margin:"10px",marginLeft:"200px"}} onClick={()=>{deleteMatch(props.Match._id)}}  ><DeleteIcon/></button>
        <button style={{margin:"10px",}}> <EditIcon/></button>
        
    </div>
    </div>
  )
}
