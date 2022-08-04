import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoxes } from '../../redux/actions/boxesActions';


export default function Home() {

  const dispatch = useDispatch();
  const boxes = useSelector ((state)=> state.boxes)
  

  useEffect(()=>{
    dispatch(getBoxes())
  },[])

  return (
    <div>
      <h2>Soy Home</h2>
      {boxes&&boxes.map((el,index)=><h1 key={index}>{el.name}</h1>)}
    </div>
  )
}
