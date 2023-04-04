import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import TallyContext from '../../context/TallyContext/TallyContext';


export default function IncDecCounter(props) {
  const { id, updateTotalKills,matchid,teamid ,status} = props;
  const [count, setCount] = useState(0
    // Number(localStorage.getItem(`count_${id}_${matchid}`)) || 0
  );// useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  const context = useContext(TallyContext)
  const {  updatePlayersKill} = context
  useEffect(() => {
    // localStorage.setItem(`count_${id}_${matchid}`, count);
  }, [count, id]);

  useEffect(() => {
    // console.log("update players",matchid,teamid,id,count,status)
    // updatePlayersKill(matchid,teamid,id,count,status)
  }, [  count , status])
  

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(prevCount => prevCount + 1);
    updateTotalKills(1);

  }

  function decrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      updateTotalKills(-1);
    }
  }

  return (
    <div
      style={{
        padding:"10px 10px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <button onClick={decrement}>-</button>
      <p style={{ margin: "5px 5px" }}>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}