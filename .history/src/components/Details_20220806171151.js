import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../images/icons/body-part.png';
import TargetImage from '../images/icons/target.png';
import EquipmentImage from '../images/icons/equipment.png';
const Details = ( { exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
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
         <Typography>
            {name}
         </Typography>
         <Typography>
            Execises keep you strong . {name} {` `}
            is one of the best exercises tot target your { target }. It will help you i

           
         </Typography>
        </Stack>
    </Stack>
  )
}

export default Details