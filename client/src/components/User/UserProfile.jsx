//Nombre 
// Apellido
// Fecha nacimiento
// Email
// Contraseña
// Regalos recibidos
// Compras realizadas


import { Paper } from "@mui/material";
import Grid from "@mui/material";
import Button from "@mui/material";
// import Box from '@mui/material/Box';
import TextField from '@mui/material';
import { useState } from "react";
// import { textAlign } from "@mui/system";

const UserProfile = () => {

    const [ user, setUser] = useState({
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
        setUser({
            ...user, 
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
                    lebel="Nombre"
                    value={user.first_name}
                    onChange={handleChange}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="last_name"
                    required
                    fullWidth
                    lebel="Apellido"
                    value={user.last_name}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="email"
                    type="email"
                    required
                    fullWidth
                    lebel="Email"
                    value={user.email}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="access_level"
                    required
                    fullWidth
                    lebel="Nivel de acceso"
                    value={user.access_level}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="phone"
                    required
                    fullWidth
                    lebel="Phone"
                    value={user.phone}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="password"
                    required
                    fullWidth
                    lebel="Contraseña"
                    value={user.password}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="shopping"
                    fullWidth
                    lebel="Compras realizadas"
                    value={user.shopping}
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    name="gifts"
                    fullWidth
                    lebel="Regalos recibidos"
                    value={user.gifts}
                    onChange={handleChange}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sx={{m: 5, textAlign:"center"}}>
                    <Button 
                    type="submit">GUARDAR CAMBIOS</Button>

                </Grid>
            </Grid>
        </Grid>
        </Paper>
    )
}
export default UserProfile;