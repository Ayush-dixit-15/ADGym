import { Box } from '@mui/system'
import from 'react'
import React from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

}
const HorizontalScrollbar = ( { data, bodyPart, setBodyPart }) =>{
       return (
        <ScrollMenu>
           { data.map((item) => (<Box
             key = {item.id || item}
             itemId = {item.id || item}
             title = {item.id || item} 
             m = " 0 40px "
             >
           <BodyPart item = {item} bodyPart={bodyPart}
           setBodyPart = {setBodyPart}/>
           </Box>))} 
        </ScrollMenu>
       )
}

export default HorizontalScrollbar