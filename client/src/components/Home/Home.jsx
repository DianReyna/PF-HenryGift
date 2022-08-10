import React from "react";
import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import ContainerFilters from '../ContainerFilters/ContainerFilters'
import styled from 'styled-components'
const ContainerHome = styled.div`
  
`

export default function Home() {
  return (
    <ContainerHome>
      <Carousel />
      <br /><br />
      <hr />
      <ContainerFilters />
      <hr />
      <BoxCards />
    </ContainerHome>
  );
}
