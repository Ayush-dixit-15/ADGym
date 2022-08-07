import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../images/icons/body-part.png';
import TargetImage from '../images/icons/target.png';
import EquipmentImage from '../images/icons/equipment.png';
const Details = ( { exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail
  return (
    <div>Details</div>
  )
}

export default Details