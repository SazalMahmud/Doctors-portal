
import { Container, Grid, Typography,TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Register = () => {
        const [ loginData , setLoginData] = useState({});
        const {registerUser} = useAuth();
        const handleOnBlur =e =>{
                const field = e.target.name;
                const value = e.target.value;
                // coppy email and password field
                const newLoginData ={...loginData};
                newLoginData[field] =value;
                setLoginData(newLoginData);
        }
    
        const handleLoginSubmit = e =>{
          if (loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
          }
          registerUser(loginData.email , loginData.password);
            e.preventDefault();
        }
    return (
        <Container>
        <Grid container spacing={2}>
           <Grid item sx={{mt:10}} xs={12} md ={6}>
              
           <Typography variant="body1" gutterBottom> Register </Typography>
           <form onSubmit={handleLoginSubmit}>
           <TextField 
                 sx={{width: '75%' , m:1}}
                 id="standard-basic" 
                 label="Your Name" 
                 name="name"
                 onBlur={handleOnBlur}
                 variant="standard" />
           <TextField 
                 sx={{width: '75%' , m:1}}
                 id="standard-basic" 
                 label="Your Email" 
                 name="email"
                 type="email"
                 onBlur={handleOnBlur}
                 variant="standard" />
           <TextField 
                 sx={{width: '75%' , m:1}}
                 id="standard-basic" 
                 label="Your password" 
                 type="password"
                 name="password"

                 onBlur={handleOnBlur}
                 variant="standard" />

                 <TextField 
                 sx={{width: '75%' , m:1}}
                 id="standard-basic" 
                 label=" Confirm Your password" 
                 type="password"
                 name="password2"
                 onBlur={handleOnBlur}
                 variant="standard" />
   
   
               
           <Button  sx={{width: '75%' , m:1}} type="submit" variant='contained'> Register</Button>
   
           <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">Already registered? plase Login</Button></NavLink>
           </form>
   
           </Grid>
           <Grid item xs={12} md ={6}>
                <img style={{width: '100%'}} src={login} alt=""/>
           </Grid>
           
         </Grid>
    </Container>
    );
};

export default Register;