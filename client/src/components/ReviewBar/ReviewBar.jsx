import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailBox } from "../../redux/actions/boxesActions";
import { getReviews } from "../../redux/actions/reviewsActions";
import { List, ListItem, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function ReviewBar({ id }) {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.reviews);
  const { detail } = useSelector((state) => state.boxes);

  useEffect(() => {
    getReviews(id);
    detailBox(id);
  }, [dispatch]);
  const ratingStart = rating?.reviews.length;
  const num = detail?.ranking;

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <StarIcon /> {num}
        <ListItemText
          primary={`
Average between ${ratingStart} opinions`}
          sx={{ marginLeft: 2 }}
        />
      </ListItem>
    </List>
  );
}
