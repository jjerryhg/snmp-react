import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveClock from "./features/LiveClock";
import './App.css';

function App() {


  return (
    <>
      <div className='home-title'>
        <h2>Home Page</h2>
      </div>
      <div className='started-button'>
        <Link to='/dashboard'>Get Started</Link>
        <Link to='/Login'>Login Test</Link>
        <Link to='/registration'>Registration Test</Link>
      </div>
    </>
  );
}

export default App;
