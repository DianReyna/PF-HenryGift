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
    postProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProduct, deleteProduct, editProduct, postProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
