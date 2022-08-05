import React from "react";
import {Box} from '@mui/material'
import { Stack } from '@mui/material'

import { Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import {Card, CardMedia} from '@mui/material';

export default function BoxCard ({id, name, price, category, ranking, person, expiration_date, detail, image, gift}){

    return(

        <Card sx={{maxWidth:345}}>
            <CardMedia 
            component="img"
            height="140"
            image={image}
            alt='img not found'
            />      
            <Link to={`/box/${id}`}>{name}</Link>
            <h3>Ranking: {ranking}</h3>
            <h3>{name}</h3>
            <h3>Detail:{detail}</h3>
            <h3>Persons:{person}</h3>
            <h3>price: ${price}</h3>
            <h3>Expiration date: {expiration_date}</h3>
            {/* <h3>Category: {category}</h3>
            <h3>Gift:{gift}</h3> */} 
        </Card>

    );
}