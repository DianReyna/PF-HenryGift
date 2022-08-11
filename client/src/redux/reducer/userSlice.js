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
  },
});

export const { getAllUsers } = userSlice.actions;
export default userSlice.reducer;
