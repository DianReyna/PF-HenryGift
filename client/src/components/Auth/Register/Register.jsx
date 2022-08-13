import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/reducer/authSlice";
import { Link,useNavigate  } from "react-router-dom";
import { Google, Facebook } from "@mui/icons-material";
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
  const auth = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    dateBirth: "",
    phone: "",
    email: "",
    password: "",
    accept: false,
    passwordAgain: "",
    access_level: false,
  });
  const [errors, setErrors] = useState({ first_name: "*name is required" });
  const handleChange = (prop) => (event) => {
    setInput({ ...input, [prop]: event.target.value });
    setErrors(validate({ ...input, [prop]: event.target.value }));
  };
  const handleCheck = (prop) => (event) => {
    setInput({ ...input, [prop]: event.target.checked });
    setErrors(validate({ ...input, [prop]: event.target.checked }));
  };

  useEffect(() => {
    if (auth.email) {
      navigate("/cart");
    }
  }, [auth.email, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    console.log(errors)
    dispatch(registerUser(input));
  };
  return (
    <>
      <Typography variant="h3" color="primary" align="center" sx={{ m: 1 }}>
        Sign Up Here
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={ handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Button fullWidth variant="outlined" startIcon={<Google />}>
                    Sign up with Gmail
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="outlined" startIcon={<Facebook />}>
                    Sign up with Gmail
                  </Button>
                </Grid>
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
                    label="Introduce again the password"
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
                      style=
                      {{
                        backgroundColor: "#448AFF",
                        padding: 1,
                      }}
                    />
                  }
                  label="I accept the privacy terms and conditions of the site"
                  labelPlacement="end"
                  sx={{ color: "blue" }}
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
                    {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
                  </Button>
                </Grid>
              </Grid>
            </form>
            {auth.registerStatus === "rejected" ? (<Typography component={"p"} sx={{ fontSize: 17 ,color:"red"}}>{auth.registerError}</Typography>) :null}
            <Typography variant="h7">
              Do you have an account Henry-Gift?
            </Typography>
            <Button>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Login
              </Link>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
