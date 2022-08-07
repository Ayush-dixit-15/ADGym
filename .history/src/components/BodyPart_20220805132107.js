import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import Icon from '../images/icons/gym.png'

const BodyPart = ( { item, setBodyPart, bodyPart}) => {
  return (
    <Stack
      type = "button"
      alignItems="center"
      justifyContent="center"
      className = "bodyPart-card"
      sx={{
       
            borderTop:  bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
      }}
      onClick= {() =>{
        setBodyPart(item)
      }}> 
        <img src = {Icon} alt = "dumbell" style={
        {
            width:'40px',
            height: '40px'
        }}/>
        <Typography fontSize = "24px" fontWeight="bold" color="#3A1212">{item}</Typography>
    </Stack>
  )
}

export default BodyPart