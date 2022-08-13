import { createSlice } from "@reduxjs/toolkit";

export const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxes: [],
    detail: {},
    detailProd: {},
  },
  reducers: {
    getAllBoxes: (state, action) => {
      state.boxes = action.payload;
    },
    getDetailBox: (state, action) => {
      state.detail = action.payload;
    },
    getDetailProduct: (state, action) => {
      state.detailProd = action.payload;
    },
    getAllBoxesAdmin: (state, action) => {
      state.boxes = action.payload;
    },
    deleteBox: (state, action) => {
      state.boxes = action.payload;
    },
    editBoxes: (state, action) => {
      state.boxes = action.payload;
    },
  },
});

export const {
  getAllBoxes,
  getDetailBox,
  getDetailProduct,
  deleteBox,
  getAllBoxesAdmin,
  editBoxes,
} = boxesSlice.actions;

export default boxesSlice.reducer;
