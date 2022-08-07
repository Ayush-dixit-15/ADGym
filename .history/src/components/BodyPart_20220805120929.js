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
        bodyPart === item ?{
            borderTop: '4px solid #ff2625',
            backgroundColor: '#fff',
        }
      }}>
        <img src = {Icon} alt = "dumbell" styles={
        {
            width:'40px',
            height: '40px'
        }}/>
    </Stack>
  )
}

export default BodyPart