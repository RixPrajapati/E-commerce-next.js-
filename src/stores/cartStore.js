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

        if(existingProduct){
          set({
            products:products.map((item)=>{
              if(item._id==product._id){
                return{
                  ...item,
                  quantity: item.quantity+1,
                };
              }
              return item;
            })
          })
          return;
        }

        set({
          products: [...products, { ...product, quantity: 1 }],
        });
      },
      removeFromCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
      clearCart: () => {},
    }),
    {
      name: "zustand:cart-storage",
    },
  ),
);

export default useCartStore;
