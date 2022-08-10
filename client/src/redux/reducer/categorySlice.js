import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    getAllCategories: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getAllCategories } = categorySlice.actions;
export default categorySlice.reducer;
