import config from "@/config"
import axios from "axios"

export const getProducts=async ()=>{
    const res=await axios.get(`${config.appUrl}/api/products`);
    return res.data;
}