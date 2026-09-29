import Header from "@/components/Header";
import usePreferenceStore from "@/stores/preferenceStore";
import React from "react";

const MainLayout = ({children}) => {
  const {theme}=usePreferenceStore.getState()
  return (
    <div className={theme}>
      {children}
    </div>
  );
};

export default MainLayout;
