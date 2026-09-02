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
  };
};

const ProductDetail = async ({ params }) => {
  const { id } = await params;

  const product = await fetchProductById(id);

  return (
    <div>
      <h1 className="text-3xl">Product name : {product.name}</h1>
      <p>Product category : {product.category}</p>
      <p>Product price : {product.price}</p>
    </div>
  );
};

export default ProductDetail;
