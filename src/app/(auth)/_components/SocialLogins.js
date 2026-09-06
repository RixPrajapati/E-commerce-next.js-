import Image from "next/image";
import React from "react";
import googleLogo from "@/assets/images/google.png";
import appleLogo from "@/assets/images/apple.png";

const SocialLogins = () => {
  return (
    <section className="border-b pb-5 border-gray-200 mb-5">
      <div className="flex items-center justify-between gap-5">
        <button className="w-full flex justify-center items-center gap-2 border border-gray-300 rounded py-1 px-4 text-xsm">
          <Image
            src={googleLogo}
            height={32}
            width={32}
            alt="google"
            className="h-4 w-auto"
          />
          Login with Google
        </button>
        <button className="w-full flex justify-center items-center gap-2 border border-gray-300 rounded py-1 px-4 text-xsm">
          <Image
            src={appleLogo}
            height={32}
            width={32}
            alt="google"
            className="h-4 w-auto"
          />
          Login with Apple
        </button>
      </div>
      <div>

      </div>
    </section>
  );
};

export default SocialLogins;
