import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
      category: '', //gastronomi
      person: '' // 1
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      // console.log(state.category, 'lo que quedo guardado en el estado');
    },
    setPerson: (state,action) => {
      state.person = action.payload
    }
  },
});

export const { setCategory, setPerson } = filtersSlice.actions;
export default filtersSlice.reducer;
