import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import {Stack, Box, Typography} from '@mui/material';


import { exerciseOptions, fetchData} from '../utils/fetchData';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id = "exercises"
        sx = {
          {
            mt: {
              lg: '110px'
            }
          }
        }
        mt= "50px"
        p="20px">
          <Typography variant = "h3" mb-"46px">
            Showing results
          </Typography>
        </Box>
  )
}

export default Exercises