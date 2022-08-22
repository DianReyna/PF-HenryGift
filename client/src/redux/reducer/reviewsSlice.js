import { createSlice } from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
  },
  reducers: {
    getView: (state, action) => {
      state.reviews = action.payload;
    },
    postViews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { getView, postViews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
