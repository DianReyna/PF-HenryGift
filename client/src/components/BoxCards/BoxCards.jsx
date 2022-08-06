import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getBoxesPerPage} from '../../redux/actions/boxesActions';
import BoxCard from '../BoxCard/BoxCard';
import AppPagination from '../AppPagination/AppPagination';

import {Grid} from '@mui/material';


export default function BoxCards() {

const dispatch = useDispatch();
const {boxes} = useSelector ((state)=> state.boxes)

const [page,setPage]=useState(0);
// const [numberOfPages,setNumberOfPages]=useState(8);

useEffect(()=>{
dispatch(getBoxesPerPage(page))
},[page])

return (
<div>
    <Grid container spacing={3}>
    {
        boxes?.map((box, index) =>(
            <Grid item xs={3}>
                <BoxCard key={index}
                image={box.imagen}
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
    <AppPagination setPage={setPage} page={page}/>
</div>
) 
}
