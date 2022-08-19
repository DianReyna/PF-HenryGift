import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favItems: [],
    favQuantity: 0,
  },
  reducers: {
    addFav: (state, action) => {
      state.favItems = action.payload;
      state.favQuantity += 1;
    },
    removeFav: (state, action) => {
      state.favItems = action.payload;
      state.favQuantity -= 1;
    },
    getFavs: (state, action) => {
      state.favItems = action.payload;
    },
  },
});

export const { addFav, removeFav, getFavs } = favSlice.actions;

export default favSlice.reducer;
