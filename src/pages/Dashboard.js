import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Grid version 1
import Paper from '@mui/material/Paper';
import Login from './Login';
import { Link } from 'react-router-dom';
import ActiveLastBreadCrumb from '../components/ActiveLastBreadcrumb';

import '../styles/dashboard.css';
import LiveClock from '../features/LiveClock';


const Dashboard = () => {

    // const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    // }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Sidebar/>
      <Navbar/>
      <div className="container">
        <div className='dashboard-page'>
            <div className="page-header">
                <div className="page-block">
                    <ActiveLastBreadCrumb/>
                </div>
            </div>
               
            <div className='dashboard-container'>
                <div className='dashboard-content'>
                    <div className='available-container'>
                        <div className='available-title'>
                            <h3>System Availability</h3>
                        </div>
                        <div className='router-wrapper'>
                            <div className='router-container' id='available'>
                                <div className='router-title'>
                                    <h3>Available</h3>
                                </div>
                                <div className='router-content'>
                                    <label>1</label>
                                </div>
                            </div>
                            <div className='router-container' id='unavailable'>
                                <div className='router-title'>
                                    <h3>Available</h3>
                                </div>
                                <div className='router-content'>
                                    <label>1</label>
                                </div>
                            </div>
                            <div className='router-container' id='total'>
                                <div className='router-title'>
                                    <h3>Available</h3>
                                </div>
                                <div className='router-content'>
                                    <label>1</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dashboard-container'>
                <div className='dashboard-content'>
                    <div className='map-container'>
                        <div className='map-content'>
                            <img src='ntust-map.png' /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-container'>
                <div className='dashboard-content'>
                    <Grid item xs={'auto'}>
                        <Item>
                            <LiveClock/>
                        </Item>
                    </Grid>
                </div>
            </div> 
            
        </div>
      </div>
    </>
  )
}

export default Dashboard
