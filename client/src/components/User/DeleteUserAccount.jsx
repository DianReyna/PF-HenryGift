
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, getUsersById} from '../../redux/actions/userActions';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
  } from "@mui/material/";
  import { logout, reset } from "../../redux/reducer/authSlice";

function DeleteUserAccount() {

    const dispatch = useDispatch();
    const deleteUser = useSelector((state) => state.users)
    //(console.log("soy deleteuser",deleteUser))
    const {user}  = useSelector((state) => state.auth);
    const [email, setEmail]= ('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
       dispatch(getUsersById())
    },[dispatch])
    
 
    const handleClickOpen = () => {
       setOpen(true);      
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    
    function handleDelete() {
      dispatch(removeUser(user._id))
      dispatch(logout());
      dispatch(reset());
      navigate("/");      
        setOpen(false);
            toast.success("Account deleted successfully", {
              position: "top-right",
            });
          };
        
  return (                    


    <div>        
        <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon sx={{ fill: "black" }}
         />
        Delete account
        </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleDelete(email)} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteUserAccount
