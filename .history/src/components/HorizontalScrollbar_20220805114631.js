import { Box } from '@mui/system'
import React from 'react'


const HorizontalScrollbar = ( { data }) =>{
       return (
        <div>
           { data.map((item) => (<Box
             key = {item.id || item}
             itemI = {item.id || item}
             key = {item.id || item} />

           </Box>))} 
        </div>
       )
}

export default HorizontalScrollbar