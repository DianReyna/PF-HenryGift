import React from "react";
 

export default function BoxCard ({id, name, price, category, ranking, person, expiration_date, detail, image, gift}){
    return(
        <div>
            <img src={image} alt='img not found'/>
            <h3>{id}</h3>
            <h3>Ranking: {ranking}</h3>
            <h3>{name}</h3>
            <h3>Detail:{detail}</h3>
            <h3>Persons:{person}</h3>
            <h3>price: ${price}</h3>
            <h3>Expiration date: {expiration_date}</h3>
            {/* <h3>Category: {category}</h3>
            <h3>Gift:{gift}</h3> */} 
        </div>
    );
}