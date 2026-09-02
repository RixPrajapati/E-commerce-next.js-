import Link from "next/link";

export const metadata = {
  title: "Products",
};

const ProductPage = async ({ searchParams }) => {
  const res = await fetch("https://e-commerce-rix.vercel.app/api/products");
  const products = await res.json();
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
