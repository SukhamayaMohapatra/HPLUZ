import { Box, CardMedia } from "@mui/material";
import React from "react";
import Page from "../Header/Page";
import FotterPage from "../Fotter/FotterPage";

const Ppage = () => {
  return (
    <>
      <Page />
      <CardMedia
        image="./images/Privacy.png"
        alt="privacy policy"
        sx={{
          marginTop: "100px",
          marginLeft: "450px",
          width: "1080px",
          height: "1222px",
        }}
      />
      <FotterPage />
    </>
  );
};

export default Ppage;
