import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Details from '../components/Details';
import Videos from '../components/Videos';

const ExerciseDetail = () => {
  return (
    <Box>
       <Details/>
       <Videos/>
    </Box>
  )
}

export default ExerciseDetail 