import React from "react";
import { useState } from "react";

import style from './Carousel.module.css';
import {Button} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Carrusel() {
const images=['https://www.zadar.hr/datastore/imagestore/1920x900/1920x900_1563031946adventure_and_outdoor.jpg?v=1563032988',
'https://cache.marriott.com/is/image/marriotts7prod/si-limsi-mariva-restaurant--30991:Feature-Hor',
'https://media-cdn.tripadvisor.com/media/photo-s/0d/4e/51/0a/room-for-individualtreatments.jpg'];

const [index,setIndex]=useState(0);


const buttonNext=()=>(index>=0&&index<images.length-1)?setIndex(index+1):setIndex(0) //  ---> 0-1-2-0-1-2
const buttonPrevius=()=>(index<=0)? setIndex(images.length-1):setIndex(index-1) //  0-1-2-0-1-2 <--- 

  return (
    <div className={style.slide}>
      <Button className={style.buttonPrev} onClick={()=>buttonPrevius()}><ArrowBackIosNewIcon/></Button>
      <img src={images[index]} alt='slider-image' width='900' height='400'/>
      <Button className={style.buttonNext} onClick={()=>buttonNext()}><ArrowForwardIosIcon /></Button>
    </div>
  )
}
