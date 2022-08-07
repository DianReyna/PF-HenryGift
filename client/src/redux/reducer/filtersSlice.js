import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: [],
  },
  reducers: {
    getAllFilters: (state, action) => {
      console.log(action.payload);

      state.filters = action.payload(category);
    },
  },
});

export const { getAllFilters } = filtersSlice.actions;
export default filterssSlice.reducer;
