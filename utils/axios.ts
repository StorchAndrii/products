import axios from "axios";

export const axiosBackend = axios.create({
  baseURL: `https://fakestoreapi.com/products`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
