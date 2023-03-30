import './h2h.css'

import { Score } from '../../components/Scorelist/Score'

import React from 'react'

const scoreData =[
    {
        scoreLeft: "0",
        topic: "Elimination",
        scoreRight: "0"
    },
    {
        scoreLeft: "0",
        topic: "Match Played",
        scoreRight: "0"
    },
    {
        scoreLeft: "0",
        topic: "Contribution",
        scoreRight: "0"
    },
    {
        scoreLeft: "0",
        topic: "AVG Elimination",
        scoreRight: "0"
    },
    {
        scoreLeft: "0",
        topic: "Overall Kills",
        scoreRight: "0"
    },
    {
        scoreLeft: "0",
        topic: "Ranking",
        scoreRight: "0"
    }
]

export default function H2h() {
  return (
    <>
    <div
        style={{
            // background: "black",
          height: "231px",
          display: "flex",
          flexDirection: "column",
          //  alignItems: "center",
        }}
      >
        <h2
          style={{
            position: "relative",
            left: "0px",
            color: "white",
            fontSize: "290px",
            fontFamily: "teko",
            marginTop: "-5px",
            marginLeft: "-25px",
            WebkitTextStrokeWidth: "1px",
            top: "-67px",
            WebkitTextStrokeColor: "white",
            color: "transparent",
            opacity: "67%",
          }}
        >
          PLAYER HEAD TO HEAD
        </h2>
        <img
          style={{ position: "relative", left: "70px", top: "-385px" }}
          width="300px"
          src="https://media.discordapp.net/attachments/1067392894236905472/1086146168792305675/logo400.png"
          alt=""
        />
        <div
          style={{
            width: "1121px",
            position: "relative",
            left: "445px",
            top: "-595px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "teko",
              fontWeight: "700px",
              justifyContent: "space-between",
              width: "1110px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>
              PUBG MOBILE BATTLE OF THOUGHT SEASON 1
            </h2>
            <div
              style={{
                backgroundColor: "#187d5d",
                borderRadius: "4px",
                padding: "0px 10px",
              }}
            >
              <h2 style={{ fontSize: "40px" }}>QUALIFY ROUND M1/16</h2>
            </div>
          </div>
          <h2
            style={{
              fontFamily: "teko",
              fontWeight: "700",
              fontSize: "192px",
              marginTop: "-46px",
            }}
          >
           PLAYER HEAD TO HEAD
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          position: "relative",
          top: "58px",
        }}
      ></div>
    <div className="main">
        <section className="main-content">
            <img height="894px" width="894px" style={{position:"relative", left:"300px"}} src="https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=671&height=671" alt="" />
            <div className="scoreBoard">
              <div className="header">
                  <p className='text-50-white'>AADITYA</p>
                  <div style={{clipPath:" polygon(91.49% 0%, 100% 23.38%, 100% 100%, 10.64% 100%, 0% 76.62%, 0% 0%)"}}  className="score">
                      <p className='text-50-white'>VS</p>
                  </div>
                  <p className='text-50-white'>HYPHEN </p>
              </div>
              <div className='scores'>
              {scoreData.map((item) => (
                <Score scoreLeft={item.scoreLeft} topic={item.topic} scoreRight={item.scoreRight} />
                ))}
              </div>
            </div> 
            <img height="894px" width="894px" style={{position:"relative", right:"300px"}}  src="https://media.discordapp.net/attachments/1067392894236905472/1085094240784220210/ar1.png?width=671&height=671" alt="" />
        </section>
    </div>
              </>
  )
}

