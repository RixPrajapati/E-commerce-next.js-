import config from "@/config";
import axios from "axios";
import api from "./api";

export const getProducts = async (searchParam) => {
  let query='';
  if(searchParam?.userId) query+=`createdBy=${userId}`
  const res = await axios.get(`${config.appUrl}/api/products?limit=100&${query}`);
  return res.data;
};

export const createProduct = async (data) => {
  return await api.post(`${config.appUrl}/api/products`, data);
};
