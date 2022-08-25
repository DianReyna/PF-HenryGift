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
import AddToCart from "./Sections/AddToCart";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import './BoxCard.css';

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
  left: 3rem;
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
  const { user } = useSelector((state) => state.auth);

  const handleFavorite = () => {
    dispatch(addFavorite(id, user._id));
  };

  const handleDeleteFavorite = () => {
    dispatch(removeFavorite(id));
  };
  const imgDefault =
    "https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg";
  return (
    <div className="container">
      <SupCardProduct>
        <Card sx={{ maxWidth: 345 }}>
          <CardWidth>
            <Link
              to={`/box/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {image ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt="img not found"
                />
              ) : (
                <CardMedia
                  component="img"
                  height="140"
                  image={imgDefault}
                  alt="img not found"
                />
              )}

              <CardContent>
                <BodyCardProduct>
                  <Typography gutterBottom variant="h4" component="div">
                    {name}
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <StarIcon sx={{ fill: "black" }} />
                    Ranking: {ranking}
                  </Typography>
                  <Typography>{detail}</Typography>
                  <Typography sx={{ display: "flex" }}>
                    <PersonIcon sx={{ fill: "black" }} />
                    Persons: {person}
                  </Typography>
                  <Typography>Price: ${price}</Typography>
                  <Typography sx={{ display: "flex" }}>
                    <InsertInvitationOutlinedIcon sx={{ fill: "black" }} />
                    Expiration date: {expiration_date}
                  </Typography>
                </BodyCardProduct>
              </CardContent>
            </Link>
              <div className="footer-card-box">
              <div className="footer-cart-box">
                <AddToCart box={box} />
              </div>
              <div className="footer-fav-box">
                <Favorite id={id} />
              </div>
              </div>
          </CardWidth>
        </Card>
      </SupCardProduct>
    </div>
  );
}
