import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ActiveLastBreadCrumb from "../components/ActiveLastBreadcrumb";
import LiveClock from "../features/LiveClock";
import SystemDropdown from "../features/SystemDropdown";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CPU from "../components/CPU";

import '../styles/reports.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Reports = () => {
    return ( 
        <>
            <Sidebar/>
            <Navbar/>
            <div className="container">
                <div className="reports-page">
                    <div className="page-header">
                        <div className="page-block">
                            <ActiveLastBreadCrumb/>
                        </div>
                    </div>
                    <div className="system-select">
                        <SystemDropdown/>
                    </div>
                        <Row className="gap-2">
                            <Col xs={'5'}>
                            <div className="sysInfo-wrapper">
                                <div className="sysInfo-container">
                                    <label>System Name:</label>
                                    <p>Router 1</p>
                                </div>
                                <div className="sysInfo-container">
                                    <label>System Desc:</label>
                                    <p>Windows 10</p>
                                </div>
                                <div className="sysInfo-container">
                                    <label>Hardware:</label>
                                    <p>Intel 64</p>
                                </div>
                                <div className="sysInfo-container">
                                    <label>System OID:</label>
                                    <p>12345678</p>
                                </div>
                                <div className="sysInfo-container">
                                    <label>System UpTime:</label>
                                    <p>0d 0h 0m 0s 100ms</p>
                                </div>
                            </div>
                            </Col>
                            <Col xs={'auto'}>
                                <LiveClock/>
                            </Col>
                            <Col xs={'auto'}>
                                <CPU/>
                            </Col>
                        </Row>
                    
                    
                    
                </div>
            </div>
        </>
     );
}
 
export default Reports;