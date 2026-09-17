"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000000000;
const DEFAULT_CATEGORY = "";
const DEFAULT_BRANDS = [];

const Filters = () => {
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY);
  const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRANDS);
  const [search, setSearch] = useState("");

  const router=useRouter();

  const applyFilter = () => {
    const params=new URLSearchParams();

    params.set("sort",sort);
    params.set("min",minPrice);
    params.set("max",maxPrice);
    params.set("category",categoryFilter);
    params.set("brands",brandsFilter.join(','));

    router.push(`?${params.toString()}`)
  };

  const handleBrandsFilter = (brand) => {
    setBrandsFilter((prev) => {
      return prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand];
    });
  };

  return (
    <div className="hidden md:block shadow-md rounded-2xl py-5 px-4">
      <h3 className="font-semibold text-xl">Product Filter</h3>
      <div className="py-2">
        <h4>Sort by:</h4>
        <select
          name=""
          id=""
          onChange={(event) => {
            setSort(event.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value={JSON.stringify({ createdAt: -1 })}>
            Newest First
          </option>
          <option value={JSON.stringify({ createdAt: 1 })}>Oldest First</option>
          <option value={JSON.stringify({ price: 1 })}>Price: Low-High</option>
          <option value={JSON.stringify({ price: -1 })}>Price: High-Low</option>
          <option value={JSON.stringify({ name: 1 })}>Name: A - Z</option>
          <option value={JSON.stringify({ name: -1 })}>Name: Z - A</option>
        </select>
      </div>

      <div className="py-2">
        <h4>Price range: </h4>
        <label htmlFor="" className="text-sm">
          Min price:
        </label>
        <input
          type="number"
          name="min"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="1000"
          min={0}
          onChange={(event) => {
            setMinPrice(event.target.value);
          }}
        />
        <label htmlFor="" className="text-sm">
          Max price:
        </label>
        <input
          type="number"
          name="max"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="1000000"
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </div>

      <div className="py-2">
        <h4>Category:</h4>
        <select
          name=""
          id=""
          onChange={(event) => setCategoryFilter(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option value="Smartphone">Smartphone</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptop">Laptop</option>
        </select>
      </div>

      <div className="py-2">
        <h4>Brands :</h4>
        <div className="flex items-center mb-1">
          <input
            id="Samsung"
            type="checkbox"
            defaultValue
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            onChange={() => handleBrandsFilter("Samsung")}
          />
          <label
            htmlFor="Samsung"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Samsung
          </label>
        </div>
        <div className="flex items-center mb-1">
          <input
            id="Apple"
            type="checkbox"
            defaultValue
            onChange={() => handleBrandsFilter("Apple")}
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="Apple"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Apple
          </label>
        </div>
        <div className="flex items-center mb-1">
          <input
            id="LG"
            type="checkbox"
            defaultValue
            onChange={() => handleBrandsFilter("LG")}
            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
          <label
            htmlFor="LG"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            LG
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4">
        <button className="bg-red-600 w-full py-2 text-white rounded-xl">
          Reset
        </button>
        <button
          type="button"
          onClick={applyFilter}
          className="bg-blue-600 w-full py-2 text-white rounded-xl"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;
