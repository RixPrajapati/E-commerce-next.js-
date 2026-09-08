'use client'

import { LOGIN_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authstore"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateLayout = ({children}) => {
    const {isAuthentication}=useAuthStore.getState();
    const router=useRouter();

    useEffect(()=>{
        if(!isAuthentication) router.replace(LOGIN_ROUTE)
    },isAuthentication)


    if(!isAuthentication){
        return;
    }

  return (
    <>
        {children}
    </>
  )
}

export default PrivateLayout