import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button , Container,Typography } from '@mui/material';
import { Box } from '@mui/system';
const BannerBg={
    background: `url(${bg})`,
    
}
const verticalCenter ={
    display : 'flex',
    alignItems:'center',
    height:550
}

const Banner = () => {
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
         <Box>
         <Typography variant='h4'>
             Your new Smile <br/>
             Start Here
          </Typography>
          <Typography variant='h6' sx={{my:5, fontSize:13 , fontWeight:300, color:'DarkSeaGreen'}}>
          The Good News is our team of Doctors are experts in personalizing your natural therapy 
          health solutions to optimize your health and wellness .
          </Typography>
          <Button variant="contained" style={{backgroundColor:'#4682B4'}}>Get Appointment</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>

    </Grid>

    </Container>
    );
};

export default Banner;