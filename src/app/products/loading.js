import Spinner from "@/components/Spinner";
import placeholder from "@/assets/images/placeholder.png"
import Image from "next/image";

export const LoadingCard = () => {
  return (
    <div className="product-card animate-pulse overflow-hidden rounded-lg">
      {/* Image */}
      <Image
              className="w-full h-40 object-cover"
              src={placeholder}
              alt={`image`}
              width={400}
              height={300}
            />

      <div className="bg-white dark:bg-gray-900 pt-3 px-4 pb-4">
        {/* Category */}
        <div className="h-5 w-20 rounded bg-accent/10 dark:bg-accent/20 mb-2" />

        {/* Name */}
        <div className="h-6 w-4/5 rounded bg-gray-200 dark:bg-gray-700 mb-2" />

        {/* Brand */}
        <div className="h-4 w-1/2 rounded bg-gray-100 dark:bg-gray-800 my-2" />

        {/* Price */}
        <div className="h-8 w-24 rounded bg-primary/10 dark:bg-primary/20 my-2" />

        {/* Buttons */}
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <div className="h-10 w-full rounded-3xl bg-gray-100 dark:bg-gray-800 mt-2" />

          <div className="h-10 w-full rounded-3xl bg-primary/20 dark:bg-primary/30 mt-2" />
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <>
      <h2 className="text-center mb-8 font-bold text-2xl dark:text-white">
        Featured products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </div>
    </>
  );
};

export default Loading;
