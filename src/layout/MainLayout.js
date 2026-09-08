import Header from "@/components/Header";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
