import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

//action
export const fetchProductAction = createAsyncThunk(
  "product/all",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://localhost:5001/api/product`);
      console.log("reducer ", data);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const sortProductAction = createAsyncThunk(
  "product/orderby",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://localhost:5001/api/product/orderbyproducts/${payload}`
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

export const searchProductAction = createAsyncThunk(
  "product/search",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://localhost:5001/api/product/serachproducts/${payload}`
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

const productSlice = createSlice({
  name: "product",
  initialState: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchProductAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled loading
    builder.addCase(fetchProductAction.fulfilled, (state, action) => {
      state.productCollections = action?.payload;
      state.loading = false;
      state.error = false;
    });
    //rejected
    builder.addCase(fetchProductAction.rejected, (state, action) => {
      state.loading = false;
      state.productCollections = undefined;
      state.error = action?.payload;
    });
    //fulfilled loading
    builder.addCase(sortProductAction.fulfilled, (state, action) => {
      state.productCollections = action?.payload;
      state.loading = false;
      state.error = false;
    });
    //fulfilled loading
    builder.addCase(searchProductAction.fulfilled, (state, action) => {
      state.productCollections = action?.payload;
      state.loading = false;
      state.error = false;
    });
  },
});

export default productSlice.reducer;
