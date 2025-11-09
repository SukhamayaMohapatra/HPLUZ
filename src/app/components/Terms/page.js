import { CardMedia } from "@mui/material";
import React from "react";
import Page from "../Header/Page";
import FotterPage from "../Fotter/FotterPage";

const Tpage = () => {
  return (
    <>
      <Page />
      <CardMedia
        image="./images/Terms.png"
        alt="privacy policy"
        sx={{
          marginLeft: "450px",
          marginTop: "100px",
          width: "1080px",
          height: "1842px",
        }}
      />
      <FotterPage />
    </>
  );
};

export default Tpage;
