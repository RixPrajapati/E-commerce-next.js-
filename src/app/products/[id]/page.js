import React from "react";

const ProductDetail = async ({ params }) => {
  const { id } = await params;
  try {
    const products = await fetch(
      `https://mern-20260320-api.vercel.app/api/products/${id}`,
    ).then((res) => res.json());
    console.log(products);
  } catch (err) {
    throw err;
  }

  return <div>Product Detail by id : {id}</div>;
};

export default ProductDetail;
