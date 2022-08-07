import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'

const Suggestions = ( { targetMuscle,targetEquipment } ) => {
  return (
    <Box sx ={
        {
            mt: {
                lg:'100px',
                xs: '0'
            }
        }
    }>
      <Typography variant='h3'>
        Exercises Targeting the same muscle group
      </Typography>
      <Stack direction = "row"
      sx={
        {
           p:'2',
           position:'relative'
        }
      }>
        {targetMuscle.length ? <HorizontalScrollbar data={targetMuscle}/>: 
        <
        }
      </Stack>
    </Box>
  )
}

export default Suggestions