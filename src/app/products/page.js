import { getProducts } from "@/api/products";
import Link from "next/link";
import ProductsCard from "./_components/Card";
import { LoadingCard } from "./loading";
import Filters from "./_components/Filters";

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
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] xl:grid-col-[1fr_3fr]">
        <Filters/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <ProductsCard {...product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
