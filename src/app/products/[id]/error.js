"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

const error = ({ error }) => {
  const route = useRouter();
  setTimeout(route.push(PRODUCTS_ROUTE), 5000);
  return <div>{error.message}</div>;
};

export default error;
