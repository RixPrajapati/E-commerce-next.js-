"use client";

import { confirmOrder } from "@/api/order";
import Spinner from "@/components/Spinner";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();

  const status = searchParams.get("status");

  useEffect(() => {
    if (status == "Completed") {
      toast.success("Payment success");

      confirmOrder(params.id, "success")
        .then(() => {
          router.replace(ORDERS_ROUTE);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Payment failed", {
        onClose: () => {
          router.replace(ORDERS_ROUTE);
        },
      });
    }
  });

  return <div className="flex items-center justify-center py-24">
    <Spinner className="fill-primary!"/>
  </div>;
};

export default OrderConfirmationPage;
