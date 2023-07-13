import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Service from '../Service/Service';
import  fluoride from '../../../images/fluoride.png'
import  cavity  from '../../../images/cavity.png'
import whitening  from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';




const services =[
    {
        name:'Sazal',
        Description:'Some of the adjectives that we can use are affable,amicable, caring, thoughtful, beautiful, classy, precious, impressive,irreplaceable, trustworthy, understanding, sweet, etc.',
        Image:fluoride
    },

    {
        name:'Abir',
        Description:'Some of the adjectives that we can use are affable,amicable, caring, thoughtful, beautiful, classy, precious, impressive, irreplaceable, trustworthy, understanding, sweet, etc.' ,
        Image:cavity
    },
    {
        name:'Monir',
        Description:'Some of the adjectives that we can use are affable, amicable, caring, thoughtful, beautiful, classy, precious, impressive,irreplaceable, trustworthy, understanding, sweet, etc.' ,
        Image:whitening
    }
    
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
         <Container>
         <Typography sx={{fontWeight: 400 ,color:'#2e7d32' ,m:3}} variant="h6" component="div">
         --OUR SERCICES--
        </Typography>
          <Typography sx={{fontWeight: 600 ,color:'#ed6c02' ,m:4}} variant="h6" component="div">
              Services We Provide
          </Typography>

         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            services.map(service =><Service
                key ={service.name}
                service ={service}
            ></Service>)
         }
        </Grid>
         </Container>
      </Box>
    );
};

export default Services;