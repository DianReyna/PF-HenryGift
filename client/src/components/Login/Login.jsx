import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Visibility,VisibilityOff,Email,Google,Facebook} from '@mui/icons-material';
import {Button,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Box, Typography} from '@mui/material';
import { validate } from './validate';
import styled from "styled-components";
const Form = styled.form`
   display:flex;
   flex-direction:column;
   text-align:center;
   align-items:center
`;

export default function Login() {
    const [values, setValues] = useState({
        email:'',
        password: '',
        showPassword: false,
      });
    const [errors,setErrors]=useState({})
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setErrors(validate({ ...values, [prop]: event.target.value }))
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        console.log(errors);
      };
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
          <Form onSubmit={(e) => handleSubmit(e)}>
          <Typography variant="h3" sx={{margin:3}} color="primary">Login Here</Typography>
          <Button sx={{ m: 1, width: '40ch' }} variant="outlined" startIcon={<Google />}>Login with Gmail</Button>
          <Button sx={{ m: 1, width: '40ch' }} variant="outlined" startIcon={<Facebook />}>Login with Facebook</Button>
          <Typography variant="h7" >or</Typography>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type='text'
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                  <Email/>
              </InputAdornment>
            }
            label="Email"
          />
          {errors.email&&(<Typography component={"p"} sx={{ fontSize: 13,color:"red" }} >{errors.email}</Typography>)}
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password&&(<Typography component={"p"} sx={{ fontSize: 13 ,color:"red"}}>{errors.password}</Typography>)} 
        </FormControl>
        <Button sx={{ m: 1,width: '40ch'}} type="submit" variant="contained">Login</Button>
        <Box>
        <Typography sx={{ m: 1 }} variant="h7" >Do not you have an account yet?</Typography>
        <Button sx={{ m: 1 }} ><Link to="/register" style={{ textDecoration: 'none',color:"blue" }} >Sign up</Link></Button>
        </Box>
          </Form>
         
        </Box>
        
      );
}
