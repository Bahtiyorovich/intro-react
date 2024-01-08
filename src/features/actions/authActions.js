import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api";

// API endpoints
const REGISTER_ENDPOINT = `/register`;
const LOGIN_ENDPOINT = `/login`;
const LOGOUT_ENDPOINT = `/logout`;

export const registerUser = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post(REGISTER_ENDPOINT, userData);
  return response.data;
});

export const loginUser = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post(LOGIN_ENDPOINT, userData);
  return response.data;
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  const response = await axios.post(LOGOUT_ENDPOINT);
  return response.data;
});
