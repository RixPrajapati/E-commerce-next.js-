import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthentication: false,

      loginUser: (user) =>
        set({
          user,
          isAuthentication: true,
        }),

      registerUser: (user) =>
        set({
          user,
          isAuthentication: true,
        }),

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
