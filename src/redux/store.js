import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
