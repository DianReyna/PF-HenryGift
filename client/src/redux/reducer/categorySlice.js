import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    editCategory: (state, action) => {
      state.categories = action.payload;
    },
    deleteCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategories, editCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
