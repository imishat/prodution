import { flexbox } from '@mui/system'
import React from 'react'
import IncDecCounter from './IncDecCounter'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import TallyContext from '../../context/TallyContext/TallyContext';

export default function TallyIteam(props) {
 
  const [player1Status, setPlayer1Status] = useState(
    JSON.parse(localStorage.getItem(`player1Status-${props.teamData._id}`)) || false
  );
  const [player2Status, setPlayer2Status] = useState(
    JSON.parse(localStorage.getItem(`player2Status-${props.teamData._id}`)) || false
  );
  const [player3Status, setPlayer3Status] = useState(
    JSON.parse(localStorage.getItem(`player3Status-${props.teamData._id}`)) || false
  );
  const [player4Status, setPlayer4Status] = useState(
    JSON.parse(localStorage.getItem(`player4Status-${props.teamData._id}`)) || false
  );
  useEffect(() => {
    localStorage.setItem(`player1Status-${props.teamData._id}`, JSON.stringify(player1Status));
  }, [player1Status, props.teamData._id]);
  useEffect(() => {
    localStorage.setItem(`player2Status-${props.teamData._id}`, JSON.stringify(player2Status));
  }, [player2Status, props.teamData._id]);
  useEffect(() => {
    localStorage.setItem(`player3Status-${props.teamData._id}`, JSON.stringify(player3Status));
  }, [player3Status, props.teamData._id]);
  useEffect(() => {
    localStorage.setItem(`player4Status-${props.teamData._id}`, JSON.stringify(player4Status));
  }, [player4Status, props.teamData._id]);
  const context = useContext(TallyContext)
  const { DeadState,teams,KillState,totalkill,AliveteamCount,ChangeAliveCount} = context
  const [totalKills, setTotalKills] = useState(
    JSON.parse(localStorage.getItem(`totalKills-${props.teamData._id}`)) || 0
  );

  useEffect(()=>{
    ChangeAliveCount(props.count +1)
  },[]);
  

  
  useEffect(() => {
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
  useEffect(() => {
    if (teams.length > 0) {
      const team = teams.find(team => team.team === props.teamData.teamName);
      console.log(team, "team");
      if (team) {
        const aliveStatus = [        team.player1Status,        team.player2Status,        team.player3Status,        team.player4Status      ];
        const count = aliveStatus.filter(status => status === true).length;
        if (count === 4) {
          ChangeAliveCount(props.teamData.teamName)
          const data = AliveteamCount.find(team => team.teamName === props.teamData.teamName);
          console.log(data,"aliveee")

        }
      }
    }
  }, [teams]);
 
  return (
    <div style={{border:"2px solid red",padding:"10px 40px",display:"flex",flexDirection:"column",width:"400px",borderRadius:"10px",background:"black",color:"white",alignItems:"center",textDecoration:"underline ",margin:"10px 10px"}}>
    <div style={{position:"relative", background:"white",left:"-176px",color:"black",top:"29px"}} > <div id={props.data.alive}></div></div>
    <h4>  TEAM  NAME: {props.teamData.teamName}</h4>
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
