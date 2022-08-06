import React from "react";
// import { getBoxes } from '../../redux/actions/boxesActions';
// import ProductCard from '../Products/ProductCard';

import BoxCards from "../BoxCards/BoxCards";
import Carousel from "../Carousel/Carousel";
import Pages from "../AppPagination/AppPagination";
// import NavBar from '../NavBar/NavBar'

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <Carousel />
      <BoxCards />
    </div>
  );
}

{
  /* {boxes&&boxes.map((el,index)=><h1 key={index}>{el.name}</h1>)} */
}
