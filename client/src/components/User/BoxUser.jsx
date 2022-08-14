import React from "react";



export default function BoxUser({email, first_name, last_name, phone }) {
     return (
        <div>
            <div>
            <h5></h5>
            <h5>Nombre: {first_name}</h5>
            <h5>Apellido: {last_name}</h5>
            <h5>Email: {email}</h5>
            <h5>Telefono: {phone}</h5>
            </div>
        </div>
    );
}
   