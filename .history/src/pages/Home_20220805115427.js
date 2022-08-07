import React, {useState} from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  useStat
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
    </Box>
  )
}

export default Home  