import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const ActiveLastBreadCrumb = () => {
    return ( 
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <Button sx={{
                color: 'white',
                underline: 'hover',
                backgroundColor: 'transparent'
            }}>
            <Link to='/dashboard'>
            Dashboard
            </Link>
            </Button>
            <Button sx={{
                color: 'white',
                underline: 'hover',
                backgroundColor: 'transparent'
            }}>
            <Link to='/reports'>
            Reports
            </Link>
            </Button>
        </Breadcrumbs>
        </div>
     );
}
 
export default ActiveLastBreadCrumb;