import React ,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { login,reset,googleLogin } from "../../../redux/reducer/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Visibility,VisibilityOff,Email,Google,Facebook} from '@mui/icons-material';
import {Button,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Box, Typography} from '@mui/material';
import { validate } from './validate';
import Spinner from "../spinner";
import styled from "styled-components";
import jwt_decode from 'jwt-decode'
const Form = styled.form`
   display:flex;
   flex-direction:column;
   text-align:center;
   align-items:center
`;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  function handleCallbackResponse(response){
    console.log('Encoded JWT ID token: ' + response.credential)
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    const userData={
      first_name:userObject.given_name,
      last_name:userObject.family_name,
      email: userObject.email,
    }
    dispatch(googleLogin(userData))
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '202012578012-g8ttescfal7fbd7blsnl2i3si6i6acha.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: "outline", size: "large"}
    )
  }, []);

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

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
        if (isSuccess || user) {
          if(user.is_admin){
            navigate('/admin')
          }else{
            navigate('/')
          }
        }
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    
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
        const userData = {
          email:values.email,
          password:values.password,
        }
        dispatch(login(userData))
      };

      if (isLoading){
        return <Spinner/>
      }
    
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
          <Form onSubmit={(e) => handleSubmit(e)}>
          <Typography variant="h3" sx={{margin:3}} color="primary">Login Here</Typography>
          {/* <Button sx={{ m: 1, width: '40ch' }} variant="outlined" startIcon={<Google />}>Login with Gmail</Button> */}
          <div id='signInDiv'></div>
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
            sx={{ fontSize: 20 ,color:"white"}}
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
            sx={{ fontSize: 18 ,color:"white"}}
          />
          {errors.password&&(<Typography component={"p"} sx={{ fontSize: 13 ,color:"red"}}>{errors.password}</Typography>)} 
        </FormControl>
        <Button sx={{ m: 1,width: '40ch' }} type="submit" variant="contained">
        {/* {auth.loginStatus === "pending" ? "Submitting..." : "Login"} */}
        Login
          </Button>
        <Box>
        {/* {auth.loginStatus === "rejected" ? (<Typography component={"p"} sx={{ fontSize: 17 ,color:"red"}}>{auth.loginError}</Typography>) : null} */}
        <Typography sx={{ m: 1 }} variant="h7" >Do not you have an account yet?</Typography>
        <Button sx={{ m: 1 }} ><Link to="/register" style={{ textDecoration: 'none',color:"blue" }} >Sign up</Link></Button>
        </Box>
          </Form>
        </Box>
        
      );
}
