import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import {
  BoxCardTitle,
  BoxCardOthers,
  BoxCardDetail,
  Altura,
} from "./BoxCardStyles";


export default function BoxCard({
  id,
  name,
  price,
  ranking,
  person,
  expiration_date,
  detail,
  image,
}) {
  return (
    <div className="container">
      <Link to={`/box/${id}`} style={{ textDecoration: 'none' }}>
        <Box >
          
          <Card sx={{ maxWidth: 345 }}>
						
            <Altura>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="img not found"
              />
              <BoxCardTitle>{name}</BoxCardTitle>
              <BoxCardOthers>Ranking: {ranking}</BoxCardOthers>
              <BoxCardDetail>{detail}</BoxCardDetail>
              <BoxCardOthers>Persons: {person}</BoxCardOthers>
              <BoxCardOthers>Price: ${price}</BoxCardOthers>
              <BoxCardOthers>Expiration date: {expiration_date}</BoxCardOthers>
            </Altura>
          </Card>
        </Box>
      </Link>
    </div>
  );
}
