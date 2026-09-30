import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (product) => {
        const products = get().products;

        const existingProduct = products.find(
          (item) => item._id == product._id,
        );

        if (existingProduct) {
          set({
            products: products.map((item) => {
              if (item._id == product._id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }
              return item;
            }),
          });
          return;
        }

        set({
          products: [...products, { ...product, quantity: 1 }],
        });
      },
      removeFromCart: (productId) => {
        const products = get().products;

        set({
          products: products.filter((item) => item._id !== productId),
        });
      },
      increaseQuantity: (productId) => {
        const products = get().products;
        set({
          products: products.map((item) => {
            if (item._id == productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        });
      },
      decreaseQuantity: (productId) => {
        const products = get().products;
        set({
          products: products.map((item) => {
            if (item._id == productId) {
              return {
                ...item,
                quantity: item.quantity<=1?1:item.quantity - 1,
              };
            }
            return item;
          }),
        });
      },
      clearCart: () => {
        set({
          products:[]
        })
      },
    }),
    {
      name: "zustand:cart-storage",
    },
  ),
);

export default useCartStore;
