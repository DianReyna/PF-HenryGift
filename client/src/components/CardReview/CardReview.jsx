import { Avatar, Card, Rating, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";

export default function CardReview({ name, date, message, score }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", fontSize: 20 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name}
              </Typography>
              <Typography
                sx={{ display: "inline", marginLeft: 13, fontSize: 14 }}
                component="span"
                variant="body2"
              >
                {" "}
                {date}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography sx={{ display: "inline" }}>
                <Rating
                  name="read-only"
                  value={score}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "red !Important",
                    },
                    background: "orange",
                    fontSize: 16,
                  }}
                />
              </Typography>
              <Typography
                sx={{ display: "inline", fontSize: 16 }}
                component="span"
                variant="body2"
              >
                {` — ${message}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
