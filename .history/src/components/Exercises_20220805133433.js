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
              
            }
          }
        }>Exercises</Box>
  )
}

export default Exercises