import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RouterIcon from '@mui/icons-material/Router';

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    /> // Above is use to set the dropdown item below the dropdown button
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 166,
        
        padding: '4px 0',
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          marginRight: theme.spacing(1.5),
        },
      },
    },
  }));

const SystemDropdown = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return ( 
        <>
           <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    backgroundColor: '#323741',
                    fontFamily: "'Poppins', sans serif",
                    fontWeight: '600'
                }}
            >
                Select Router
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                >
                <MenuItem onClick={handleClose} disableRipple sx={{
                    fontWeight: '600',
                    fontFamily: "'Poppins', sans serif",
                }}>
                <RouterIcon />
                Router 1
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple sx={{
                    fontWeight: '600',
                    fontFamily: "'Poppins', sans serif",
                }}>
                <RouterIcon />
                Router 2
                </MenuItem>
            </StyledMenu>
        </>
     );
}
 
export default SystemDropdown;