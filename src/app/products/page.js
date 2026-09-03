import { getProducts } from "@/api/products";
import Link from "next/link";

export const metadata = {
  title: "Products",
};

const ProductPage = async ({ searchParams }) => {
  const products = await getProducts();
  // console.log(products);
  // console.log(await searchParams);

  return (
    <>
      <h1 className="text-3xl">Products</h1>

      {products.map((product, index) => (
        <li key={index}>
          <Link href={`/products/${product._id}`}>{product.name}</Link>
        </li>
      ))}
    </>
  );
};

export default ProductPage;
