import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Button, Link, TextField, Paper, Typography, Card, CardMedia } from "@mui/material";
import { getUserGift } from "../../redux/actions/userActions";
import GiftCards from "./Gift/GiftCards";
import { getBox } from "../../redux/actions/boxesActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { boxSizing, padding } from "@mui/system";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Redeem2 from "../../assets/Redeem2.png";


export default function RedeemCoupon() {
  const navigate = useNavigate();
  const { user } = useParams();
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const { userDetail } = useSelector((state) => state.users);

  function handleInputChange(e) {
    e.preventDefault();
    setCode(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //navigate('/userprofile')
    // const URL = " https://henrygift-api.herokuapp.com";
    const URL = "http://localhost:3001";
    axios
      .post(`${URL}/redeem`, { code: code })
      .then((res) =>
        res.data === "Invalid Code or It has been already redeemed"
          ? toast.error(`Invalid Code`, { position: "bottom-left" })
          : navigate("/userprofile")
      )
      .then((res) => dispatch(getUserGift(userDetail.email)));
  }
  useEffect(() => {
    dispatch(getUserGift(userDetail.email));
  }, [dispatch]);

  return (
    <div>

         <Button variant="text"  href="/userprofile"   >
     <KeyboardBackspaceOutlinedIcon sx={{ fill: "grey" }}/> 
     Back </Button>

     
        <Typography fontSize={28}
          item container
          padding={3}
          xs={12}
          ms={6}
          sx={{ textAlign: "Center" }}
          gutterBottom>
          Do you have a gift?
        </Typography>

        {/* <CardMedia
        sx={{ width: 300,textAlign: "Center" }}
        item container
        component="img"      
       img src={Redeem2} alt="Img not found"    
       padding={3}
       xs={12}
      ms={6}
      /> */}
    

        <Typography fontSize={20}
           item container
           padding={3}
           xs={12}
           ms={6}
           sx={{ textAlign: "Center" }}
           gutterBottom>
          Enter your redemption code
        </Typography>
        <Grid
          item
          container
          xs={12}
          ms={6}
          spacing={2}
          sx={{ justifyContent: "Center" }}
        >

          <Grid item xs={4}>
            <TextField
              name="code"
              fullWidth
              label="Code gift"
              placeholder="Enter redemption code..."
              type="text"
              value={code}
              onChange={(e) => handleInputChange(e)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sx={{ m: 5, textAlign: "center" }}>
            <Button variant="contained" onClick={handleSubmit} type="submit">
              {" "}
              OPEN BOX{" "}
            </Button>
          </Grid>
          <GiftCards />
        </Grid>
      {/* </Paper> */}
    </div>
  );
}
