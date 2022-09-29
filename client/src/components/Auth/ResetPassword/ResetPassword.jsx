import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Box, TextField, Typography } from "@mui/material";
import styled from "styled-components";
<<<<<<< HEAD
import URL from '../../../utils/backRoutes';
=======
import { URL } from "../../../utils/index";

>>>>>>> f8a3346c1ea300ea29620e50413818547edb0978
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
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
  const [error, setError] = useState({ password: "" });
  const navigate = useNavigate();

  const { email } = useParams();

  const handleChange = (prop) => (e) => {
    setPswd({ ...pswd, [prop]: e.target.value });
    setError(validate({ ...pswd, [prop]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          sx={{ m: 1 }}
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
          sx={{ m: 1 }}
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
            backgroundColor: "#BF360C",
            borderColor: "#BF360C",
            color: "black",
          }}
          variant="outlined"
          type="submit"
          disabled={Object.keys(error).length > 0}
        >
          Change Password
        </Button>
        <Box></Box>
      </Form>
    </Box>
  );
}
