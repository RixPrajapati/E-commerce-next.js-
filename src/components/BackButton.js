'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
    const router=useRouter();
  return (
    <button onClick={()=>router.back()}
    className="cursor-pointer flex items-center px-2 py-1 hover:bg-gray-300 hover:text-white transition delay-150 duration-300 ease-in-out rounded gap-2 mb-4">
      <FaArrowLeft className="mr-2" /> Back
    </button>
  );
};

export default BackButton;
