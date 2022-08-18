import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper} from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {putUsersUpdate, getUsersById, getUsers} from "../../redux/actions/userActions";

export default function UserProfileEdit({userId}) {

    const dispatch = useDispatch();  
    const [currentUser, setCurrentUser] = useState({});


    const[first_name, setFirst_name] = useState("");
    const[last_name, setLast_name] = useState("");
    const[email, setEmail] = useState("");
    const[oldEmail, setOldEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[password, setPassword] = useState("");
    const[shopping, setSopping] = useState(false);
    const[gifts, setGifts] = useState(false);

    
    const {userDetail} = useSelector((state) => state.users);
    

    useEffect(() => {
        dispatch(getUsersById('tamaraber9@gmail.com')); 
        // setTimeout(()=>{
            // },1000)
        }, [dispatch])
        
        useEffect(() => {
                if(Object.keys(userDetail).length !== 0){
                setFirst_name(userDetail.first_name) 
                setLast_name(userDetail.last_name)
                setEmail(userDetail.email)
                setOldEmail(userDetail.email)
                setPhone(userDetail.phone)
            }
            }, [userDetail]) 

       
    const handleSubmit = (e) =>{
        e.preventDefault();
        // {
        //     "email": "alegrices@independent.co.uk",
        //     "dateBirth": "1998-04-23T00:00:00.000Z",
        //     "first_name": "Pablo",
        //     "last_name": "Le Grice",
        //     "access_level": false,
        //     "phone": "5763151587",
        //     "banned": false
        // }
        let user ={
                email: email,
                first_name: first_name,
                last_name: last_name,
                phone: phone,
         
            }
        let id = oldEmail
        dispatch(putUsersUpdate(id, user))
          };

    return (
        <Paper 
        sx={{
            p: 3,
        }} 
        >  
    <Grid container spacing={2} component="form"  
    sx={{mt: 3, justifyContent: 'Center'}}
    >
        <Button variant="Abrir mi Box" href='/userprofile'>Volver</Button>
        <Grid item container xs={12} ms={6} spacing={2}>
            <Grid item xs={12}>
                <TextField
                name="first_name"
                fullWidth
                label="Nombre"
                type="text"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                autoFocus
                />
            </Grid>
         
            <Grid item xs={12}>
                <TextField
                name="last_name"
                fullWidth
                label="Apellido"
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                autoFocus
                />              
            </Grid>  
            <Grid item xs={12}>
                <TextField
                name="email"
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                />
            </Grid>  <Grid item xs={12}>
                <TextField
                name="phone"
                fullWidth
                label="Telefono"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
                />
            </Grid>  <Grid item xs={12}>
                <TextField
                name="password"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                />
                {/* {errors.first_name && <p>{errors.first_name}</p>} */}
            </Grid>  
           <Grid item xs={2} sx={{ m: 5, textAlign:'center' }}>
                    <Button onClick={handleSubmit}
                    type="submit"> GUARDAR CAMBIOS </Button>
                </Grid>
            </Grid>
        </Grid>
       </Paper>        
    );
}