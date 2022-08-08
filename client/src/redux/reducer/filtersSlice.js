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
    },
    clean: (state,action) => {
      state.person = '',
      state.category = "";
    }
  },
});

export const { setCategory, setPerson, clean } = filtersSlice.actions;
export default filtersSlice.reducer;
