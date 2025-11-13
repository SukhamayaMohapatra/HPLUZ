import React from "react";
import HeroPage from "../HeroSection/HeroPage";
import DashPage from "../Dashboard/page";
import DocPage from "../doctor-directory/page";

const LayoutPage = () => {
  return (
    <>
      <HeroPage />
      <DashPage />
    </>
  );
};

export default LayoutPage;
