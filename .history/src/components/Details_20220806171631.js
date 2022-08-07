import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../images/icons/body-part.png';
import TargetImage from '../images/icons/target.png';
import EquipmentImage from '../images/icons/equipment.png';
const Details = ( { exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon : BodyPartImage,
            name: bodyPart,
        },
        {
            icon : TargetImage,
            name: target,
        },
        {
            icon : EquipmentImage,
            name: equipmemt,
        },
    ]
  return (
    <Stack gap = "60px" sx={{flexDirection: { lg: 'row'} , p:'20px', alignItems: 'center'}} >
        <img src={gifUrl} alt="name" loading= "lazy" className='detail-image' />
        <Stack sx = {
            {
                gap: {
                    lg:'35px',
                    xs : ' 20px'
                }
            }
        }>
         <Typography variant = "h3">
            {name}
         </Typography>
         <Typography variant = "h6">
            Execises keep you strong . {name} {` `}
            is one of the best exercises tot target your { target }. It will help you improve your mood and gain energy

           
         </Typography>
         {extraDetail.map((item) =>(
            
         ))}
        </Stack>
    </Stack>
  )
}

export default Details