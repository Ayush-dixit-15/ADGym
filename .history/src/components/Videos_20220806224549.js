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
          colo
         }}>{name}</span> exercise videos
      </Typography>
    </Box>
  )
}

export default Videos