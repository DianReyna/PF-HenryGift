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
            
   <Carousel showArrows={false}  infiniteLoop dynamicHeight animationHandler={"fade"} autoPlay useKeyboardArrows showThumbs={false} showStatus={false}>
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
