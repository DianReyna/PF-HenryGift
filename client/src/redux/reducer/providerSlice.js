import { createSlice } from "@reduxjs/toolkit";

export const providerSlice = createSlice({
  name: "providers",
  initialState: {
    providers: [],
  },
  reducers: {
    getAllProviders: (state, action) => {
      state.providers = action.payload;
    },
    deleteProvider: (state, action) => {
      state.providers = action.payload;
    },
    editProvider: (state, action) => {
      state.providers = action.payload;
    },
  },
});

export const { getAllProviders, deleteProvider, editProvider } =
  providerSlice.actions;
export default providerSlice.reducer;
