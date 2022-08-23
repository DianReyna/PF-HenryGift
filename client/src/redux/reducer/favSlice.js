import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favItems: localStorage.getItem("favItems")
      ? JSON.parse(localStorage.getItem("favItems"))
      : [],
  },
  reducers: {
    // addFav: (state, action) => {
    //   const favIndex = state.favItems.findIndex(
    //     (item) => item.box_id === action.payload.box_id
    //   );
    //   if (favIndex >= 0) {
    //     state.favItems;
    //   } else {
    //     const temFav = { ...action.payload };
    //     state.favItems.push(temFav);

    //   }

    //   localStorage.setItem("favItems", JSON.stringify(state.favItems));
    // },
    removeFav: (state, action) => {
      const nextFavItems = state.favItems.filter(
        (favItem) => favItem.box_id !== action.payload
      );
      state.favItems = nextFavItems;

      localStorage.setItem("favItems", JSON.stringify(state.favItems));
    },
    getFavs: (state, action) => {
      state.favItems = action.payload;
    },
  },
});

export const {
  //  addFav,
  removeFav,
  getFavs,
} = favSlice.actions;

export default favSlice.reducer;
