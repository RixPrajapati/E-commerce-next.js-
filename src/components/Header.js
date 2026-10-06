"use client";

import {
  CART_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  navMenu,
} from "@/constants/routes.js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/images/logo.jpg";
import Image from "next/image";
import useAuthStore from "@/stores/authstore";
import usePreferenceStore from "@/stores/preferenceStore";
import useCartStore from "@/stores/cartStore";

const Header = () => {
  const isAuthentication = useAuthStore((state) => state.isAuthentication);
  const logoutUser = useAuthStore((state) => state.logoutUser);
  const { toggleTheme } = usePreferenceStore.getState();
  const theme = usePreferenceStore((state) => state.theme);
  const products = useCartStore((state) => state.products);
  const pathName = usePathname();
  const router = useRouter();

  function handleLogout() {
    logoutUser();
    router.push(LOGIN_ROUTE);
  }


  return (
    <header className="py-4 shadow-md bg-white dark:bg-gray-950 sticky top-0 z-10">
      <div className="container mx-auto lg:px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FashionWear"
              height={32}
              width={32}
              className="h-9"
            />
            <h1 className="text-xl lg:text-2xl font-bold mt-1 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              FashionWear
            </h1>
          </div>
          <nav className="items-center gap-3 hidden md:flex">
            {navMenu.map((menu, index) => {
              const isActive =
                pathName == menu.route ||
                (menu.route != HOME_ROUTE && pathName.startsWith(menu.route));

              return (
                <Link
                  key={index}
                  className={`text-dark dark:text-gray-200 px-2 py-1 hover:text-primary ${isActive ? "text-primary" : ""}`}
                  href={menu.route}
                >
                  {menu.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button
              id="lightThemeSwitcher"
              onClick={toggleTheme}
              className="px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              {theme == "light" ? "🌙" : "🌞"}
            </button>

            {isAuthentication ? (
              <>
                <Link
                  href={CART_ROUTE}
                  className="px-4 pt-1 pb-2 rounded-3xl bg-gray-100 dark:bg-gray-700 h-auto"
                >
                  🛒
                  <span className="bg-primary px-2 py-0.5 text-xs rounded-xl text-white">
                    {products.length}
                  </span>
                </Link>
                <button
                  type="button"
                  className="bg-primary-dark text-white rounded-xl px-5 py-1.5 hover:bg-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="bg-primary-dark text-white rounded-xl px-5 py-1.5 hover:bg-primary"
                href={LOGIN_ROUTE}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
