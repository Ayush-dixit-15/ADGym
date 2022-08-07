import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff3f4">
       <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" wodth="200px" height="40px"/>
       </Stack>
       <Typography>
        Made under Guidance 
       </Typography>
    </Box>
  )
}

export default Footer