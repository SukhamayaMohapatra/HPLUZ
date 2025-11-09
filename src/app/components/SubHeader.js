import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardMedia, Stack } from "@mui/material";
import Link from "next/link";

const SubHeader = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: "none" }}>
        <Toolbar>
          <CardMedia
            component={"image"}
            image="./images/Logo.png"
            alt="logo img"
            sx={{ width: "121px", height: "33px", marginRight: "150px" }}
          />

          <Stack direction={"row"} sx={{ gap: "30px", flexGrow: 1 }}>
            <Typography
              sx={{
                fontFamily: "Rethink Sans",
                fontSize: "14px",
                fontWeight: "500",
                color: "black",
              }}
            >
              Features & Services
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontFamily: "Rethink Sans",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Why HPLUZ
            </Typography>
            <Link href={"components/Dashboard"}>
              <Typography
                sx={{
                  color: "black",
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                How It Works
              </Typography>
            </Link>
          </Stack>

          <Button
            variant="outlined"
            sx={{
              marginLeft: "20px",
              width: "146px",
              height: "40px",
              borderRadius: "99px",
              color: "white",
              bgcolor: "#078CDF",
              textTransform: "none",
              fontFamily: "Rethink Sans",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Download App
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SubHeader;
