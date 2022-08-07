import React from 'react';
import { Stack, Box,Typography } from '@mui/material';

const Videos = ( { exerciseVideos, name}) => {
  return (
    <Box sx ={
      {
        marginTop: {
          lg: '200px',
          xs : '20px'
        }
      }
    } p="20px">
      <Typography variant="h3" mb="33px">
         Watch <span style={{
          color: '#ff2625',
          textTransform: 'capitalize'
         }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems= "center"
      sx ={{
        flexDirection: {
          lg:'row'
        },
        gap :{ lg:1}
      }}></Stack>
    </Box>
  )
}

export default Videos