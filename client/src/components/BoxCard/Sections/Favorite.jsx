import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../../redux/actions/favActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { IconButton } from "@mui/material";

const Favorite = ({ id }) => {
  const [Favorited, setFavorited] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (Favorited) {
      dispatch(removeFavorite(id));
      setFavorited(!Favorited);
    } else {
      dispatch(addFavorite(id, user._id));
      setFavorited(!Favorited);
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleFavorite}>
      {Favorited ? (
        <FavoriteOutlinedIcon
          sx={{
            fill: "red",
          }}
        />
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{
            fill: "red",
          }}
        />
      )}
    </IconButton>
  );
};

export default Favorite;
