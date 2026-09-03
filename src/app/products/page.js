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
      <section id="featured" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8 font-bold text-2xl dark:text-white">
            Featured products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-card">
              <img
                className="w-full h-40 object-cover"
                src="assets/images/jeans.jpg"
                alt="featured"
              />
              <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
                <h4 className="dark:text-white font-semibold text-xl">
                  Levis Jeans for Mens
                </h4>
                <p className="my-1 font-bold text-2xl text-primary">Rs. 3500</p>
                <button className="bg-background dark:bg-gray-800 px-4 py-2 w-full text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease hover:text-primary dark:text-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
