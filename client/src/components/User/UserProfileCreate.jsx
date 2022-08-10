//Nombre 
// Apellido
// Fecha nacimiento
// Email
// Contraseña
// Regalos recibidos
// Compras realizadas

import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";
import validateUser from "./validateUser";

const UserProfileCreate = () => {
    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState({});
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
        dispatch(
            getUsers({
                first_name: users.first_name,
                last_name: users.last_name,
                email: users.email,
                phone: users.phone,
                password: users.password,
            })
          );
           cleanInputs();
        };

    const handleChange = (e) =>{
        setUsers({
            ...users, 
            [e.target.name]: e.target.value,
        });
        setErrors(
          validateUser({
            ...users,
            [e.target.name]: e.target.value,
          })
        );
      };

    const cleanInputs = () => {
        setUsers({
            first_name:"",
            last_name:"",
            email: "",
            phone: "",
            password: "",
        });
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
                    {errors.first_name && <p>{errors.first_name}</p>}
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
                    {errors.last_name && <p>{errors.last_name}</p>}
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
                    {errors.email && <p>{errors.email}</p>}
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
                    {errors.phone && <p>{errors.phone}</p>}
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
                    {errors.password && <p>{errors.password}</p>}
                </Grid>
                <Grid item xs={2} sx={{ m: 5, textAlign:'center' }}>
                    <Button 
                    type="submit">GUARDAR CAMBIOS</Button>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    )
}



export default UserProfileCreate;
               