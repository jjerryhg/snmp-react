import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { Link } from 'react-router-dom';
import * as React from 'react';

import '../styles/sidebar.css';


function Sidebar () {


    return ( 
        <nav className="sidebar">
            <div className="sidebar-logo">
                <div className='logo'>
                    <Link to="/">
                    <img src="ntust-logo.png" />
                    <span>點算中心</span>
                    </Link>
                </div>
                
            </div>
            <div className='main-divider'>
                <label>MAIN</label>
            </div>
            <div className="sidebar-content">
                <div className='sidebar-link'>
                    <Link to='/dashboard'>
                    <HomeOutlinedIcon/>
                    <span style={{marginLeft: '15px'}}>Dashboard</span>
                    </Link>
                </div>
                <div className='sidebar-link'>
                    <Link to='/reports'>
                    <InfoOutlinedIcon/>
                    <span style={{marginLeft: '15px'}}>Reports</span>
                    </Link>
                </div>
                <div className='sidebar-link'>
                    <Link to="/abnormal">
                    <WarningAmberOutlinedIcon/>
                    <span style={{marginLeft: '15px'}}>Abnormal</span>
                    </Link>
                </div>
                
            </div>
            {/* <div className='component-divider'>
                <label>COMPONENTS</label>
            </div>
            <div className="sidebar-content">
                <a href="#"><RouterOutlinedIcon sx={{
                    marginRight: '15px'
                }} />Gateway</a>
                
                <a href="#"><PollOutlinedIcon sx={{
                    marginRight: '15px'
                }}/>Statistics</a>
                <a href="#"><SettingsOutlinedIcon sx={{
                    marginRight: '15px'
                }}/>Settings</a>
            </div> */}
        </nav>
     );
}
 
export default Sidebar;