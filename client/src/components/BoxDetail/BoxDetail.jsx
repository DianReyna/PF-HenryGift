import React, { useState , useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { getBoxes } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../Products/ProductCard";
import './BoxDetail.css';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';



export default function BoxDetail() {
    // const [boxDetail, setBoxDetail]  = useState({hola: 'cargando'});
    // const params = useParams()
    const dispatch = useDispatch();
    const {boxes} = useSelector ((state)=> state.boxes)



useEffect(()=>{
    dispatch(getBoxes())
},[dispatch])


  return (
    <Container maxWidth="xl">
    <div>
          
      {
        boxes[0]? 
        <Grid container rowSpacing={4} className='containerDetail'>
          <Grid item xs={6}>
            <img src={boxes[0].imagen} alt='img not found' className="imagenDetail"/>
          </Grid>
          <Grid item xs={6}>
            <div className="informationDetail">
              <h1>Acerca de esta BOX:</h1>
              
              <h3>Box:{boxes[0].name}</h3>
              <h3><PersonOutlineIcon color="secondary"/> Person: {boxes[0].person}</h3>
              <h3><CardGiftcardIcon color="secondary"/> Contains {boxes[0].product.length} options</h3>
              <h3><StarBorderPurple500Icon color="secondary"/> Ranking: {boxes[0].ranking}</h3>
              <h1>Price: {boxes[0].price}</h1>
              <h3>Expiration date: 30 days</h3>
            </div>
          </Grid>
          <h3>Detail:{boxes[0].detail}</h3>
          
          {boxes[0].product && boxes[0].product.map((product)=> 
          (<ProductCard 
          key={product.id}
          id={product.id}
          imagen={product.imagen} 
          name={product.name} 
          description={product.description}
          location={product.location}/>))}

        </Grid>
        :'nada'

      }
    </div>
    </Container>
  )
}

