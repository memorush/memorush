import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";

// -------------------------------------- AsyncThunk --------------------------------------

export const registration = createAsyncThunk('auth/registration', async (data) => {
  const response = await fetchDataService('POST', '/api/v1/user/registration', data);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (data) => {
  const response = await fetchDataService('POST', '/login', data);
  return response.data;
});

// -------------------------------------- Slice --------------------------------------

const initialState = {
  authEntity: {
    username: null,
    token: null
  },
  status: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    invalidateLoggedInUser: {
      reducer(state) {
        return initialState;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(registration.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.status = 'register'
        state.authEntity = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'login'
        state.authEntity = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { invalidateLoggedInUser } = authSlice.actions;

export default authSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const authSelector = state => state.auth;
export const selectUserIsExist = state => state.auth.error ? true : false;
export const authEntitySelector = state => state.auth.authEntity;
export const authStatusSelector = state => state.auth.status;
export const authErrorSelector = state => state.auth.error;
