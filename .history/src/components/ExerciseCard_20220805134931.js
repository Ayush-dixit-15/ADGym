import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Button, Typography} from '@mui/material';


const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" >
        <i
    </Link>
  )
}

export default ExerciseCard