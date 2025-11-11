import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import PopUp from "../PopUp";
import Image from "next/image";

const HeroPage = () => {
  return (
    <>
      <PopUp />
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
            radial-gradient(at top left, #dcf7c6ff, transparent 50%),
          radial-gradient(at bottom right , #9696f7ff , #FFFFFF 30%) ,
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
              From online doctor consultations to medicine delivery and lab
              tests. HPluz connects you to everything you need for better
              health, all in one app.
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
              <Image
                src="/images/App Store.png"
                alt="..."
                width={152}
                height={44}
              />
              <Image
                src="/images/Google Play.png"
                alt="..."
                width={152}
                height={44}
              />
            </Stack>
          </Box>
          <Stack
            direction={"column"}
            sx={{
              marginTop: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Rethink Sans",
                fontSize: "14px",
                color: "#078CDF",
                fontWeight: "500",
                marginBottom: "12px",
              }}
            >
              Scroll to know more
            </Typography>
            <Image
              width={10}
              height={10}
              src={"/images/double_arrow.png"}
              alt="..."
              style={{ marginBottom: "10px" }}
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
            <Stack direction={"row"} sx={{ marginTop: "-40px" }}>
              <Box>
                <Image
                  src="/images/Group 14.png"
                  alt="..."
                  width={300}
                  height={342}
                  style={{
                    marginTop: "40px",
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
                <Image
                  src="/images/Group 13.png"
                  alt="..."
                  width={300}
                  height={400}
                  style={{
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
                <Image
                  src="/images/Group 14.png"
                  alt="..."
                  width={300}
                  height={355}
                  style={{
                    marginTop: "40px",
                    backgroundSize: "contain",
                    marginLeft: "-60px",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroPage;
