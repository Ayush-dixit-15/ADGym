import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Button, Typography} from '@mui/material';


const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" >
        <img src = {exercise.gifUrl} alt={exercise.name} loading= "lazy"/>
        <Stack direction = "row">
            <Button sx={{
                ml: '21px',
                color: '#fff',
                background: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform:'capitalize'
                }}>
             {exercise.bodyPart}
            </Button>
            <Button sx={{
                ml: '21px',
                color: '#fcc757',
                background: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform:'capitalize'
                }}>
             {exercise.targetm}
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard