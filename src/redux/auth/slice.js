import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from 'redux/auth/operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
