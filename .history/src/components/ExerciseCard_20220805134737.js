import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Button, Typography} from '@mui/material';


const ExerciseCard = () => {
  return (
    <Link to={`/exercise/${exercise.id}` className=""}></Link>
  )
}

export default ExerciseCard