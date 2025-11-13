import { CardMedia } from "@mui/material";
import React from "react";
import Page from "../Header/Page";
import FotterPage from "../Fotter/FotterPage";
import Image from "next/image";
const Tpage = () => {
  return (
    <>
      <Page />
      <Image
        src="/images/Terms.png"
        alt="terms policy"
        width={1080}
        height={1824}
        style={{
          marginTop: "100px",
          marginLeft: "450px",
        }}
      />
      <FotterPage />
    </>
  );
};

export default Tpage;
