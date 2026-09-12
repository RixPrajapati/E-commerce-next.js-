import config from "@/config";
import axios from "axios";
import api from "./api";

export const getProducts = async () => {
  const res = await axios.get(`${config.appUrl}/api/products?limit=100`);
  return res.data;
};

export const createProduct = async (data) => {
  return await api.post(`${config.appUrl}/api/products`, data);
};
