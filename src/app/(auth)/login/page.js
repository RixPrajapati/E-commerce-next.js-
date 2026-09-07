"use client";
import React, { useState } from "react";
import SocialLogins from "../_components/SocialLogins";
import Link from "next/link";
import { REGISTER_ROUTE } from "@/constants/routes";
import { useForm } from "react-hook-form";
import { login } from "@/api/products";
import PasswordInput from "@/components/PasswordInput";
import useAuthStore from "@/stores/authstore";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const { loginUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  function submitForm(data) {
    setLoading(true);
    login(data)
      .then((res) => {
        loginUser(res.data);
        toast.success("Login Successful!")
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-md">
          {/* Login content */}

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-dark">
              Login to your account
            </h1>
          </div>

          <SocialLogins />

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-dark"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3
          text-dark outline-none transition
          placeholder:text-gray-400
          focus:border-accent focus:ring-2 focus:ring-accent/20"
                {...register("email")}
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-dark"
                >
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary-dark hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <PasswordInput id="password" {...register("password")} />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />

              <label htmlFor="remember" className="text-sm text-light">
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3
        font-semibold text-white transition
        hover:bg-primary-dark
        focus:outline-none focus:ring-2 focus:ring-primary/30 relative disabled:opacity-60"
              disabled={loading}
            >
              Login
              {loading && (
                <Spinner className="absolute top-1/2 -translate-y-1/2 right-3 w-6! h-6! fill-primary" />
              )}
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-light">
            Don't have an account?{" "}
            <Link
              href={REGISTER_ROUTE}
              className="font-semibold text-primary hover:text-primary-dark hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
