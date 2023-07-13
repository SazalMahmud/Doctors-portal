import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

// useing Grid & Card

const Service = (props) => {
    const {name,Description, Image} =props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
                  
        <Card sx={{ minWidth: 275 ,border: 0,boxShadow: 0}}>     
        <CardMedia
        component="img"
        style={{width: 'auto', hight: '90px',margin:'0 auto'}}
        image={Image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
      </CardContent>
    </Card>

        </Grid>
    );
};

export default Service;