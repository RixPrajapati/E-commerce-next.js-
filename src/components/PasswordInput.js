'use client'

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = (promps) => {
  const [showPassword,setShowPassword]=useState(false)
  return (
    <div className="relative">
      <input
        type={showPassword?"text":"password"}
        placeholder="●●●●●●●●●"
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
            text-sm text-dark outline-none transition
            placeholder:text-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/20"
        {...promps}
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-2 py-1" type="button" onClick={()=>setShowPassword(!showPassword)}>
        {showPassword?<FaEye/>:<FaEyeSlash/>}
      </button>
    </div>
  );
};

export default PasswordInput;
