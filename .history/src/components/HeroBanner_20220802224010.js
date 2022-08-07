 import React from 'react'
 import { Box, Stack } from '@mui/system'
 import Typography from '@mui/material/Typography';
 import Button from '@mui/material/Button';
 import HeroBannerImage from '../images/banner.png'
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
        <Typography fontWeight={700}
        sx={
            {
                fontSize:{ lg: '44px', xs: '40px'}
            }
        }>
            Sweat, Smile <br />
            and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained"
        color="error" href="#exercises">Explore exercises</Button>
        <img src={HeroBannerImage} alt="banner"/>
     </Box>
   )
 }
 
 export default HeroBanner