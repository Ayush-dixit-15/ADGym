 import React from 'react'
 import { Box, Stack } from '@mui/system'
 import Typography from '@mui/material/Typography';
 
 const HeroBanner = () => {
   return (
     <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
     }} position="relative" p="20px">
        <Typography color = "#FF2625"
        fontWeight="600"
        fontSize="26px"
        >
            Fitness club
        </Typography>
        <Typography>
            Sweat, Smile <br />
            and Repeat
        </Typography>
        <Typography>
            Check out the most effective exercises
        </Typography>
     </Box>
   )
 }
 
 export default HeroBanner