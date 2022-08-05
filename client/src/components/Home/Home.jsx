import React from 'react';
// import { getBoxes } from '../../redux/actions/boxesActions';
// import ProductCard from '../Products/ProductCard';
import BoxCards from '../BoxCards/BoxCards'
import Carousel from '../Carousel/Carousel';
import Pages from '../Pages/Pages';


export default function Home() {
  return (
    <div>
      <h2>Soy Home</h2>
      <Carousel/>
      <BoxCards />
      <Pages/>
    </div>
  ) 
}

{/* {boxes&&boxes.map((el,index)=><h1 key={index}>{el.name}</h1>)} */}