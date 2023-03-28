import './h2h.css'

import { Score } from '../../components/Scorelist/Score'

import React from 'react'

const scoreData =[
    {
        scoreLeft: "0",
        topic: "Elimination",
        scoreRight: "0"
    }
]

export default function H2h() {
  return (
    <div className="score-wrapper">
    {scoreData.map((scoreLeft, topic, scoreRight) => (
        <Score scoreLeft={scoreLeft} topic={topic} scoreRight={scoreRight} />
    ))}
    <h2>this is </h2>
</div>
  )
}

