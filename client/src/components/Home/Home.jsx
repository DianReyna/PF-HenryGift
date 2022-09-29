import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import HowDoesItWork from "../HowDoesItWork/HowDoesItWork";


export default function Home() {
  return (
    <div>
      <Carousel />
      <br /><br />
      <hr />
      <ContainerFilters />
      <hr />
      <BoxCards />
      <hr />
      <HowDoesItWork/>
    </div>
  );
}
