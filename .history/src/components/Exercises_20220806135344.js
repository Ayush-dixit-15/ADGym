import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import {Stack, Box, Typography} from '@mui/material';


import { exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPP = 9;

    const indexLast = currentPage*exercisesPP;
    const indexFirst = indexLast - exercisesPP;
    const currentExercises = exercises.slice(indexFirst,indexLast)

    const paginate=( e, value ) =>{
      setCurrentPage(value);

      window.scrollTo({ top: 1800, bheaviour: 'smooth'})
    }
    useEffect(())
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
          <Typography variant = "h3" mb="46px">
            Showing results
          </Typography>
          <Stack direction = "row" sx= {{
              gap: {
                lg: '110px',
                xs: '50px',
              }
          }} flexWrap="wrap" justifyContent="center">
            {
              currentExercises.map(( exercise , index)=>(
                <p><ExerciseCard key={index} exercise={exercise}/></p>
              ))
            }
          </Stack>
          <Stack mt= "100px" alignItems="center"> 
            {exercises.length > 9 && (
                 <Pagination 
                    color = "standard"
                    shape = "rounded"
                    defaultPage={1}
                    count= { Math.ceil(exercises.length / exercisesPP)}
                    page = {currentPage}
                    onChange = {paginate}
                    size = "large"
                 />
            )
}
          </Stack>
        </Box>
  )
}

export default Exercises