import React from "react";
import { useState } from "react";
import style from "./Carousel.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Container = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
`
const BtnLeft = styled.div`
  /* border: 1px solid gold; */
  border-radius: 50%;
  height: 25px;
  width: 25px;
  position: absolute;
  left: 1rem;
  top: 45%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`
const BtnRight = styled.div`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  position: absolute;
  right: 1rem;
  top: 45%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
`
export default function Carrusel() {
  const images = [
    "https://www.zadar.hr/datastore/imagestore/1920x900/1920x900_1563031946adventure_and_outdoor.jpg?v=1563032988",
    "https://cache.marriott.com/is/image/marriotts7prod/si-limsi-mariva-restaurant--30991:Feature-Hor",
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/4e/51/0a/room-for-individualtreatments.jpg",
  ];

  const [index, setIndex] = useState(0);

  const buttonNext = () =>
    index >= 0 && index < images.length - 1 ? setIndex(index + 1) : setIndex(0); //  ---> 0-1-2-0-1-2
  const buttonPrevius = () =>
    index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1); //  0-1-2-0-1-2 <---

  return (
    <Container className={style.slide}>
      <img src={images[index]} alt="slider-image" width="900" height="400" />
      <BtnLeft className={style.buttonPrev} onClick={() => buttonPrevius()}>
        <ArrowBackIosIcon sx={{padding: '0', margin:'0',fontSize: '30px'}} />
      </BtnLeft>
      <BtnRight className={style.buttonNext} onClick={() => buttonNext()}>
        <ArrowForwardIosIcon sx={{padding: '0', margin:'0',fontSize: '30px'}} />
      </BtnRight>
    </Container>
  );
}
