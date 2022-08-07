import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import NavBar from '../NavBar/NavBar'
import Sort from "../Sort/Sort"
import MultipleSelectPlaceholder from '../FilterComponent/Filters'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousel />
      <Sort />
      <MultipleSelectPlaceholder />
      <BoxCards />
    </div>
  );
}
