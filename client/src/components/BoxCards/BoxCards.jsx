import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoxes } from '../../redux/actions/boxesActions';
import BoxCard from '../BoxCard/BoxCard';

import {Grid} from '@mui/material';


export default function BoxCards() {

const dispatch = useDispatch();
const {boxes} = useSelector ((state)=> state.boxes)


useEffect(()=>{
dispatch(getBoxes())
},[])

return (
<div>
    <Grid container spacing={3}>
    {
        boxes?.map((box, index) =>(
            <Grid item xs={3}>
                <BoxCard key={index}
                image={box.image}
                id={box.id}
                ranking={box.ranking}
                name={box.name}
                detail={box.detail}
                person={box.person}
                price={box.price}
                expiration_date={box.expiration_date}
                />
            </Grid>
                
        ))
    }
    </Grid>
</div>
) 
}
