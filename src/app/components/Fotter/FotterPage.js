import {
  AppBar,
  Box,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const FotterPage = () => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        bgcolor: "#F5F7FB",
        borderTop: "4px solid #66AF2C",
        width: "100%",
        height: "376px",
      }}
    >
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ gap: "20px", marginTop: "100px", marginLeft: "100px" }}
        >
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <CardMedia
              component={"image"}
              image="./images/Logo.png"
              alt="logo img"
              sx={{ width: "121px", height: "33px" }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              HPluz connects you to everything you need for better health, all
              in one app.
            </Typography>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px", marginLeft: "250px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Quick Links
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Services
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Why choose HPluz
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              How it works
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Doctor Directory
            </Typography>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Legal
            </Typography>
            <Link href={"/components/PrivacyPolicy"}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                  width: "272px",
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link href={"/components/Terms"}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                  width: "272px",
                }}
              >
                Terms of Use
              </Typography>
            </Link>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Contact Us
            </Typography>
            <Stack direction={"row"} sx={{ gap: "10px" }}>
              <img
                src={"./images/location.png"}
                alt="..."
                style={{
                  width: "16px",
                  height: "16px",
                  marginTop: "2px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                  width: "272px",
                }}
              >
                Bhaktamadhunagar, Bhubaneswar, 751030, India
              </Typography>
            </Stack>

            <Stack direction={"row"} sx={{ gap: "10px" }}>
              <img
                src={"./images/call.png"}
                alt="..."
                style={{
                  width: "16px",
                  height: "16px",
                  marginTop: "2px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                }}
              >
                +91 9827400247
              </Typography>
            </Stack>

            <Stack direction={"row"} sx={{ gap: "10px" }}>
              <img
                src={"./images/sms.png"}
                alt="..."
                style={{
                  width: "16px",
                  height: "16px",
                  marginTop: "2px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                }}
              >
                support@hpluz.in
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} sx={{ gap: "10px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Rethink Sans",
                width: "272px",
              }}
            >
              Download the app
            </Typography>
            <CardMedia
              component={"image"}
              image="./images/App Store.png"
              alt="logo img"
              sx={{ width: "152px", height: "44px" }}
            />
            <CardMedia
              component={"image"}
              image="./images/Google Play.png"
              alt="logo img"
              sx={{ width: "152px", height: "44px" }}
            />
          </Stack>
        </Stack>
        <Divider sx={{ marginTop: "30px", width: "90%", bgcolor: "#D9D9D9" }} />
      </Stack>
      <Stack direction={"row"}>
        <Typography
          sx={{
            fontFamily: "Rethink Sans",
            fontWeight: "400",
            fontSize: "14px",
            color: " #2E2E2E",
            marginLeft: "200px",
            marginTop: "50px",
          }}
        >
          © 2025 Hpluz. All rights reserved.
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "1100px",
            marginTop: "50px",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Rethink Sans",
              fontWeight: "400",
              fontSize: "14px",
              color: " #2E2E2E",
            }}
          >
            Follow Us On
          </Typography>
          <img
            src={"./images/Facebook.png"}
            alt="..."
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src={"./images/Instagram.png"}
            alt="..."
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src={"./images/Linkedin.png"}
            alt="..."
            style={{ width: "16px", height: "16px" }}
          />
          <img
            src={"./images/Twitter.png"}
            alt="..."
            style={{ width: "16px", height: "16px" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FotterPage;
