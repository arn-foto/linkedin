import { createSlice } from "@reduxjs/toolkit";
// this is where redux is setup to save the user for logging in and out.
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// this is a selector and it allows us to pull information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
