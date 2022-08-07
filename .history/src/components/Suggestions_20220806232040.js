import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

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
      <Typography>
        Exercises Targeting
      </Typography>
    </Box>
  )
}

export default Suggestions