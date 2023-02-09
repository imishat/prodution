import React, { useState } from "react";
import { useEffect } from "react";

export default function IncDecCounter(props) {
  const { id, updateTotalKills } = props;
  const [count, setCount] = useState(
    Number(localStorage.getItem(`count_${id}`)) || 0
  );// useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  useEffect(() => {
    localStorage.setItem(`count_${id}`, count);
  }, [count, id]);

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
    <diva
      style={{
        padding:"10px 10px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <button onClick={decrement}>-</button>
      <p style={{ margin: "5px 5px" }}>{count}</p>
      <button onClick={increment}>+</button>
    </diva>
  );
}