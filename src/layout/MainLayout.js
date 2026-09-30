"use client"

import usePreferenceStore from "@/stores/preferenceStore";
import React from "react";

const MainLayout = ({ children }) => {
  const theme = usePreferenceStore((state) => state.theme);
  return <div className={theme}>{children}</div>;
};

export default MainLayout;
