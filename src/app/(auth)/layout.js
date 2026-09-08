"use client";

import Header from "@/components/Header";
import useAuthStore from "@/stores/authstore";

import Image from "next/image";
import React, { useEffect } from "react";
import hero from "@/assets/images/auth-hero.jpg";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

const Layout = ({ children }) => {
  const { isAuthentication } = useAuthStore.getState();
  const router = useRouter();

  useEffect(() => {
    if (isAuthentication) {
      router.push(HOME_ROUTE);
    }
  }, []);
  if (isAuthentication) {
    return;
    }
  return (
    <section className="py-12 px-4">
      <div className="container px-4 mx-auto">
        <div className="lg:min-h-[70vh] w-full shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] ">
            <div className="hidden md:block relative ">
              <Image src={hero} alt="" fill className="object-cover" priority />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
