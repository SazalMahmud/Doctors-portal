import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'
import { Button ,Typography } from '@mui/material';

const appointmentBanner={
    background: `url(${appoinment})`,
    backgroundColor:'rgba(45 ,58, 74 ,0.7)',
    backgroundBlendMode:'darken , luminosity',
    marginTop: 150 
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
          <Grid item xs={12}  md={6} sx={{
          display:'flex' , 
          justifyContent:'flex-start',
          alignItems:'center',
          textAlign:'left'
          }}>
            <img style={{width:400, marginTop: '-115px'}}src={doctor}  alt=""/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
            <Typography variant='h6' sx={{mb:5}} style={{color: 'YellowGreen'}}>
                   Appointment
            </Typography>
            <Typography variant='h4' style={{color: 'Orange'}}>
                   Make an Appointment Today
            </Typography>
            <Typography variant='h6' style={{color:'white' ,fontSize:17, fontWeight:400}}>
            I am saying that as a doctor Jones is good—good by the standards for judging doctors. 
            In this respect, calling something good is like calling something
            </Typography>

           <Button variant="contained" color="success">Learn More</Button>

            </Box>
          </Grid>
     </Grid>
      </Box>
    );
};

export default AppointmentBanner;