import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return toast.error("Complete the field");
    }
    try {
      const { data } = await axios.post(`${URL}/login/forgotpassword`, {
        email,
      });
      toast.success(data.message);
      setEmail("");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setEmail("");
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
        Did you forget your password?
      </Typography>
      <Typography component={"p"} align="center" sx={{ m: 1 }}>
        Enter your email and we will send you an email to reset it
      </Typography>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="text"
            value={email}
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <Email style={{ fill: "#f44336" }} />
              </InputAdornment>
            }
            label="Email"
            sx={{ fontSize: 20, color: "black" }}
          />
        </FormControl>
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
          Reset Password
        </Button>
        <Box></Box>
      </Form>
    </Box>
  );
}
