import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthentication: false,

      loginUser: (user) => {
        set({
          user,
          isAuthentication: true,
        });
        localStorage.setItem("authToken", user.token);
      },

      registerUser: (user) => {
        set({
          user,
          isAuthentication: true,
        });
        localStorage.setItem("authToken", user.token);
      },

      logoutUser: () =>
        set({
          user: null,
          isAuthentication: false,
        }),
    }),
    {
      name: "zustand:auth-store",
    },
  ),
);

export default useAuthStore;
