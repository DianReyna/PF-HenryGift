import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import NavBar from '../NavBar/NavBar'
import Sort from "../Sort/Sort"
import ContainerFilters from '../ContainerFilters/ContainerFilters'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousel />
      <Sort />
      <ContainerFilters />
      <BoxCards />
    </div>
  );
}
