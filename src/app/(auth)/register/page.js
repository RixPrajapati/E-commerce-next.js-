import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import SocialLogins from "../_components/SocialLogins";

const RegisterPage = () => {
  return (
    <section className="min-h-[80vh]">
  <div className="flex flex-col justify-center px-6 py-6 sm:px-8 lg:px-10">
    <div className="mx-auto w-full max-w-md">

      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-dark">
          Create an Account
        </h1>
      </div>

      <SocialLogins />

      {/* Register Form */}
      <form className="space-y-3">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-dark"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Rix Prajapati"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
            text-sm text-dark outline-none transition
            placeholder:text-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-dark"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="rix@gmail.com"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
            text-sm text-dark outline-none transition
            placeholder:text-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-xs font-medium text-dark"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="98xxxxxxxx"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
            text-sm text-dark outline-none transition
            placeholder:text-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-medium text-dark"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2
            text-sm text-dark outline-none transition
            placeholder:text-gray-400
            focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 pt-1">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 h-3.5 w-3.5 accent-primary"
          />

          <label
            htmlFor="terms"
            className="text-xs text-light"
          >
            I agree to the{" "}
            <Link
              href="#"
              className="font-medium text-primary hover:text-primary-dark hover:underline"
            >
              Terms & Conditions
            </Link>
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-3 py-2.5
          text-sm font-semibold text-white transition
          hover:bg-primary-dark
          focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          Create Account
        </button>
      </form>

      {/* Login */}
      <p className="mt-4 text-center text-xs text-light">
        Already have an account?{" "}
        <Link
          href={LOGIN_ROUTE}
          className="font-semibold text-primary hover:text-primary-dark hover:underline"
        >
          Login
        </Link>
      </p>

    </div>
  </div>
</section>
  );
};

export default RegisterPage;
