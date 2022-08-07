import React from 'react';
import { Box} from '@mui/';
import Typography from '@mui/material/Typography'

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
      <Typography variant="h4" mb="33px">
         Watch {name} exercise videos
      </Typography>
    </Box>
  )
}

export default Videos