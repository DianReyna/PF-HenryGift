import React ,{useState} from 'react';
import {Button,Box,TextField,Typography} from '@mui/material';
import styled from "styled-components";
const Form = styled.form`
   display:flex;
   flex-direction:column;
   text-align:center;
   align-items:center;
   background-color: white;
   padding:10px;
   margin:10px;
`;


export default function ResetPassword() {
  const [password, setPassword] = useState('');
//   const handleChange = (e) =>{
//     setPassword(e.target.value)
//   }
  const  handleSubmit=(e)=>{
    e.preventDefault();
  
  console.log(password)
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
    <Typography variant="h4" align="center" sx={{ m: 1 }} >Here you can reset your password</Typography>
    <Typography component={"p"}align="center" sx={{ m: 1 }} >Enter your new password</Typography>
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <TextField
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    // onChange={()handleChange()}
                    sx={{ m: 1,color:"white" }}
                  />
      <TextField
        type="password"
        placeholder="Confirm password"
        label="Confirm Password"
        variant="outlined"
        fullWidth
        // onChange={handleChange()}
        sx={{ m: 1,color:"white"}}
                />
    <Button sx={{ m: 1,width: '40ch', backgroundColor: "#f44336",borderColor:"#f44336",color:"black" }} variant="outlined" type="submit" >
    Change Password
      </Button>
    <Box>
    </Box>
      </Form>
    </Box>
  );
}
