import { createOrder } from "@/api/order";
import Spinner from "@/components/Spinner";
import { ORDERS_ROUTE } from "@/constants/routes";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Checkout = ({ products, payingPrice }) => {
  const [loading,setLoading]=useState(false);
  const { clearCart } = useCartStore.getState();
  const router = useRouter();

  function checkoutOrder() {
    setLoading(true)
    createOrder({
      totalPrice: payingPrice,
      orderItems: products.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    })
      .then(() => {
        toast.success("Created order successfully");
        router.push(ORDERS_ROUTE);
        clearCart();
      })
      .catch((err)=>{
        console.log(err);
        toast.error("Unable to checkout!")
      }).finally(()=>{
        setLoading(false)
      });
  }

  return (
    <button
      type="button"
      disabled={loading}
      className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20"
      onClick={checkoutOrder}
    >
      Proceed to Checkout
      {loading && <Spinner className="h-6! w-6! ml-2"/>}
    </button>
  );
};

export default Checkout;
