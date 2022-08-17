import React ,{useState} from 'react';
import {Email} from '@mui/icons-material';
import {Button,FormControl,InputLabel,OutlinedInput,InputAdornment,Box, Typography} from '@mui/material';
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


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const handleChange = (e) =>{
    setEmail(e.target.value)
  }
  const  handleSubmit=(e)=>{
    e.preventDefault();
  
  console.log(email)
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
    <Typography variant="h4" align="center" sx={{ m: 1 }} >Did you forget your password?</Typography>
    <Typography component={"p"}align="center" sx={{ m: 1 }} >Enter your email and we will send you an email to reset it</Typography>
      <Form onSubmit={(e)=>handleSubmit(e)}>
    <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
      <OutlinedInput
        id="outlined-adornment-email"
        type='text'
        value={email}
        onChange={(e)=>handleChange(e)}
        endAdornment={
          <InputAdornment position="end">
              <Email style={{fill: "#f44336"}}/>
          </InputAdornment>
        }
        label="Email"
        sx={{ fontSize: 20 ,color:"black"}}
      />
    </FormControl>
    <Button sx={{ m: 1,width: '40ch', backgroundColor: "#f44336",borderColor:"#f44336",color:"black" }} variant="outlined" type="submit" >
    Reset Password
      </Button>
    <Box>
    </Box>
      </Form>
    </Box>
    
  );
}
