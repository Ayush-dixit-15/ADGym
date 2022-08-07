import React, { useEffect, useState } from 'react';
import { Box} from '@mui/system';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const SearchExercises = () => {
  return (
    <Stack alignItems = "center " mt= "37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={
            {
                fontSize:{ lg: '44px', xs:'30px'}
            }
        } mb="50px" textAlign="center">Awesome Exercises You Should Know</Typography>
        <Box position ="relative" mb="72px">
            <TextField
              height="76px"
              value=""
              onChange={(e) =>{}} placeholder="Search Exercises"
              type="text"/>
        </Box>
    </Stack>
  )
}

export default SearchExercises