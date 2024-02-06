import React from 'react';
import Clock from 'react-live-clock';

const LiveClock = () => {
  return (
    <div className='live-clock-container'>
      <div className='live-clock-title'>
        <span>Local</span>
      </div>
      <div className='live-clock-content'>
        <Clock 
        format={'HH:mm:ss'} 
        ticking={true} 
        timezone={'TW/Taipei'}
          />
        </div>
    </div>
  )
}

export default LiveClock
