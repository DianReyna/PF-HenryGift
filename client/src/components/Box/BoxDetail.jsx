import React, { useState , useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { getBoxes } from "../../redux/actions/boxesActions";
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoxes } from '../../redux/actions/boxesActions';

export default function boxDetail() {
    const [boxDetail, setBoxDetail]  = useState([]);
    const params = useParams()
    const boxes = useSelector(state => state.boxes)
    const dispatch = useDispatch();



useEffect(()=>{
    dispatch(getBoxes(params.id))
},[dispatch])

  return (
    <div>
      {boxes&&boxes.map((el,index)=><h1 key={index}>{el.name}</h1>)}
      {console.log("soy la boxes", boxes)}

    </div>
  )
}

