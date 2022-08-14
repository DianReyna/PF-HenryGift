import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBox } from "../../redux/actions/boxesActions";
import { Paper} from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from '@mui/material';
import {Button, Link} from '@mui/material';

export default function RedeemCoupon() { 
    const dispatch = useDispatch()
    const [code, setCode] = useState("") 
   

    function handleInputChange(e){ 
        e.preventDefault()
        setCode(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBox(code))
    } 

    return(
        <Paper 
        sx={{
            p: 3,
        }} 
        >  
    <Grid container spacing={2} component="form"  
    sx={{mt: 3, justifyContent: 'Center'}}
    >
        <Button variant="Abrir mi Box" href='/userprofile'>Volver</Button>
        <Grid item container xs={12} ms={6} spacing={2}  sx={{justifyContent: 'Center'}}>
            <Grid item xs={4} >
                <TextField
                name="code"
                fullWidth
                label="Codigo"
                placeholder = "Ingrese codigo de canje..."
                type="number"
                value={code}
                onChange={(e)=> handleInputChange(e)}
                autoFocus
                />
            </Grid>
            <Grid item xs={2} sx={{ m: 5, textAlign:'center' }}>
                    <Button onClick={handleSubmit}
                    type="submit"> ABRIR MI BOX </Button>
                </Grid>
            </Grid>
        </Grid>
       </Paper>        
    )
}
