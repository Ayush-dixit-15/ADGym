import React, { useEffect, useState } from 'react';
import { Box,TextField} from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SearchExercises = () => {
  return (
    <Stack alignItems = "center " mt= "37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={
            {
                fontSize:{ lg: '44px', xs:'30px'}
            }
        } mb="50px" textAlign="center">Awesome Exercises You Should Know</Typography>
    </Stack>
  )
}

export default SearchExercises