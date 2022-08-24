import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducer/cartSlice";
import styled from "styled-components";
import Favorite from "./Sections/Favorite";

const CardWidth = styled.div`
  height: 33rem;
  position: relative;
  /* box-shadow: 3px 3px  black; */
`;
const BodyCardProduct = styled.div`
  height: 22rem;
`;
const FooterCardProduct = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;
const SupCardProduct = styled.div`
  box-shadow: 1px 1px 2px black;
  border-radius: 3px;
  /* border: 1px solid black; */
`;

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
  const {user} = useSelector((state) => state.auth);

  const handleAddToCart = (box) => {
    dispatch(addToCart(box));
  };
  const handleFavorite = () => {
    dispatch(addFavorite(id, user._id));
  };

  const handleDeleteFavorite = () => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="container">
      <SupCardProduct>
        <Card sx={{ maxWidth: 345 }}>
          <CardWidth>
            <Link
              to={`/box/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="img not found"
              />
              <CardContent>
                <BodyCardProduct>
                  <Typography gutterBottom variant="h4" component="div">
                    {name}
                  </Typography>
                  <Typography>Ranking: {ranking}</Typography>
                  <Typography>{detail}</Typography>
                  <Typography>Persons: {person}</Typography>
                  <Typography>Price: ${price}</Typography>
                  <Typography>Expiration date: {expiration_date}</Typography>
                </BodyCardProduct>
              </CardContent>
            </Link>
            <FooterCardProduct>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginLeft: "3.8rem",
                }}
                variant="outlined"
                onClick={() => handleAddToCart(box)}
              >
                Add to Cart
              </Button>

              <Favorite id={id} />
            </FooterCardProduct>
          </CardWidth>
        </Card>
      </SupCardProduct>
    </div>
  );
}
