import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBoxes } from '../../redux/actions/boxesActions';
import BoxCard from '../Box/BoxCard';

export default function Home() {

  const dispatch = useDispatch();
  const {boxes} = useSelector ((state)=> state.boxes)
  

  useEffect(()=>{
    dispatch(getBoxes())
  },[])

  return (
    <div>
      <h2>Soy Home</h2>

      {
        <ul>
          {boxes?.map((box, index) => (
          <BoxCard key={index}
          image={box.image}
          id={box.id}
          ranking={box.anking}
          box={box.name}
          detail={box.detail}
          person={box.person}
          price={box.price}
          expiration_date={box.expiration_date}/>
          ))}
          </ul>
            }
            <Link to='/boxDetail'>View more</Link>
    </div>
  ) 
}

{/* {boxes&&boxes.map((el,index)=><h1 key={index}>{el.name}</h1>)} */}