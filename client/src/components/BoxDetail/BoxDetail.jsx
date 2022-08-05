import React, { useEffect} from "react";
import { getBoxes } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import ProductCard from "../Products/ProductCard";
import { Card, Grid } from "@mui/material";


export default function BoxDetail() {
    const dispatch = useDispatch();
    let {idBox}=useParams();
    const {boxes} = useSelector ((state)=> state.boxes)

useEffect(()=>{
    dispatch(getBoxes())
},[dispatch])

let element=boxes.find(el=>el.id===idBox)
  return (
    <div>
      {
        element? 
        <div>
        <div>
        <img src={element.image} alt='img not found'/>
        <h4>Ranking: {element.ranking}</h4>
        <h2>Box:{element.name}</h2>
        <p>Detail:{element.detail}</p>
        <h4>Person: {element.person}</h4>
        <h4>Price: {element.price}</h4>
        <h4>Expiration date: {element.expiration_date}</h4>
        </div>
        <Grid container spacing={10}>
        {element.product && element.product.map((product)=> 
        (<ProductCard 
        key={product.id}
        id={product.id}
        imagen={product.imagen} 
        name={product.name} 
        description={product.description}
        location={product.location}/>))}
        </Grid>
        </div>
        :'nada'
      }
    </div>
  )
}

