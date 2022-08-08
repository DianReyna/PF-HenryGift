import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
      col: '', //gastronomi
      dir: '' // 1
  },
  reducers: {
    setCol: (state, action) => {
      state.col = action.payload;
      // console.log(state.category, 'lo que quedo guardado en el estado');
    },
    setDir: (state,action) => {
      state.dir = action.payload
    }
  },
});

export const { setCol, setDir } = sortSlice.actions;
export default sortSlice.reducer;
