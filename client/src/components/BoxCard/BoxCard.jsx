import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import Favorite from "./Sections/Favorite";
import AddToCart from "./Sections/AddToCart";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import "./BoxCard.css";
=======
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import styled from "styled-components";
import Favorite from "./Sections/Favorite";
import AddToCart from "./Sections/AddToCart";

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
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611

export default function BoxCard({
  id,
  name,
  price,
  ranking,
  person,
  detail,
  image,
  box,
}) {
<<<<<<< HEAD
  const imgDefault =
    "https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg";

  return (
    <Card sx={{ maxWidth: 320, border: "1px solid rgb(187, 187, 187)" }}>
      <CardWidth>
        <div className="footer-fav-box">
          <Favorite id={id} />
        </div>
        <Link to={`/box/${id}`} style={{ textDecoration: "none" }}>
          {image ? (
            <CardMedia
              component="img"
              height="140"
              image={image}
              // border= '1px solid rgb(187, 187, 187)'
              alt="img not found"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image={imgDefault}
              alt="img not found"
              // border= '1px solid rgb(187, 187, 187)'
            />
          )}

          <CardContent>
            <BodyCardProduct>
              <Typography
                color="text.primary"
                gutterBottom
                variant="h4"
                component="div"
              >
                {name}
              </Typography>

              <Typography
                color="text.primary"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography color="text.primary" sx={{ display: "flex" }}>
                  <StarIcon color="secondary" />
                  {ranking}
                </Typography>

                <Typography color="text.primary" sx={{ display: "flex" }}>
                  {person === 1 ? (
                    <PersonIcon />
                  ) : person === 2 ? (
                    <GroupIcon />
                  ) : (
                    <div>
                      <GroupsIcon />
                    </div>
                  )}
                </Typography>
              </Typography>

              <Typography color="text.primary">{detail}</Typography>

              <Typography color="text.primary">Price: ${price}</Typography>
            </BodyCardProduct>
          </CardContent>
        </Link>
        <div className="footer-card-box">
          <div className="footer-cart-box">
            <AddToCart box={box} />
          </div>
        </div>
      </CardWidth>
    </Card>
=======
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
              <AddToCart box={box} />
              <Favorite id={id} />
            </FooterCardProduct>
          </CardWidth>
        </Card>
      </SupCardProduct>
    </div>
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
  );
}

const CardWidth = styled.div`
  height: 28rem;
  position: relative;
`;

const BodyCardProduct = styled.div`
  height: 22rem;
`;
