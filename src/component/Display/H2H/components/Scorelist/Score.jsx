import './Score.css';

import React from 'react'



export function Score({scoreLeft, topic, scoreRight}) {
  return (
    <div className='score-wrapper'>
      <div style={{clipPath:" polygon(91.49% 0%, 100% 23.38%, 100% 100%, 10.64% 100%, 0% 76.62%, 0% 0%)"}}  className="score">
        <h2 className="text-50-white">{scoreLeft}</h2>
      </div>
      <div className="topic">
        <h1 className="text-50-white">{topic}</h1>
      </div>
      <div style={{clipPath:" polygon(6.91% 0%, 100% 0%, 100% 79.22%, 92.02% 100%, 0% 100%, 0% 18.18%)"}}  className="score">
        <h2 className="text-50-white">{scoreRight}</h2>
      </div>
    </div>
  )
}
