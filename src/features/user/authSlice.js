import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "../actions/authActions";
import { setItem, removeItem } from "../../helpers/cookie-storage"; // Import your cookie functions

const authState = {
  user: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
         // Save user data in a cookie
         setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
         // Save user data in a cookie
         setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        removeItem('user');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  authSlice.actions;
