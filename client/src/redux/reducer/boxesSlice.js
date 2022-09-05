import { createSlice } from "@reduxjs/toolkit";

export const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxes: [],
    detail: {},
    detailProd: {},
    boxesAdmin: [],
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
    BoxesAdmin: (state, action) => {
      state.boxesAdmin = action.payload;
    },
    deleteBox: (state, action) => {
      state.boxes = action.payload;
    },
    editBoxes: (state, action) => {
      state.boxes = action.payload;
    },
    getBoxId: (state, action) => {
      state.boxes = action.payload;
    },
    postBox: (state, action) => {
      state.boxes = action.payload;
    },
  },
});

export const {
  getAllBoxes,
  getDetailBox,
  getDetailProduct,
  deleteBox,
  BoxesAdmin,
  editBoxes,
  postBox,
} = boxesSlice.actions;

export default boxesSlice.reducer;
