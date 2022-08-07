import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Details from '../components/Details';
import Videos from '../components/Videos';
import Suggestions from '../components/Suggestions'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () =>
  }, [third])
  
  return (
    <Box>
       <Details exerciseDetail = {exerciseDetail} />
       <Videos/>
       <Suggestions/>
    </Box>
  )
}

export default ExerciseDetail 