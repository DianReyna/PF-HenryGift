import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import Favorite from "./Sections/Favorite";
import AddToCart from "./Sections/AddToCart";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import "./BoxCard.css";

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
  const imgDefault =
    "https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg";

  return (
    <Card sx={{ maxWidth: 320, border: "1px solid black" }}>
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
  );
}

const CardWidth = styled.div`
  height: 28rem;
  position: relative;
`;

const BodyCardProduct = styled.div`
  height: 22rem;
`;
