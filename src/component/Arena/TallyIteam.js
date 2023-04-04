import { flexbox } from '@mui/system'
import React from 'react'
import IncDecCounter from './IncDecCounter'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import TallyContext from '../../context/TallyContext/TallyContext';

export default function TallyIteam(props) {
  let [totalPoints, setTotalPoints] = useState( 0);
  let [isAllDead, setAllDead] = useState(false);
  let pointTable = {
    '1': 10,
    '2': 6,
    '3': 5,
    '4': 4,
    '5': 3,
    '6': 2,
    '7': 1,
    '8': 1,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    '17': 0,
    '18': 0,
    '19': 0,
    '20': 0,
    '21': 0,
    '22': 0,
    '23': 0,
    '24': 0,
    '25': 0,

    "": 0
  }
  let data = []
  let [position, setPosition] = useState('');


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
  const { DeadState, teams, KillState, totalkill, AliveteamCount, ChangeAliveCount, undoAliveCount, updatekillsandpoints } = context
  const [totalKills, setTotalKills] = useState( 0
    // JSON.parse(localStorage.getItem(`totalKills-${props.teamData._id}-${props.m_id}`)) || 0
  );

  function mistakeClick() {

  }



  useEffect(() => {
    // setTotalPoints(totalKills);
    // localStorage.setItem(`totalpoints-${props.teamData._id}-${props.m_id}`, JSON.stringify(totalKills));
  }, [totalKills]);

  useEffect(() => {
    KillState(props.teamData.teamName, totalKills)
    // localStorage.setItem(`totalKills-${props.teamData._id}-${props.m_id}`, JSON.stringify(totalKills));
  }, [totalKills, props.teamData._id]);
  useEffect(() => {
    DeadState(props.teamData.teamName, player1Status, player2Status, player3Status, player4Status)
  }, [player1Status, player2Status, player3Status, player4Status]);
  function updateTotalKills(newCount) {
    setTotalKills(prevTotal => prevTotal + newCount);
  }


  useEffect(() => {
    updatekillsandpoints(props.m_id, props.teamData._id, totalKills, totalPoints)
  }, [totalKills, totalPoints])




  function handleChange(e) {
    // localStorage.setItem(`${props.m_id}-position-${props.teamData._id}`, JSON.stringify(e.target.value));
    setTotalPoints(pointTable[e.target.value])
  }

  return (
    <div style={{ border: "2px solid red", padding: "10px 40px", display: "flex", flexDirection: "column", width: "400px", borderRadius: "10px", background: "black", color: "white", alignItems: "center", textDecoration: "underline ", margin: "10px 10px" }}>
      <div style={{ position: "relative", background: "white", left: "-166px", color: "black", top: "-8px" }} > <div>#<input onChange={handleChange} style={{ height: "28px", width: "48px" }} type="number" size="1"  />  <div>
      </div></div></div>

      <h4>  TEAM  NAME: {props.teamData.teamName}</h4>
      <div style={{ display: "flex", alignItems: "center", }}>
        {props.teamData.teamTag} {props.teamData.player_1.name} :  <IncDecCounter status={player1Status} teamid={props.teamData._id} matchid={props.m_id} id={props.teamData.player_1._id} updateTotalKills={updateTotalKills} /> <div className="form-check">
          <input className="form-check-input" checked={player1Status} type="checkbox" value="" onChange={() => setPlayer1Status(!player1Status)} id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Dead</label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_2.name}:  <IncDecCounter status={player2Status} teamid={props.teamData._id} matchid={props.m_id} id={props.teamData.player_2._id} updateTotalKills={updateTotalKills} /> <div className="form-check">
          <input className="form-check-input" checked={player2Status} type="checkbox" onChange={() => setPlayer2Status(!player2Status)} value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Dead</label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_3.name} :  <IncDecCounter status={player3Status} teamid={props.teamData._id} matchid={props.m_id} id={props.teamData.player_3._id} updateTotalKills={updateTotalKills} /><div className="form-check">
          <input className="form-check-input" checked={player3Status} type="checkbox" onChange={() => setPlayer3Status(!player3Status)} value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Dead</label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_3.name}  : <IncDecCounter status={player4Status} teamid={props.teamData._id} matchid={props.m_id} id={props.teamData.player_4._id} updateTotalKills={updateTotalKills} /><div className="form-check">
          <input className="form-check-input" checked={player4Status} type="checkbox" onChange={() => setPlayer4Status(!player4Status)} value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Dead</label>
        </div>
      </div>
      <h4>Total Kills : {totalKills}</h4>
      <h4> Rank Points : {totalPoints}</h4>
      <h4> Total Points : {totalPoints + totalKills}</h4>
    </div>
  )
}
