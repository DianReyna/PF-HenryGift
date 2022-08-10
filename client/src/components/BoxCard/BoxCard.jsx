import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import {
  BoxCardTitle,
  BoxCardOthers,
  BoxCardDetail,
  Altura,
} from "./BoxCardStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";
//import { useHistory } from "react-router-dom";

export default function BoxCard({
  id,
  name,
  price,
  ranking,
  person,
  expiration_date,
  detail,
  image,
  box,
}) {

  const dispatch = useDispatch();
  //const history = useHistory();

  const handleAddToCart = (box) => {
    dispatch(addToCart(box))
    //history.push("/cart")
  }

  return (
    <div className="container">
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <Altura>
            <Link to={`/box/${id}`} style={{ textDecoration: "none" }}>
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
            </Link>
            <Button variant="outlined"
            onClick={()=> handleAddToCart(box)}>Agregar al Carrito</Button>
          </Altura>
        </Card>
      </Box>
    </div>
  );
}
