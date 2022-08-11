import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDelete: [],
  },
  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload;
      console.log("getall", state.products);
    },
    deleteProduct: (state, action) => {
      state.productDelete = action.payload;
      // console.log(state.productDelete);
      // console.log(state.products);
    },
  },
});

export const { getAllProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
