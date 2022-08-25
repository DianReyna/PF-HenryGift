import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, TextField, Typography } from "@mui/material";
import styled from "styled-components";
const URL = "http://localhost:3001";
// const URL = "https://henrygift-api.herokuapp.com";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 10px;
`;

const validate = (pswd) => {
  let error = {};
  if (!pswd.password) error.password = "*password is required";
  else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pswd.password))
    error.password = "*password invalid";
  else if (!pswd.password_confirm)
    error.passwordAgain = "*type the password again";
  else if (pswd.password_confirm !== pswd.password)
    error.password_confirm = "*password does not match";
  return error;
};

export default function ResetPassword() {
  const [pswd, setPswd] = useState({ password: "", password_confirm: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const { email } = useParams();

  const handleChange = (prop) => (e) => {
    setPswd({ ...pswd, [prop]: e.target.value });
    setError(validate({ ...pswd, [prop]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pswd);
    if (!pswd.password.trim()) {
      return toast.error("Write a new password");
    }
    if (!pswd.password_confirm.trim()) {
      return toast.error("Confirm the new password");
    }
    try {
      const { data } = await axios.put(
        `${URL}/login/resetpassword/${email}`,
        pswd
      );
      toast.success(data.message);
      setPswd("");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data?.message);
      setPswd("");
      navigate("/login");
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" align="center" sx={{ m: 1 }}>
        Here you can reset your password
      </Typography>
      <Typography component={"p"} align="center" sx={{ m: 1 }}>
        Enter your new password
      </Typography>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          type="password"
          placeholder="Enter password"
          label="Password"
          variant="outlined"
          fullWidth
          onChange={handleChange("password")}
          sx={{ m: 1, color: "white" }}
        />
        {error.password && (
          <Typography component={"p"} sx={{ fontSize: 13, color: "red" }}>
            {error.password}
          </Typography>
        )}
        <TextField
          type="password"
          placeholder="Confirm password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          onChange={handleChange("password_confirm")}
          sx={{ m: 1, color: "white" }}
        />
        {error.password_confirm && (
          <Typography component={"p"} sx={{ fontSize: 13, color: "red" }}>
            {error.password_confirm}
          </Typography>
        )}
        <Button
          sx={{
            m: 1,
            width: "40ch",
            backgroundColor: "#f44336",
            borderColor: "#f44336",
            color: "black",
          }}
          variant="outlined"
          type="submit"
        >
          Change Password
        </Button>
        <Box></Box>
      </Form>
    </Box>
  );
}
