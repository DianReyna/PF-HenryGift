import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../../../redux/actions/favActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { IconButton } from "@mui/material";

const Favorite = ({ id }) => {
  const [Favorited, setFavorited] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const favs = useSelector((state) => state.fav);

  // useEffect(() => {
  //   dispatch(getFavorites(user._id));
  // }), [];

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
        <FavoriteBorderOutlinedIcon
          sx={{
            bgcolor: "red",
            borderRadius: "50%",
          }}
        />
      ) : (
        <FavoriteOutlinedIcon
          sx={{
            bgcolor: "red",
            borderRadius: "50%",
          }}
        />
      )}
    </IconButton>
  );
};

export default Favorite;
