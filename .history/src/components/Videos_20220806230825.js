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
        gap :{ lg:'110px' ,xs:'0'}
      }}>
        {exerciseVideos?.slice(0,6).map((item, index) => (
          <a
            key ={index}
            className= "exercise-video"
            href= {`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target = "_blank"
            rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt = {item.video.title}/>
              <Box>
                <Typography variant = "h5" color="#000"></Typography>

              </Box>
            </a>
        ))}
      </Stack>
    </Box>
  )
}

export default Videos