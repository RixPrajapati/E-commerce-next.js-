import config from "@/config"
import axios from "axios"

export const getProducts=async ()=>{
    const res=await axios.get(`${config.appUrl}/api/products`);
    return res.data;
}

export const login=async(data)=>{
    const res=await axios.post(`${config.appUrl}/api/auth/login`,data);
    return res.data
}

