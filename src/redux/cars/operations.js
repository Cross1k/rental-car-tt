import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars, fetchBrands } from "../../api/apiCars.js";

export const fetchCarsOperation = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const data = await fetchCars(_);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBrandsOperation = createAsyncThunk(
  "cars/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const data = await fetchBrands(_);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
