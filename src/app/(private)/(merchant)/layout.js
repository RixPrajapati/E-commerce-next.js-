'use client'

import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { ROLES_MERCHANT } from "@/constants/userRoles";
import useAuthStore from "@/stores/authstore"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MerchantLayout = ({children}) => {
    const {isAuthentication,user}=useAuthStore.getState();
    const router=useRouter();

    useEffect(()=>{
        if(!isAuthentication) router.replace(LOGIN_ROUTE)

        if(!user.roles.includes(ROLES_MERCHANT)) router.replace(HOME_ROUTE)
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

export default MerchantLayout