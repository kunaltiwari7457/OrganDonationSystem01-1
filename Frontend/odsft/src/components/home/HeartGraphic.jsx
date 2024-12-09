import React from 'react'
import './HeartGraphic.css';
import heart from '../../assets/hih.png';

const HeartGraphic = () => {
  return (
    <div className="graphic-container">
    <h1 className="header-text">
      Transforming Lives Through Organ Donation
    </h1>
    <div className="hands">
      <div className="hand left-hand">
        <span className="floating-text">organ donation</span>
        <span className="floating-text">organ donation</span>
      </div>
      <div className="heart">
       <img src={heart} />
      </div>
      <div className="hand right-hand">
        <span className="floating-text">organ donation</span>
        <span className="floating-text">organ donation</span>
      </div>
    </div>
  </div>
  )
}

export default HeartGraphic
