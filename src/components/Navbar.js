import * as React from 'react';
import LanguageDropdown from '../features/LanguageDropdown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import { Link } from 'react-router-dom'

import '../styles/navbar.css';

const Navbar = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    // const [language, setLanguage] = React.useState('english');
    // const handleChange = (event) => {
    //     setLanguage(event.target.language)
    // };

    return (  
       <>
            <LanguageDropdown />
            <div className='profile-container'>
                <Box sx={{ 
                    flexGrow: 'auto',
                    position: 'fixed',
                    top: '10px',
                    right: '70px'
                    }}>
                
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="profile.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    
                    <MenuItem sx={{
                        fontSize: '14px',
                        fontFamily: "'Poppins', sans serif"
                    }}>
                        <PermIdentityTwoToneIcon sx={{
                            marginRight: '10px'
                        }}/>
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
                    </MenuItem>
                    <MenuItem sx={{
                        fontSize: '14px',
                        fontFamily: "'Poppins', sans serif"
                    }}>
                        <LogoutTwoToneIcon sx={{
                            marginRight: '10px'
                        }}/>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Log Out</Link>
                    </MenuItem>
                    </Menu>
                </Box>
            </div>
        </>
       
            
        
    );
}
 
export default Navbar;