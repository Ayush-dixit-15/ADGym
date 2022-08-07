import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Button, Typography} from '@mui/material';


const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" >
        <img src = {exercise.gifUrl} alt={exercise.name}
    </Link>
  )
}

export default ExerciseCard