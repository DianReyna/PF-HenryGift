import React from "react";
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import img1 from "../../assets/1carousel.jpg";
import img2 from "../../assets/2carousel.jpg";
import img3 from "../../assets/3carousel.jpg";
import img4 from "../../assets/4carousel.jpg";
import img5 from "../../assets/5carousel.jpg";
import img6 from "../../assets/6carousel.jpg";
import './Carousel.css';

export default function Carrusel(){
        return (
            
   <Carousel showArrows={true}  infiniteLoop dynamicHeight animationHandler={"fade"} autoPlay useKeyboardArrows showThumbs={false} showStatus={false}>
                <div className="container">
                    <img src={img3} alt="imag3"/>
                    <div className="text-container ">
                        <h2>Give incredible experiences</h2>
                        <p>Unique moments of happiness</p>
                    </div>
                </div>
                <div className="container">
                    <img src={img2} alt="imag2"/>
                    <div className="text-container ">
                        <h2>Give amazing surprises</h2>
                        <p>Family moments</p>
                    </div>
                </div>
                <div className="container">
                    <img src={img1} alt="imag1"/>
                    <div className="text-container ">
                        <h2>Surprise with new adventures</h2>
                        <p>Gifts to share</p>
                    </div>
                </div>
                <div className="container">
                    <img src={img4} alt="imag4"/>
                    <div className="text-container ">
                        <h2>Give incredible surprises</h2>
                        <p> Unique moments</p>
                    </div>
                </div>
                <div className="container">
                    <img src={img5} alt="imag5"/>
                    <div className="text-container ">
                        <h2>Give and share</h2>
                        <p> A delight to your sense of taste</p>
                    </div>
                </div>
                <div className="container">
                    <img src={img6} alt="imag6"/>
                    <div className="text-container ">
                        <h2>Surprise yourself</h2>
                        <p> Moments of relaxation</p>
                    </div>
                </div>
            </Carousel>
        );
};
// import React, { useEffect } from "react";
// import { useState } from "react";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {carouselData} from "./carousel-data";
// import styled from 'styled-components'

// const Container = styled.div`
//   width: 100%;
//   height: 30rem;
//   position: relative;
//   overflow:hidden;
// `
// const BtnLeft = styled.div`
//   /* border: 1px solid gold; */
//   border-radius: 50%;
//   height: 25px;
//   width: 25px;
//   position: absolute;
//   left: 1rem;
//   top: 45%;
//   padding: 2rem;
//   background-color: rgba(0, 0, 0, 0.8);
//   cursor: pointer;
// `
// const BtnRight = styled.div`
//   border-radius: 50%;
//   height: 25px;
//   width: 25px;
//   position: absolute;
//   right: 1rem;
//   top: 45%;
//   padding: 2rem;
//   background-color: rgba(0, 0, 0, 0.8);
//   cursor: pointer;
// `
// const Img=styled.img`
// position: relative;
// width: 100%;
// height: 100%; 
// inset:0;
// `
// const Title=styled.h3`
// position: absolute;
// top: 50%;
// left: 50%;
// transform:translate(-50%,-50%);
// text-align:center;
// font-size:2.5rem;
// font-family:cursive;
// text-shadow:0 0 8px rgba(0,0,0,0.8);
// `
// const Description=styled.p`
// position: absolute;
// top: 70%;
// left: 50%;
// transform:translate(-50%,-50%);
// text-align:center;
// padding:2rem;
// font-size:1.5rem;
// text-shadow:0 0 8px rgba(0,0,0,0.8);
// `
// export default function Carrusel() {   
//   const [index, setIndex] = useState(0);
//   // useEffect(()=>{
//   // setTimeout(()=>{
//   //   index >= 0 && index < carouselData.length - 1 ? setIndex(index + 1) : setIndex(0);
//   // },3000)
//   // },[index])
//   const buttonNext = () =>
//     index >= 0 && index < carouselData.length - 1 ? setIndex(index + 1) : setIndex(0); //  ---> 0-1-2-0-1-2
//   const buttonPrevius = () =>
//     index <= 0 ? setIndex(carouselData.length - 1) : setIndex(index - 1); //  0-1-2-0-1-2 <---

//   return (
//     <Container >
//       <Img src={carouselData[index].image} alt="slider-image" width="900" height="400" />
//       <BtnLeft  onClick={() => buttonPrevius()}>
//         <ArrowBackIosIcon sx={{padding: '0', margin:'0',fontSize: '30px'}} />
//       </BtnLeft>
//       <Title>{carouselData[index].title}</Title>
//       <Description>{carouselData[index].description}</Description>
//       <BtnRight  onClick={() => buttonNext()}>
//         <ArrowForwardIosIcon sx={{padding: '0', margin:'0',fontSize: '30px'}} />
//       </BtnRight>
//     </Container>
//   );
// }
