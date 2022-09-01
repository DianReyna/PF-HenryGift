import React from "react";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function BestBoxes({ props }) {
  const newList = props.slice(0, 4);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={16} md={8}>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h5" component="div">
            Best Boxes
          </Typography>
          <List>
            {newList &&
              newList?.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar
                        src={item.image && item.image.url}
                        alt="box image"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <Typography style={{ fontSize: 13 }}>
                          <StarIcon sx={{ fontSize: 13 }} /> {item.ranking}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
