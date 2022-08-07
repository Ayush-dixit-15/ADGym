import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import Icon from '../images/icons/gym.png'

const BodyPart = () => {
  return (
    <Stack
      type = >
        <img src = {Icon} alt = "dumbell" styles={
        {
            width:'40px',
            height: '40px'
        }}/>
    </Stack>
  )
}

export default BodyPart