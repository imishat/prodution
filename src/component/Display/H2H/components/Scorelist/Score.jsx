import './Score.css';

import React from 'react'



export  function Score(scoreLeft, topic, scoreRight) {
  return (
    <div className='score-wrapper'>
      <div className="score-left">{scoreLeft}</div>
      <div className="topic">{topic}</div>
      <div className="score-right">{scoreRight}</div>
    </div>
  )
}
