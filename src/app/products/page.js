import { getProducts } from "@/api/products";
import Link from "next/link";
import ProductsCard from "./_components/Card";

export const metadata = {
  title: "Products",
};

const ProductPage = async ({ searchParams }) => {
  const products = await getProducts();
  // console.log(products);
  // console.log(await searchParams);

  return (
    <>
      <h2 className="text-center mb-8 font-bold text-2xl dark:text-white">
        Featured products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductsCard {...product} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
