import React, { useState , useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { getBoxes } from "../../redux/actions/boxesActions";
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from "../Products/ProductCard";


export default function BoxDetail() {
    const [boxDetail, setBoxDetail]  = useState([]);
    const params = useParams()
    const {boxes} = useSelector(state => state.boxes)
    const dispatch = useDispatch();



useEffect(()=>{
    dispatch(getBoxes(params.id))
},[dispatch])

  return (
    <div>
      {boxDetail ?
      <div>
        <img src={boxDetail.image} alt='img not found'/>
        <h4>Ranking: {boxDetail.ranking}</h4>
        <h2>Box:{boxDetail.name}</h2>
        <p>Detail:{boxDetail.detail}</p>
        <h4>Person: {boxDetail.person}</h4>
        <h4>Price: {boxDetail.price}</h4>
        <h4>Expiration date: {boxDetail.expiration_date}</h4>
        {boxDetail.product && boxDetail.product.map((product)=> 
        <ProductCard
        name={product.name}   
        description={product.description}
        location={product.location}/>)}
        </div>:
        <h3>Loading</h3>
        }
    </div>
  )
}

