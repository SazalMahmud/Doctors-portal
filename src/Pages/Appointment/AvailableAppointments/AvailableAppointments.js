import {Alert, Container, Grid, Typography } from '@mui/material';
//import { Container } from '@mui/system';
import React, { useState }  from 'react';
import Booking from '../Booking/Booking';
const bookings =[
    {
        id : 1,
        name: 'Sazal',
        time :'07.00 AM - 08.00 AM',
        space:10,

    },
    {
        id : 2,
        name: 'Afroja',
        time :'08.00 AM - 09.00 AM',
        space:8,
 
    },
    {
        id : 3,
        name: 'Ayman',
        time :'09.00 AM - 10.00 AM',
        space:9,
 
    },
    {
        id : 4,
        name: 'Ruhul',
        time :'10.00 AM - 11.00 AM',
        space:5,
 
    },
    {
        id : 5,
        name: 'Saddam',
        time :'12.00 AM - 1.00 PM',
        space:10,
 
    },
    {
        id : 6,
        name: 'Monir',
        time :'2.00 PM - 3.00 PM',
        space:10,
 
    },
]

const AvailableAppointments = ({date}) => {
    const[bookingSuccess , setBookingSuccess] = useState(false);
    
    return (
      
        <Container>
              <Typography variant="h4" sx={{color :'#e65100' ,fontWeight:500 ,mb:3}}>AvailableAppointments ON :  {date.toISOString().split('T')[0]}</Typography>
              {bookingSuccess && <Alert severity="success">serial booked successfully</Alert>}
              <Grid container spacing={2}>
                {

                    bookings.map(booking=><Booking
                    key={booking.id}
                    booking ={booking}
                    //date ke Booking a patashe ai jonno akta props --- date ={date}
                     date ={date}
                     setBookingSuccess ={setBookingSuccess}
                    >

                    </Booking>)
                }
              </Grid>

        </Container>
           
       
    );
};

export default AvailableAppointments;