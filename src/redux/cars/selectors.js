import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
export const selectBrands = (state) => state.cars.brands;
export const selectError = (state) => state.cars.error;
