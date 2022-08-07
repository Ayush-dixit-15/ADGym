import React, {useState} from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={}/>
        <Exercises/>
    </Box>
  )
}

export default Home  