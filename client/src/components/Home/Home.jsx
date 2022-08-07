import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import NavBar from '../NavBar/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousel />
      <BoxCards />
    </div>
  );
}
