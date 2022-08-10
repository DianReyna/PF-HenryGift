import React, { useState } from "react";
import {Link} from "react-router-dom";
import {
  Google,
  Facebook,
} from "@mui/icons-material";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";

export default function Register() {
  // const [input, setInput] = useState({
  //   email:'',
  //   password: '',
  // });
  return (
    <>
      <Typography variant="h3"  color="primary" align="center" sx={{ m: 1}}>
      Sign Up Here
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
              <Grid item xs={12} >
            <Button fullWidth variant="outlined" startIcon={<Google />}>Sign up with Gmail</Button>
            </Grid>
            <Grid item xs={12} >
            <Button fullWidth  variant="outlined" startIcon={<Facebook />}>Sign up with Gmail</Button>
            </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth  
                  />
                 
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    placeholder="Enter password"
                    label="Introduce again the password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="I have read and accept all the terms and conditions of the site."
          labelPlacement="end"
          sx={{color:"red" }}
        />
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Typography  variant="h7" >Do you have an account Henry-Gift?</Typography>
            <Button  ><Link to="/login" style={{ textDecoration: 'none' ,color:"blue"}}>Login</Link></Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
