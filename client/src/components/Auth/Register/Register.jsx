import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { useNavigate  } from "react-router-dom";
import { Google, Facebook, TonalitySharp } from "@mui/icons-material";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
import Spinner from "../spinner";
import { register, reset } from "../../../redux/reducer/authSlice";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { validate } from "./validate";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    dateBirth: "",
    phone: "",
    email: "",
    password: "",
    accept: false,
    passwordAgain: "",
  });
<<<<<<< HEAD
  
  const [errors, setErrors] = useState({first_name:""});
=======

  const [errors, setErrors] = useState({ first_name: "*name is required" });
  
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
  const handleChange = (prop) => (event) => {
    setInput({ ...input, [prop]: event.target.value });
    setErrors(validate({ ...input, [prop]: event.target.value }));
  };
  const handleCheck = (prop) => (event) => {
    setInput({ ...input, [prop]: event.target.checked });
    setErrors(validate({ ...input, [prop]: event.target.checked }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
<<<<<<< HEAD
      toast.success(`Please check your inbox to verify your email.`)
      navigate('/')
=======
      navigate("/");
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password !== input.passwordAgain) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        first_name: input.first_name,
        last_name: input.last_name,
        dateBirth: input.dateBirth,
        phone: input.phone,
        email: input.email,
        password: input.password,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Typography variant="h3" color="primary" align="center" sx={{ m: 1 }}>
        Sign Up Here
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("first_name")}
                  />
                  {errors.first_name && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.first_name}
                    </Typography>
                  )}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("last_name")}
                  />
                  {errors.last_name && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.last_name}
                    </Typography>
                  )}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange("dateBirth")}
                  />
                  {errors.dateBirth && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.dateBirth}
                    </Typography>
                  )}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="tel"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("phone")}
                  />
                  {errors.phone && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.phone}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("email")}
                  />
                  {errors.email && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.email}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("password")}
                  />
                  {errors.password && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.password}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    placeholder="Enter password"
                    label="Re-introduce your password"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("passwordAgain")}
                  />
                  {errors.passwordAgain && (
                    <Typography
                      component={"p"}
                      sx={{ fontSize: 13, color: "red" }}
                    >
                      {errors.passwordAgain}
                    </Typography>
                  )}
                </Grid>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      checked={input.accept}
                      onChange={handleCheck("accept")}
<<<<<<< HEAD
                      style=
                      {{
                        backgroundColor: "#e16428",
=======
                      style={{
                        backgroundColor: "#448AFF",
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
                        padding: 1,
                      }}
                    />
                  }
                  label="I accept the privacy terms and conditions of the site"
                  labelPlacement="end"
                  sx={{ color: "#e16428" }}
                />
                {errors.accept && (
                  <Typography
                    component={"p"}
                    sx={{ fontSize: 13, color: "red" }}
                  >
                    {errors.accept}
                  </Typography>
                )}{" "}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={Object.keys(errors).length > 0}
                  >
                    {/* {auth.registerStatus === "pending" ? "Submitting..." : "Register"} */}
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* {auth.registerStatus === "rejected" ? (<Typography component={"p"} sx={{ fontSize: 17 ,color:"red"}}>{auth.registerError}</Typography>) :null} */}
            <Typography variant="h7">
              Already have an account?
            </Typography>
            <Button variant="text" onClick={()=>{ navigate('/login')
          window.scroll(0, 0);}}>
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
