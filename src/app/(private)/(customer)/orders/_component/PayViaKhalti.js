"use client";

import { payViaKhalti } from "@/api/order";
import { useState } from "react";
import khaltiLogo from "@/assets/images/khalti-ime-logo.png";
import Image from "next/image";
import Spinner from "@/components/Spinner";

const PayViaKhalti = ({ orderId }) => {
  const [loading, setLoading] = useState(false);
  const initKhaltiPayment = () => {
    setLoading(true);
    payViaKhalti(orderId)
      .then((res) => {
        window.location.href=res.data.payment_url;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <button
      onClick={initKhaltiPayment}
      className="bg-white text-white px-4 py-2 rounded-md shadow flex gap-2 items-center"
    >
      <Image
        src={khaltiLogo}
        alt="khalti"
        height={40}
        width={100}
        className="h-5 w-auto"
      />
      {loading && <Spinner className="h-5! w-5! fill-primary-600!" />}
    </button>
  );
};

export default PayViaKhalti;
