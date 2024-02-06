import React, { Fragment, useState } from 'react';
import axios from 'react-axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (value) => {
        setEmail(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleLogin = () => {
        const data = {  
            Email : email, // Backend Table name : email
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

    return (
        <Fragment>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="login-header">
                    <h2>
                        Sign in
                    </h2>
                    </div>
                    <div className="login-body">
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => handleEmailChange(e.target.value)}
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={() => handleLogin()}
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
                            <Link to='/registration' variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;