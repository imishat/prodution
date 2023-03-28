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
    <div className="main">
        <section className="main-content">
            <div className="header">
                <p className='text-50-white'>Player Name</p>
                <div className="score">
                    <p className='text-50-white'>VS</p>
                </div>
                <p className='text-50-white'>Player Name</p>
            </div>
            <div className='scores'>
            {scoreData.map((item) => (
                <Score scoreLeft={item.scoreLeft} topic={item.topic} scoreRight={item.scoreRight} />
            ))}
            </div>
        </section>
    </div>
  )
}

