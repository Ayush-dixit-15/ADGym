import { Box } from '@mui/system'
import React from 'react'


const HorizontalScrollbar = ( { data }) =>{
       return (
        <div>
           { data.map((item) => (<Box
             key = {item.id || item}
             itemId = {item.id || item}
             title = {item.id || item} 
             m = >

           </Box>))} 
        </div>
       )
}

export default HorizontalScrollbar