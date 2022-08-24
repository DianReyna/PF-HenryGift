import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Grid, 
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText, 
  DialogTitle
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

import {putUsersUpdate, getUsersById} from "../../redux/actions/userActions";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


export default function UserProfileEdit() {

    const dispatch = useDispatch();  
    //const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    const[first_name, setFirst_name] = useState("");
    const[last_name, setLast_name] = useState("");
    const[email, setEmail] = useState("");
    const[oldEmail, setOldEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[dateBirth, setdateBirth]=useState("")
    const[password, setPassword] = useState("");

    const {user}  = useSelector((state) => state.auth);
    const {userDetail} = useSelector((state)=> state.users)
    

    useEffect(() => {
        dispatch(getUsersById(user._id));      
        }, [dispatch])
        
        useEffect(() => {
                if(Object.keys(userDetail).length !== 0){
                setFirst_name(userDetail.first_name) 
                setLast_name(userDetail.last_name)
                setEmail(userDetail.email)
                setOldEmail(userDetail.email)
                setPhone(userDetail.phone)
                setdateBirth(userDetail.dateBirth)
            }
            }, [userDetail]) 

       
    const handleSubmit = (e) =>{
        e.preventDefault();
                let user ={
                email: email,
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                dateBirth: dateBirth
         
            }
        let id = oldEmail
        dispatch(putUsersUpdate(id, user))
        setOpen(false);
        navigate('/userprofile')
        toast.success("Changes saved successfully", {
          position: "top-right",
        });
          };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
         <Button variant="Abrir mi Box"  href="/userprofile" color='black'>
      <KeyboardBackspaceOutlinedIcon/> Back </Button>
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
            {/* <Grid item xs={12}>
                <TextField
                name="email"
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                />
            </Grid>   */}
            <Grid item xs={12}>
                <TextField
                name="phone"
                fullWidth
                label="Telefono"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
                />
            </Grid>  
                <Grid item xs={12}>
                <TextField
                name="dateBirth"
                fullWidth
                label=""
                type="date"
                value={dateBirth}
                onChange={(e) => setdateBirth(e.target.value)}
                autoFocus
                />
            </Grid>  
            {/* <Grid item xs={12}>
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
            {/* </Grid>    */}
                      <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                Save changes
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Are you sure you want to save your changes?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} autoFocus>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>            
            </Grid>
        </Grid>
       </Paper>        
    );
}


 

//-----------------Validate-------------


// const [errors, setErrors] = useState({});

//   const [input, setInput] = useState({
//     email: "",
//     first_name: "",
//     last_name:"",
//     phone: "",
//     dateBirth: "",
//     password: "",
//   });

//   const handleOnChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//     setErrors(
//       validateUser({
//         ...input,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };


// const validateUser = (input) => {

  
//     let errors = {};
  
//      if (!first_name.trim()) {
//         errors.first_name = "First name is required"
//     } else if (!/^[a-zA-Z ]+$/.test(first_name)) {
//       errors.first_name = "First name should have a valid forma";
//     }

//     if (!input.last_name.trim()) {
//         errors.last_name = "Last Name is required";
//     } else if(!/^[a-zA-Z ]+$/.test(input.last_name)) {
//       errors.last_name = "Last name should have a valid forma";;
//     }
   
//     if (!input.phone) {
//         errors.phone = "You must provider a phone number";
//       } else if (
//         !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(input.phone)
//       ){       
//         errors.phone = "Phone number should have a valid format";
//       }
      
//       if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password))  { errors.password = "The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter.";
//       }
    
//     return errors;
//   }