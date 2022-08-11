import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
    userAdmin: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getAllUsers, userAdmin } = userSlice.actions;
export default userSlice.reducer;
