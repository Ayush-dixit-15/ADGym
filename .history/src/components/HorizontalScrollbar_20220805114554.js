import { Box } from '@mui/system'
import React from 'react'


const HorizontalScrollbar = ( { data }) =>{
       return (
        <div>
           { data.map((item) => (<Box
             key = {item.id }>

           </Box>))} 
        </div>
       )
}

export default HorizontalScrollbar