import { createSlice } from "@reduxjs/toolkit";
import { fetchBrandsOperation, fetchCarsOperation } from "./operations.js";

const INITIAL_STATE = {
  cars: [],
  brands: [],
  error: null,
  loading: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarsOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCarsOperation.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchBrandsOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrandsOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrandsOperation.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
