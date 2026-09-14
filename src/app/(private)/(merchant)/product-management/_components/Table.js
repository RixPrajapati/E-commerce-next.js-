"use client";

import { getProducts } from "@/api/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCog, FaEye, FaImage } from "react-icons/fa";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Product
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Brand
            </th>
            <th scope="col" className="px-4 py-3">
              Price
            </th>
            <th scope="col" className="px-4 py-3">
              Stock
            </th>
            <th scope="col" className="px-4 py-3">
              Created At
            </th>
            <th scope="col" className="px-4 py-3">
              <FaCog />
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <th
                scope="row"
                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.imageUrls.length > 0 ? (
                  <Image
                    src={product.imageUrls[0]}
                    alt={product.name}
                    className="w-8 h-8 mr-3 object-cover rounded"
                    width={64}
                    height={64}
                  />
                ) : (
                  <FaImage className="w-8 h-8 mr-3 rounded text-gray-500" />
                )}
                <span className="font-medium">{product.name}</span>
              </th>
              <td className="px-4 py-2">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                {product.brand}
              </td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                Rs. {product.price}
              </td>
              <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  <div className={`inline-block w-4 h-4 mr-2 ${product.stock>10? "bg-green-700":"bg-red-700"}  rounded-full`} />
                  {product.stock}
                </div>
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.createdAt}
              </td>
              <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <FaEye />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
