import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
//import { useSpring, animated } from 'react-spring/web.cjs';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ( {openBooking ,handleBookingClose ,booking,date ,setBookingSuccess}) => {

    const {name ,time} =booking;

                                      //user.displayName email: user.email [google auth er kaj baki ashe ai jonno ai gula babohar kori nee]

    const initialInfo = {patientName : '' , email: '' , phone : ''}
    const [bookingInfo, setBookingInfo] = useState({initialInfo});

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      // booking info shov gulo copy korse[...]
      const newInfo = {...bookingInfo};
      newInfo[field] =value;
      //console.log(newInfo);
      setBookingInfo(newInfo);
    }

//from er even handeler
    const handleBookingSubmit = e =>{
      //  alert('submitting');

        //collect data
        const appointment = {
          ...bookingInfo,
          time,
          serviceName: name,
          date: date.toISOString()
        }
        //sent to the server
        fetch ("http://localhost:5000/appointments",{
          method: 'POST',
          headers:{
                  'content-Type' : 'application/json'
          },
          
          body: JSON.stringify(appointment)

        })

        .then(res =>res.json())
        .then(data =>{
                if(data.insertedId) {

                       setBookingSuccess(true);

                        handleBookingClose();
                    }
        
        });


       
        e.preventDefault();
    }
  
    return (
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
           <form onSubmit={handleBookingSubmit}>
                 <TextField
                  disabled
                  sx={{width: '90%' ,m:2}}
                  id="outlined-size-small"
                  defaultValue={time}
                  size="small"
                />
                <TextField
                  //disabled
                  sx={{width: '90%' ,m:2}}
                  id="outlined-size-small"
                  name="patientName"
                  onBlur={handleOnBlur}
                  defaultValue='Your Name'
                  size="small"
                />
                <TextField
                  //disabled
                  sx={{width: '90%' ,m:2}}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue=' Your Phone Number'
                  size="small"
                />
                <TextField
                  //disabled
                  sx={{width: '90%' ,m:2}}
                  id="outlined-size-small"
                  name="phone"
                  onBlur={handleOnBlur}
                  defaultValue='Your Email Number'
                  size="small"
                />
                <TextField
                  disabled
                  sx={{width: '90%' ,m:2}}
                  id="outlined-size-small"
                  defaultValue={date.toISOString().split('T')[0]}
                  size="small"
                />
                <Button type ="submit" variant="contained">Submit</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;