//Nombre 
// Apellido
// Fecha nacimiento
// Email
// Contraseña
// Regalos recibidos
// Compras realizadas

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import { getAllBoxes } from "../../redux/reducer/boxesSlice";

const UserProfile = () => {

       
    const [ users, setUsers] = useState({
        first_name: "",
        last_name: "",
        email:"",
        access_level: false,
        phone: "",
        password:"",
        shopping: [],
        gifts:[]
    });


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) =>{
        setUsers({
            ...users, 
            [e.target.name]: e.target.value,
        })
    };

    return(
        
        
        <Paper
        sx={{
            p: 3,
        }} 
        >  
        <Grid container spacing={2} component="form"  onSubmit={handleSubmit}
        sx={{mt: 3, justifyContent: 'Center'}}
        >
            <Grid item container xs={12} ms={6} spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    name="first_name"
                    required
                    fullWidth
                    label="Nombre"
                    value={users.first_name}
                    onChange={handleChange}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="last_name"
                    required
                    fullWidth
                    label="Apellido"
                    value={users.last_name}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="email"
                    type="email"
                    required
                    fullWidth
                    label="Email"
                    value={users.email}
                    onChange={handleChange}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField
                    name="phone"
                    required
                    fullWidth
                    label="Telefono"
                    value={users.phone}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="password"
                    required
                    fullWidth
                    label="Contraseña"
                    value={users.password}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sx={{ m: 5, textAlingn:'center'}}>
                    <Button 
                    type="submit">GUARDAR CAMBIOS</Button>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    )
}



export default UserProfile;
                    //         <div>
                    
                    //         <form onSubmit={(e) => handleSubmit(e)}>
                    //              <div>
                    //                 <label>Nombre: </label>
                    //                 <input
                    //                     type='text'  
                    //                     name="first_name"
                    //                     required
                    //                     value={users.first_name}
                    //                     onChange={handleChange}
                    //                     autoFocus/>
                    //             </div>
                    //             <div>
                    //                 <label>Apellido: </label>
                    //                 <input
                    //                     type='text'   
                    //                     name="last_name"
                    //                     required
                    //                     fullWidth
                    //                     lebel="Apellido"
                    //                     value={users.last_name}
                    //                     onChange={handleChange}/>
                    //                 </div>  
                    //                 <div>
                    //                 <label>Email: </label>
                    //                 <input
                    //                     name="email"
                    //                     type="email"
                    //                     required
                    //                     fullWidth
                    //                     lebel="Email"
                    //                     value={users.email}
                    //                     onChange={handleChange}/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Nivel de acceso: </label>
                    //                 <input  
                    //                     type='text'
                    //                     name="access_level"
                    //                     required
                    //                     fullWidth
                    //                     lebel="Nivel de acceso"
                    //                     value={users.access_level}
                    //                     onChange={handleChange}/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Telefono: </label>
                    //                 <input  
                    //                     type='text'
                    //                     name="phone"
                    //                     required
                    //                     fullWidth
                    //                     lebel="Telefono"
                    //                     value={users.phone}
                    //                     onChange={handleChange}/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Contraseña: </label>
                    //                 <input  
                    //                     type='text'
                    //                     name="password"
                    //                     required
                    //                     fullWidth
                    //                     lebel="Contraseña"
                    //                     value={users.password}
                    //                     onChange={handleChange}/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Compras realizadas: </label>
                    //                 <input  
                    //                     type='text'
                    //                     name="shopping"
                    //                     fullWidth
                    //                     lebel="Compras realizadas"
                    //                     value={users.shopping}
                    //                     onChange={handleChange}/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Regalos recibidos: </label>
                    //                 <input 
                    //                     required
                    //                     fullWidth
                    //                     lebel="Nombre"
                    //                     value={users.first_name}
                    //                     onChange={handleChange}
                    //                     autoFocus/>
                    //                  </div>  
                    //                  <div>
                    //                 <label>Apellido: </label>
                    //                 <input 
                    //                     name="gifts"
                    //                     fullWidth
                    //                     lebel="Regalos recibidos"
                    //                     value={users.gifts}
                    //                     onChange={handleChange}
                    //                     autoFocus/>
                    //                  </div>  
                    //                  <button type="submit">GUARDAR CAMBIOS</button>
                    //         </form>
                    //         </div>
                    //     )
                    // }
