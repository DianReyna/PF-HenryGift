import React from "react";

export default function ProductCard ({id, name, description, location, imagen}){
    return(
        <div>
            <img src={imagen} alt='img not found'/>
            <h3>{id}</h3>
            <h3>Product: {name}</h3>
            <h3>Description: {description}</h3>
            <h3>Location: {location}</h3>
        </div>
    );
}