import './h2h.css'

import { Score } from '../../components/Score'

import React from 'react'

const scoreData =[
    {
        scoreLeft: "0",
        topic: "Elimination",
        scoreRight: "0"
    }
]

const H2h = () => {
  return (
    <div className="score-wrapper">
        {scoreData.map((scoreLeft, topic, scoreRight) => (
            <Score scoreLeft={scoreLeft} topic={topic} scoreRight={scoreRight} />
        ))}
    </div>
  )
}

export default H2h
