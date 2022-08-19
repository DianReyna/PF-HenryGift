import { createSlice } from "@reduxjs/toolkit";

export const qrSlice = createSlice({
  name: "qr",
  initialState: {
     information:{}
  },
  reducers: {
    getInformation: (state, action) => {
      state.information = action.payload;
      // console.log(state.category, 'lo que quedo guardado en el estado');
    },
   
  },
});

export const { getInformation } = qrSlice.actions;
export default qrSlice.reducer;
