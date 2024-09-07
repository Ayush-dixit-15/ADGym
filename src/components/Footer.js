import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff3f4">
       <Stack gap="40px" alignItems="center" px="40px" pt="24px">
       <img src = {Logo} alt = "logo" style = {{width:'48px', height: '48px', margin: '0 20px'}} />
    
       <Typography variant ="h5" pb="40px" mt="20px">
        AD's Gym
       </Typography>
       </Stack>
    </Box>
  )
}

export default Footer
