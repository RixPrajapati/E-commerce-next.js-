import config from "@/config";
import axios from "axios";
import api from "./api";
import { formatParams } from "@/helpers/params";

export const getProducts = async (searchParam) => {
  // console.log(searchParam)
  const query=formatParams(searchParam);

  // console.log(query)
  const res = await axios.get(`${config.appUrl}/api/products?limit=100&${query}`);
  return res.data;
};
export const getProductsById = async (id) => {
  const res = await axios.get(`${config.appUrl}/api/products/${id}`);
  return res.data;
};

export const createProduct = async (data) => {
  return await api.post(`${config.appUrl}/api/products`, data);
};

export const updateProduct = async (id,data) => {
  return await api.put(`${config.appUrl}/api/products/${id}`, data);
};

export const deleteProduct = async (id) => {
  console.log(id)
  return await api.delete(`${config.appUrl}/api/products/${id}`);
};