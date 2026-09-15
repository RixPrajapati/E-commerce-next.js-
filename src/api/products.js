import config from "@/config";
import axios from "axios";
import api from "./api";

export const getProducts = async (searchParam) => {
  let query='';
  console.log(searchParam)
  if(searchParam?.userId) query+=`createdBy=${searchParam?.userId}`
  console.log(query)
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