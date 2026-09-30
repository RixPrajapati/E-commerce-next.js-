"use client";

import useCartStore from "@/stores/cartStore";
import React from "react";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartStore.getState();
  return (
    <button
    onClick={()=>addToCart(product)}
    className="bg-primary px-4 py-2 w-full text-center rounded-3xl mt-2 text-sm font-medium transition duration-300 ease text-white">
      Add to Cart
    </button>
  );
};

export default AddToCart;
