import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    bestBoxes: [],
    userBuy: [],
    salesBox: [],
  },
  reducers: {
    getBoxes: (state, action) => {
      state.bestBoxes = action.payload;
    },
    getUsers: (state, action) => {
      state.userBuy = action.payload;
    },
    getBoxSales: (state, action) => {
      state.salesBox = action.payload;
    },
  },
});

export const { getBoxes, getUsers, getBoxSales } = adminSlice.actions;

export default adminSlice.reducer;
