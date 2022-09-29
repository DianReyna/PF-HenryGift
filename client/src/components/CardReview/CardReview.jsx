import { Avatar, Card, Rating, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";

export default function CardReview({ name, date, message, score }) {
  return (
    <List sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}>
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
                sx={{ display: "inline", fontSize: 20, marginBottom: 0 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name}
              </Typography>
              <Typography
                color="text.primary"
                sx={{ display: "inline", fontSize: 14 }}
                component="span"
                variant="body2"
              >
                {` — ${date}`}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography sx={{ color: "secondary" }}>
                <Rating
                  name="read-only"
                  value={score}
                  readOnly
                  sx={{
                    fontSize: 19,
                  }}
                />
              </Typography>
              <Typography
                color="text.primary"
                sx={{ display: "end", fontSize: 16, textAlign: "left" }}
                component="span"
                variant="body2"
              >
                {message}
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
