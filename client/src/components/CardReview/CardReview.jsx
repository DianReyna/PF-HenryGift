import { Avatar, Card, Rating, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function CardReview({ name, date, message, score }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <ContentCard>
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
        <Typography>{name}</Typography>
        <Typography>{date}</Typography>
      </ContentCard>
      <Rating
        sx={{
          background: "black ",
        }}
        name="read-only"
        value={score}
        readOnly
      />
      <Typography>{message}</Typography>
    </Card>
  );
}

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
