import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

//action
export const fetchPostCodeAction = createAsyncThunk(
  "postCode/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.postcodes.io/postcodes/${payload}`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const fetchPostCodeListAction = createAsyncThunk(
  "postCodeList/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.postcodes.io/postcodes/${payload}/autocomplete?limit=100`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice

const weatherSlice = createSlice({
  name: "postCode",
  initialState: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchPostCodeAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchPostCodeAction.fulfilled, (state, action) => {
      state.postCodeDetails = action?.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchPostCodeListAction.fulfilled, (state, action) => {
      state.postCodeList = action?.payload;
      state.error = undefined;
    });
    //rejected
    builder.addCase(fetchPostCodeAction.rejected, (state, action) => {
      state.loading = false;
      state.postCodeDetails = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
