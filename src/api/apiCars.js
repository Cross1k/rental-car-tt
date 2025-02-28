import axios from "axios";

const apiCars = axios.create({ baseURL: "https://car-rental-api.goit.global" });

export const fetchCars = async () => {
  const { data } = apiCars.get("/cars");
  return data;
};

export const fetchBrands = async () => {
  const { data } = apiCars.get("/brands");
  return data;
};
