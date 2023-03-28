import './Score.css';

import React from 'react'



export function Score({scoreLeft, topic, scoreRight}) {
  return (
    <div className='score-wrapper'>
      <div className="score-left">
        <h2 className="text-50-white">{scoreLeft}</h2>
      </div>
      <div className="topic">
        <h1 className="text-50-white">{topic}</h1>
      </div>
      <div className="score-right">
        <h2 className="text-50-white">{scoreRight}</h2>
      </div>
    </div>
  )
}
