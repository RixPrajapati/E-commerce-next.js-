import Image from "next/image";

const fetchProductById = async (id) => {
  const product = await fetch(
    `https://e-commerce-rix.vercel.app/api/products/${id}`,
  ).then((res) => res.json());
  if (!product.name) {
    throw "Product not found";
  }
  return product;
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const product = await fetchProductById(id);
  return {
    title: product.name,
    description: `${product.name} ${product.brand} ${product.category}`,
  };
};

const ProductDetail = async ({ params }) => {
  const { id } = await params;

  const product = await fetchProductById(id);

  return (
    <div>
      <Image
        src={product.imageUrls[0]}
        alt={product.name}
        height={400}
        width={600}
        className="w-full h-64"
      />
      <h1 className="text-3xl">Product name : {product.name}</h1>
      <p>Product category : {product.category}</p>
      <p>Product price : {product.price}</p>
    </div>
  );
};

export default ProductDetail;
