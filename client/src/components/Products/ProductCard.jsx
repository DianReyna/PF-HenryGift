import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const CardWidth = styled.div`
  height: 25rem;
  /* box-shadow: 3px 3px  black; */
`;
const BodyCardProduct = styled.div`
  height: 15rem;
  position: relative;
`;
const FooterCardProduct = styled.div`
  position: absolute;
  bottom: 0;
`;
const SupCardProduct = styled.div`
  box-shadow: 1px 1px 2px black;
  border-radius: 3px;
  /* border: 1px solid black; */
`;
const imgDefault = "https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg";

export default function ProductCard({
  id,
  name,
  description,
  location,
  imagen,
}) {
  return (
    <SupCardProduct>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardWidth>
            {imagen ? (
              <CardMedia
                component="img"
                height="140"
                image={imagen}
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
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                <FooterCardProduct>
                  <h3>Location: {location}</h3>
                </FooterCardProduct>
              </BodyCardProduct>
            </CardContent>
          </CardWidth>
        </Card>
      </Link>
    </SupCardProduct>
  );
}
