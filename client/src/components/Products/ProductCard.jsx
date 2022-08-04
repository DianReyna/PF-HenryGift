import React from "react";

export default function ProductCard ({id, name, price, description, location}){
    return(
        <div>
            <img src={image} alt='img not found'/>
            <h3>{id}</h3>
            <h3>Product: {name}</h3>
            <h3>Description: {description}</h3>
            <h3>price: {price}</h3>
            <h3>Location: {location}</h3>
        </div>
    );
}