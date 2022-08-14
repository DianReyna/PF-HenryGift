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
    editProduct: (state, action) => {
      state.providers = action.payload;
    },
  },
});

export const { getAllProduct, deleteProduct, editProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
