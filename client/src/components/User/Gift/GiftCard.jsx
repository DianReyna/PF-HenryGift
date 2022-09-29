import React from "react";
import { Link } from "react-router-dom";
import {  Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import Favorite from "../../BoxCard/Sections/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";


const CardWidth = styled.div`
  height: 28rem;
  position: relative;
`;

const BodyCardProduct = styled.div`
  height: 22rem;
`;

export default function GiftCard({
    id,
    name,
    ranking,
    person,
    expiration_date,
    detail,
    image,
    box,
 })
{
  const imgDefault =
  "https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg";

  return (
   
    <Card 
    sx={{ maxWidth: 335, border: '1px solid black' }}
    >
      <CardWidth>
        <div className="footer-fav-box">
          <Favorite id={id} />
        </div>
          <Link
            to={`/giftdetail/${id}`}
            style={{ textDecoration: "none"}}
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
              <Typography color='text.primary' gutterBottom variant="h4" component="div">
                    {name}
                  </Typography>
                  <Typography color='text.primary'
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography color='text.primary' sx={{ display: "flex" }}>
                      <StarIcon sx={{ fill: "black" }} />
                      {ranking}
                    </Typography>

                    <Typography color='text.primary' sx={{ display: "flex" }}>
                      {person === 1 ? (
                        <PersonIcon sx={{ fill: "black" }} />
                      ) : person === 2 ? (
                        <GroupIcon sx={{ fill: "black" }} />
                      ) : (
                        <div>
                          <PersonIcon sx={{ fill: "black" }} />
                          x3
                        </div>
                      )}
                    </Typography>
                  </Typography>

                  <Typography color='text.primary'>{detail}</Typography>
                {/* <Typography color='text.primary'>Price: ${price}</Typography> */}
                <Typography color='text.primary'>Expiration date: {expiration_date}</Typography>
                </BodyCardProduct>
              </CardContent>
          </Link>
        </CardWidth>
         </Card>
   
);
}

