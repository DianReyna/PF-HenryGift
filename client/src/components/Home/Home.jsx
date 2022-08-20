import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import ContainerFilters from '../ContainerFilters/ContainerFilters'


export default function Home() {
  return (
    <div>
      <Carousel />
      <br /><br />
      <hr />
      <ContainerFilters />
      <hr />
      <BoxCards />
    </div>
  );
}
