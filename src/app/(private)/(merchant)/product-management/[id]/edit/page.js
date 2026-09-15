import { getProductsById } from "@/api/products";
import ProductForm from "../../_components/Form";

const EditProductPage = async({params}) => {
    const {id}=await params;
    const product=await getProductsById(id);
    // console.log(product)
  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit product
        </h2>

        <ProductForm product={product}/>
      </div>
    </section>
  );
};

export default EditProductPage;
