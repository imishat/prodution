import { flexbox } from '@mui/system'
import React from 'react'
import IncDecCounter from './IncDecCounter'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import TallyContext from '../../context/TallyContext/TallyContext';

export default function TallyIteam(props) {
  const [player1Status, setPlayer1Status] = useState(false);
  const [player2Status, setPlayer2Status] = useState(false);
  const [player3Status, setPlayer3Status] = useState(false);
  const [player4Status, setPlayer4Status] = useState(false);
  const context = useContext(TallyContext)
  const { DeadState,teams,KillState,totalkill} = context
  const [totalKills, setTotalKills] = useState(
    JSON.parse(localStorage.getItem(`totalKills-${props.teamData._id}`)) || 0
  );

  useEffect(() => {
    console.log(totalkill)
    KillState(props.teamData.teamName,totalKills)
    localStorage.setItem(`totalKills-${props.teamData._id}`, JSON.stringify(totalKills));
  }, [totalKills, props.teamData._id]);
  useEffect(() => {
    console.log(teams)
    DeadState(props.teamData.teamName,player1Status,player2Status,player3Status,player4Status)
  }, [player1Status, player2Status, player3Status, player4Status]);
  function updateTotalKills(newCount) {
    setTotalKills(prevTotal => prevTotal + newCount);
  }
  return (
    <div style={{border:"2px solid red",padding:"10px 40px",display:"flex",flexDirection:"column",width:"400px",borderRadius:"10px",background:"black",color:"white",alignItems:"center",textDecoration:"underline ",margin:"10px 10px"}}>

    <h4>TEAM  NAME: {props.teamData.teamName}</h4>
    <div style={{display:"flex",alignItems:"center",}}>
    {props.teamData.teamTag} {props.teamData.player_1.name} :  <IncDecCounter id={props.teamData.player_1._id} updateTotalKills={updateTotalKills}/> <div class="form-check">
  <input class="form-check-input" checked={player1Status} type="checkbox" value="" onChange={() => setPlayer1Status(!player1Status)} id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Dead</label>
</div>
    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    {props.teamData.teamTag} {props.teamData.player_2.name}:  <IncDecCounter id={props.teamData.player_2._id} updateTotalKills={updateTotalKills}/> <div class="form-check">
  <input class="form-check-input" checked={player2Status} type="checkbox" onChange={() => setPlayer2Status(!player2Status)} value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Dead</label>
</div>
    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    {props.teamData.teamTag} {props.teamData.player_3.name} :  <IncDecCounter id={props.teamData.player_3._id} updateTotalKills={updateTotalKills}/><div class="form-check">
  <input class="form-check-input" checked={player3Status} type="checkbox" onChange={() => setPlayer3Status(!player3Status)} value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Dead</label>
</div>
    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    {props.teamData.teamTag} {props.teamData.player_3.name}  : <IncDecCounter id={props.teamData.player_4._id} updateTotalKills={updateTotalKills}/><div class="form-check">
  <input class="form-check-input" checked={player4Status} type="checkbox" onChange={() => setPlayer4Status(!player4Status)} value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">Dead</label>
</div>
    </div>
     <h4>Total Kills : {totalKills}</h4>
    </div>
  )
}
