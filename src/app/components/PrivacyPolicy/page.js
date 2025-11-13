import { Box, CardMedia } from "@mui/material";
import React from "react";
import Page from "../Header/Page";
import FotterPage from "../Fotter/FotterPage";
import Image from "next/image";
const Ppage = () => {
  return (
    <>
      <Page />
      <Image
        src="/images/Privacy.png"
        alt="privacy policy"
        width={1080}
        height={1222}
        style={{
          marginTop: "100px",
          marginLeft: "450px",
        }}
      />
      <FotterPage />
    </>
  );
};

export default Ppage;
