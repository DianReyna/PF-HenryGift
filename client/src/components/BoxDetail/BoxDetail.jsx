import React, { useState , useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { getBoxes } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../Products/ProductCard";

export default function BoxDetail() {
    // const [boxDetail, setBoxDetail]  = useState({hola: 'cargando'});
    // const params = useParams()
    const dispatch = useDispatch();
    const {boxes} = useSelector ((state)=> state.boxes)



useEffect(()=>{
    dispatch(getBoxes())
},[dispatch])


  return (
    <div>
  
      {
        boxes[1]? 
        <div>
        <img src={boxes[1].image} alt='img not found'/>
        <h4>Ranking: {boxes[1].ranking}</h4>
        <h2>Box:{boxes[1].name}</h2>
        <p>Detail:{boxes[1].detail}</p>
        <h4>Person: {boxes[1].person}</h4>
        <h4>Price: {boxes[1].price}</h4>
        <h4>Expiration date: {boxes[1].expiration_date}</h4>
        {boxes[1].product && boxes[1].product.map((product)=> 
        (<ProductCard 
        key={product.id}
        id={product.id}
        imagen={product.imagen} 
        name={product.name} 
        description={product.description}
        location={product.location}/>))}
        </div>
        :'nada'

      }



            {/* <img src={image} alt='img not found'/>
            <h3>{id}</h3>
            <h3>Product: {name}</h3>
            <h3>Description: {description}</h3>
            <h3>price: {price}</h3>
            <h3>Location: {location}</h3> */}

        



      {/* {boxDetail ?
      <div>
        <img src={boxDetail.image} alt='img not found'/>
        <h4>Ranking: {boxDetail.ranking}</h4>
        <h2>Box:{boxDetail.name}</h2>
        <p>Detail:{boxDetail.detail}</p>
        <h4>Person: {boxDetail.person}</h4>
        <h4>Price: {boxDetail.price}</h4>
        <h4>Expiration date: {boxDetail.expiration_date}</h4>
        {console.log('infor'+boxDetail.product)}
        



        
      </div>
      :<h3>Loading</h3>
        } */}
    </div>
  )
  {/* {boxDetail.product.map((prod, index) => {
    console.log(prod)
  })} */}
  {/* {boxDetail.product && boxDetail.product.map((product)=> 
        (<ProductCard
        name={product.name} 
        description={product.description}
        location={product.location}/>))} */}
}

