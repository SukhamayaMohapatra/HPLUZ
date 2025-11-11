import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardMedia, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const SubHeader = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: "none" }}>
        <Toolbar>
          <Link href={"/"}>
            <Image
              src="/images/Logo.png"
              alt="logo img"
              width={121}
              height={33}
              style={{ marginLeft: "30px", marginRight: "20px" }}
            />
          </Link>

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
            <Link href={"Dashboard"}>
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
