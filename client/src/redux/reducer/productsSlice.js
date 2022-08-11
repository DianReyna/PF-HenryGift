import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
