import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const DashPage = () => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            marginTop: "50px",
            width: "124px",
            height: "28px",
            borderRadius: "8px",
            border: "1px solid #078CDF",
            bgcolor: "#d6ecf9ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#078CDF",
              fontFamily: "Rethink Sans",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            Features & Services
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: "40px",
            textAlign: "center",
            fontFamily: "Rethink Sans",
            fontWeight: "600",
            fontSize: "40px",
            color: "#2E2E2E",
            width: "658px",
            height: "100px",
          }}
        >
          Everything you need for your health, Just a tap away.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Rethink Sans",
            fontWeight: "400",
            fontSize: "14px",
            color: "#2E2E2E",
            width: "317px",
            height: "40px",
            marginTop: "30px",
          }}
        >
          Skip the queues, the calls, and the confusion.
          <br /> HPluz makes healthcare simple, fast, and reliable.
        </Typography>
      </Stack>
      <Stack direction={"column"} sx={{ gap: "10px", marginTop: "50px" }}>
        <Stack
          direction={"row"}
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image="./images/Services1.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services2.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services3.png"
            sx={{ width: "352px", height: "256px" }}
          />
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image="./images/Services4.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services5.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services6.png"
            sx={{ width: "352px", height: "256px" }}
          />
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image="./images/Services7.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services8.png"
            sx={{ width: "352px", height: "256px" }}
          />
          <CardMedia
            image="./images/Services9.png"
            sx={{ width: "352px", height: "256px" }}
          />
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <CardMedia
          image="./images/DashboardBG.png"
          sx={{ width: "1280px", height: "646px" }}
        />
      </Box>
      <Stack
        direction={"column"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            marginTop: "50px",
            width: "124px",
            height: "28px",
            borderRadius: "8px",
            background: "#078CDF14",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#078CDF",
              fontFamily: "Rethink Sans",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            How it Works
          </Typography>
        </Box>
        <Typography
          sx={{
            marginTop: "10px",
            textAlign: "center",
            fontFamily: "Rethink Sans",
            fontWeight: "600",
            fontSize: "40px",
            color: "#2E2E2E",
            width: "658px",
          }}
        >
          Get started in just a few steps
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Rethink Sans",
            fontWeight: "500",
            fontSize: "14px",
            color: "#2E2E2E",
            width: "523px",
            marginTop: "20px",
          }}
        >
          Healthcare shouldn’t be complicated. With HPluz,
          <br /> everything you need from consultations to lab reports is just a
          few taps away.
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "60px",
        }}
      >
        <CardMedia
          image="./images/About1.png"
          sx={{ width: "352px", height: "600px" }}
        />
        <CardMedia
          image="./images/About3.png"
          sx={{ width: "352px", height: "600px" }}
        />
        <CardMedia
          image="./images/About2.png"
          sx={{ width: "352px", height: "600px" }}
        />
      </Stack>
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#078CDF",
            color: "white",
            width: "146px",
            height: "40px",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "99px",
            textTransform: "none",
            fontFamily: "Rethink Sans",
          }}
        >
          Download App
        </Button>
        <CardMedia
          image="./images/About4.png"
          sx={{
            width: "90%",
            height: "482px",
            backgroundSize: "contain",
            marginTop: "50px",
          }}
        />
      </Stack>
    </>
  );
};

export default DashPage;
