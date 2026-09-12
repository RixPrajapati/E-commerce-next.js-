import config from "@/config";
import axios from "axios";

export const login = async (data) => {
  return await axios.post(`${config.appUrl}/api/auth/login`, data);
};

export const signUp = async (data) => {
  return await axios.post(`${config.appUrl}/api/auth/register`, data);
};
