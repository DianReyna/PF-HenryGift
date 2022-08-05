import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import style from "./ProductCard.module.css";

export default function ProductCard({
  id,
  name,
  description,
  location,
  imagen,
}) {
  return (
    <Card sx={{maxWidth:345}}>
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt="img not found"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Product: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <h3>Location: {location}</h3>
      </CardContent>
    </Card>
  );
}
