import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBoxes } from '../../redux/actions/boxesActions';
import BoxCard from '../BoxCard/BoxCard';


export default function BoxCards() {

const dispatch = useDispatch();
const {boxes} = useSelector ((state)=> state.boxes)


useEffect(()=>{
dispatch(getBoxes())
},[])

return (
<div>
    <h2>Soy componentes que contienen las cartas</h2>
    {
        boxes?.map((box, index) =>(
                <BoxCard key={index}
                image={box.imagen}
                id={box.id}
                ranking={box.anking}
                box={box.name}
                detail={box.detail}
                person={box.person}
                price={box.price}
                expiration_date={box.expiration_date}/>
        ))
    }
</div>
) 
}
