import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button, Link } from "@mui/material";
import axios from "axios";
import { getUserGift } from "../../redux/actions/userActions";
import GiftCards from "./Gift/GiftCards";
import { useParams } from "react-router-dom";
import { getBox } from "../../redux/actions/boxesActions";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button, Link } from "@mui/material";
import axios from "axios";

export default function RedeemCoupon() {
  const { user } = useParams();
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setCode(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://henrygift-api.herokuapp.com/redeem", { code: code })
      .then((res) => console.log(res))
      .then((res) => dispatch(getUserGift("alegrices@independent.co.uk")));
  }
  useEffect(() => {
    dispatch(getUserGift("alegrices@independent.co.uk"));
  }, [dispatch]);

  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Button variant="Abrir mi Box" href="/userprofile">
        Volver
      </Button>
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
            label="Codigo"
            placeholder="Ingrese codigo de canje..."
            type="text"
            value={code}
            onChange={(e) => handleInputChange(e)}
            autoFocus
          />
        </Grid>
        <Grid item xs={2} sx={{ m: 5, textAlign: "center" }}>
          <Button onClick={handleSubmit} type="submit">
            {" "}
            ABRIR MI BOX{" "}
          </Button>
        </Grid>
        <GiftCards />
      </Grid>
    </Paper>
  );
}
