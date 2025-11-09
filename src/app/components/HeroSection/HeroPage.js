import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import PopUp from "../PopUp";

const HeroPage = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          marginTop: "100px",
          width: "95%",
          height: 744,
          borderRadius: "18px",

          background: `
            radial-gradient(at top left, #dcf7c6ff, transparent 100%),
          radial-gradient(at bottom right , #9696f7ff , #FFFFFF 100%) ,
          radial-gradient(at top right , #FFFFFF , #FFFFFF 100%) ,
          radial-gradient(at bottom left , #FFFFFF , #FFFFFF 100%) `,
          bgcolor: "white",
        }}
      >
        <Stack
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "45px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Rethink Sans",
              fontSize: "40px",
              fontWeight: "600",
              color: "#2E2E2E",
              width: "682px",
              height: "100px",
            }}
          >
            Your complete healthcare companion anytime, anywhere.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Rethink Sans",
              fontSize: "10px",
              fontWeight: "400",
              color: "#2E2E2E",
              width: "485px",
              height: "40px",
              marginTop: "40px",
              marginLeft: "100px",
            }}
          >
            From online doctor consultations to medicine delivery and lab tests.
            HPluz connects you to everything you need for better health, all in
            one app.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} sx={{ gap: "5px" }}>
            <CardMedia
              component={"image"}
              image="./images/App Store.png"
              alt="..."
              sx={{ width: "152px", height: "44px" }}
            />
            <CardMedia
              component={"image"}
              image="./images/Google Play.png"
              alt="..."
              sx={{ width: "152px", height: "44px" }}
            />
          </Stack>
        </Box>
        <Stack
          direction={"column"}
          sx={{
            marginTop: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Rethink Sans",
              fontSize: "14px",
              color: "#078CDF",
              fontWeight: "500",
            }}
          >
            Scroll to know more
          </Typography>
          <img
            src={"./images/double_arrow.png"}
            style={{ width: "10px", height: "10px" }}
          />
        </Stack>
        <Box
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"}>
            <Box>
              <CardMedia
                component={"image"}
                image="./images/Group 14.png"
                alt="group img"
                sx={{
                  marginTop: "15px",
                  width: "300px",
                  height: "382px",
                  backgroundSize: "contain",
                  marginRight: "-60px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <CardMedia
                component={"image"}
                image="./images/Group 13.png"
                alt="group img"
                sx={{
                  width: "300px",
                  height: "362px",
                  backgroundSize: "contain",
                  zIndex: "99",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <CardMedia
                component={"image"}
                image="./images/Group 15.png"
                alt="group img"
                sx={{
                  width: "300px",
                  height: "382px",
                  backgroundSize: "contain",
                  marginLeft: "-60px",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPage;
