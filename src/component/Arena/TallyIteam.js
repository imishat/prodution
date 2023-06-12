import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import TallyContext from "../../context/TallyContext/TallyContext";

export default function TallyItem(props) {
  const match_id = window.location.params
  console.log(props);
  const [stats, setStats] = useState({ totalKills: 0, totalPoints: 0 });
  const isFirstRender = useRef(true);
  let pointTable = {
    1: 10,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 1,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,

    "": 0,
  };

  const [pointInfoData, setPointInfoData] = useState({});
  console.log(pointInfoData);

  const [totalPoints, setTotalPoints] = useState(pointInfoData.rankpoint);
  const [rank, setRank] = useState(pointInfoData.rank);
  console.log(pointInfoData.rank);
  const [player1Status, setPlayer1Status] = useState(
    pointInfoData.player1Status &&( pointInfoData.player1Status || false)
  );
  const [player2Status, setPlayer2Status] = useState(
   pointInfoData.player2Status && ( pointInfoData.player2Status || false)
  );
  const [player3Status, setPlayer3Status] = useState(
    pointInfoData.player3Status && (pointInfoData.player3Status || false)
  );
  const [player4Status, setPlayer4Status] = useState(
    pointInfoData.player4Status && (pointInfoData.player4Status || false)
  );
  // kills
  const [player1Kills, setPlayer1Kills] = useState(pointInfoData?.player1Kills && (pointInfoData.player1Kills || 0));
  const [player2Kills, setPlayer2Kills] = useState(pointInfoData?.player2Kills && (pointInfoData.player2Kills || 0));
  const [player3Kills, setPlayer3Kills] = useState(pointInfoData?.player3Kills && (pointInfoData.player3Kills || 0));
  const [player4Kills, setPlayer4Kills] = useState(pointInfoData?.player4Kills && (pointInfoData.player4Kills || 0));

  const totalKillings =
    pointInfoData?.player1Kills +
    pointInfoData?.player2Kills +
    pointInfoData?.player3Kills +
    pointInfoData?.player4Kills;
  const [totalKills, setTotalKills] = useState(totalKillings);

  const [playerData, setPlayerData] = useState("");

  const context = useContext(TallyContext);
  const {
    DeadState,
    teams,
    KillState,
    totalkill,
    AliveteamCount,
    ChangeAliveCount,
    undoAliveCount,
    updatekillsandpoints,
  } = context;

  useEffect(() => {
    localStorage.setItem(
      `player1Status-${props.teamData._id}`,
      JSON.stringify(player1Status)
    );
    localStorage.setItem(
      `player2Status-${props.teamData._id}`,
      JSON.stringify(player2Status)
    );
    localStorage.setItem(
      `player3Status-${props.teamData._id}`,
      JSON.stringify(player3Status)
    );
    localStorage.setItem(
      `player4Status-${props.teamData._id}`,
      JSON.stringify(player4Status)
    );
  }, [
    player1Status,
    player2Status,
    player3Status,
    player4Status,
    props.teamData._id,
  ]);

  useEffect(() => {
    DeadState(
      props.teamData.teamName,
      player1Status,
      player2Status,
      player3Status,
      player4Status
    );
  }, [
    player1Status,
    player2Status,
    player3Status,
    player4Status,
    props.teamData.teamName,
  ]);

  // function updateTotalKills(newCount) {
  //   setTotalKills((prevTotal) => prevTotal + newCount);
  // }
  console.log(props.m_id);
  useEffect(() => {
    if (isFirstRender.current) {
      // Skip the effect during the initial render
      isFirstRender.current = false;
    } else {
      // This will run only when the component is updated, not on the initial render
      updatekillsandpoints(
        props.m_id,
        props.teamData._id,
        match_id,
        totalKills,
        totalPoints + totalKills,
        totalPoints,
        player1Status,
        player2Status,
        player3Status,
        player4Status,
        player1Kills,
        player2Kills,
        player3Kills,
        player4Kills,
        rank
      );

      // console.log(playerData);
    }
  }, [
    player1Status,
    player2Status,
    player3Status,
    player4Status,
    player1Kills,
    player2Kills,
    player3Kills,
    player4Kills,
    totalPoints,
    rank,
    totalKills,
    props.m_id,
    props.teamData._id,
    updatekillsandpoints,
  ]);

  function handleChange(e) {
    setRank(e.target.value);
    setTotalPoints(pointTable[parseInt(pointInfoData.rank)]);
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/filteredteam/getpoints/${props.m_id}?teamId=${props.teamData._id}`
      )
      .then((res) => setPointInfoData(res.data));
  }, [
    pointInfoData,
    pointInfoData.player1Kills,
    pointInfoData.player2Kills,
    pointInfoData.player2Status,
    pointInfoData.player3Kills,
    pointInfoData.player3Status,
    pointInfoData.player4Kills,
    pointInfoData.player4Status,
    pointInfoData.rank,
  ]);
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px 40px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        borderRadius: "10px",
        background: "black",
        color: "white",
        alignItems: "center",
        textDecoration: "underline ",
        margin: "10px 10px",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "white",
          left: "-166px",
          color: "black",
          top: "-8px",
        }}
      >
        {" "}
        <div>
          #
          <input
            onChange={handleChange}
            style={{ height: "28px", width: "48px" }}
            type="number"
            defaultValue={pointInfoData.rank}
            size="1"
          />{" "}
          <div></div>
        </div>
      </div>

      <h4> TEAM NAME: {props.teamData.teamName}</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_1} :{" "}
        {/* Incremone and decrement btn */}
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPlayer1Kills(pointInfoData.player1Kills - 1)}
          >
            -
          </button>
          <p style={{ margin: "5px 5px" }}>{pointInfoData.player1Kills}</p>
          <button
            onClick={() => setPlayer1Kills(pointInfoData.player1Kills + 1)}
          >
            +
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            defaultChecked={pointInfoData.player1Status}
            type="checkbox"
            value=""
            onChange={() => setPlayer1Status(!pointInfoData.player1Status)}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dead
          </label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_2}:{" "}
        {/* Incremone and decrement btn */}
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPlayer2Kills(pointInfoData.player2Kills - 1)}
          >
            -
          </button>
          <p style={{ margin: "5px 5px" }}>{pointInfoData.player2Kills}</p>
          <button
            onClick={() => setPlayer2Kills(pointInfoData.player2Kills + 1)}
          >
            +
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            defaultChecked={pointInfoData.player2Status}
            type="checkbox"
            onChange={() => setPlayer2Status(!player2Status)}
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dead
          </label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_3} :{" "}
        {/* Incremone and decrement btn */}
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPlayer3Kills(pointInfoData.player3Kills - 1)}
          >
            -
          </button>
          <p style={{ margin: "5px 5px" }}>{pointInfoData.player3Kills}</p>
          <button
            onClick={() => setPlayer3Kills(pointInfoData.player3Kills + 1)}
          >
            +
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            defaultChecked={pointInfoData.player3Status}
            type="checkbox"
            onChange={() => setPlayer3Status(!player3Status)}
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dead
          </label>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.teamData.teamTag} {props.teamData.player_4} :{" "}
        {/* Incremone and decrement btn */}
        <div
          style={{
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPlayer4Kills(pointInfoData.player4Kills - 1)}
          >
            -
          </button>
          <p style={{ margin: "5px 5px" }}>{pointInfoData.player4Kills}</p>
          <button
            onClick={() => setPlayer4Kills(pointInfoData.player4Kills + 1)}
          >
            +
          </button>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            defaultChecked={pointInfoData.player4Status}
            type="checkbox"
            onChange={() => setPlayer4Status(!player4Status)}
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dead
          </label>
        </div>
      </div>
      <h4>Total Kills : {totalKillings}</h4>
      <h4> Rank Points : {(pointTable[parseInt(pointInfoData.rank)] || 0)}</h4>
      <h4>
        {" "}
        Total Points :{" "}
        {(pointTable[parseInt(pointInfoData.rank)] + totalKillings) || totalKillings || 0}
      </h4>
    </div>
  );
}
