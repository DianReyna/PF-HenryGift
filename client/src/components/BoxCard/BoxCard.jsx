import React from "react";
import {Box} from '@mui/material'
import { Stack } from '@mui/material'
import { Grid } from '@mui/material';
 

export default function BoxCard ({id, name, price, category, ranking, person, expiration_date, detail, image, gift}){
    return(
        <Box sx={{
          background: '#e0e0e0',
          color:'black',
          width:'500px',
          padding:'16px, 16px, 16px, 16px', 
          margin:'16px, 16px, 16px, 16px', 
          textAlign:'center',
          borderRadius: 2,
          zIndex: 'tooltip'
        }}
        >
           <Stack spacing={2} >
            <muiRating/>
           </Stack>
            <img src={image} alt='img not found' width={500} height={300}/>
            <h3>{id}</h3>
            <h3>Ranking: {ranking}</h3>
            <h3>{name}</h3>
            <h3>Detail:{detail}</h3>
            <h3>Persons:{person}</h3>
            <h3>price: ${price}</h3>
            <h3>Expiration date: {expiration_date}</h3>
            {/* <h3>Category: {category}</h3>
            <h3>Gift:{gift}</h3> */} 
        </Box>
    );
}