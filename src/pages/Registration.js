import React, { Fragment, useState } from 'react';
import axios from 'react-axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../styles/register.css';

function Registration() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (value) => {
        setUsername(value);
    };
    const handleEmailChange = (value) => {
        setEmail(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };
    const handleRegister = () => {
        const data = {
            Username : username,  // Backend Table name : username
            Email : email,
            Password : password,
            IsActive : 1 // this will give the role to the user // or we can use Permission
        };
        const url = '';
        axios.Post(url, data).then((result) => {
            if(result.data == 'Data inserted')
            alert('data saved');
            else
            alert(result.data)
        })
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // inside the const data has to be exact data on the Database table

    return (
        <Fragment>
            <div className="register-wrapper">
                <div className='register-container'>
                    <div className="register-header">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="register-body">
                    <Box component="form" sx={{ mt: 1 }}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus 
                        onChange={(e) => handleUsernameChange(e.target.value)}
                        sx = {{  
                            margin: 'normal',
                            borderRadius: '10px',
                            fontFamily: "Poppins, sans-serif",   
                        }}
                        />
                        <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => handleEmailChange(e.target.value)}
                        sx = {{
                            margin: 'margin',
                            borderRadius: '10px',
                            fontFamily: "Poppins, sans-serif",
                        }}
                        />
                        <FormControl 
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        sx={{ 
                            margin: 'normal',
                            borderRadius: '10px',
                            }} variant="outlined"
                            onChange={(e) => handlePasswordChange(e.target.value)}
                            >
                            <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                
                                label="Password"
                            />
                            </FormControl>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={() => handleRegister()}
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                            </Button>
                            <Grid container>
                            <Grid item xs>
                                {/* <Link href="#" variant="body2">
                                Forgot password?
                                </Link> */}
                            </Grid>
                            <Grid item>
                                <Link to='/login' variant="body2">
                                {"Already have an account? Log In"}
                                </Link>
                            </Grid>
                            </Grid>
                            </Box>
                    </div>
                    {/* <div className='register-footer'>
                        <Button sx={{
                            margin: '10px',
                            fontFamily: "Poppins, sans-serif",
                            padding: '15px 35px',
                            fontSize: '16px'
                        }}variant='contained'
                        // onClick={() => handleRegister()}
                        >Submit</Button>
                        <div className="login-access" variant='body2'>
                            <Link to='/login'>Already have an account? Sign in</Link>
                        </div>
                    </div> */}
                </div> 
            </div>
        </Fragment>
    )
}

export default Registration;

// Username, email, password