import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DashPage = () => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            marginTop: "50px",
            width: "124px",
            height: "28px",
            borderRadius: "8px",
            bgcolor: "#078CDF14",
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
          <Image
            src="/images/Services1.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services2.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services3.png"
            alt="..."
            width={352}
            height={256}
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
          <Image
            src="/images/Services4.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services5.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services6.png"
            alt="..."
            width={352}
            height={256}
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
          <Image
            src="/images/Services7.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services8.png"
            alt="..."
            width={352}
            height={256}
          />
          <Image
            src="/images/Services9.png"
            alt="..."
            width={352}
            height={256}
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
        <Image
          src="/images/DashboardBG.png"
          alt="..."
          width={1280}
          height={646}
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
        <Image src="/images/About1.png" alt="..." width={352} height={600} />
        <Image src="/images/About3.png" alt="..." width={352} height={600} />
        <Image src="/images/About2.png" alt="..." width={352} height={600} />
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

        <Box
          sx={{
            marginTop: "50px",
            bgcolor: "#3183FF",
            width: "1280px",
            height: "482px",
            borderRadius: "30px",
            padding: "60px",
          }}
        >
          <Stack direction={"row"} sx={{ gap: "40px" }}>
            <Stack
              direction={"column"}
              sx={{ gap: "12px", marginLeft: "30px" }}
            >
              <Typography
                sx={{
                  width: "114px",
                  height: "28px",
                  bgcolor: "#FFFFFF29",
                  borderRadius: "8px",
                  padding: "4px 8px 4px 8px",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontFamily: "Rethink Sans",
                  fontWeight: "600",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                Meet Our Doctors
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  fontFamily: "Rethink Sans",
                  color: "#FFFFFF",
                }}
              >
                Connect with Trusted & <br /> Experienced Healthcare
                <br />
                Professionals.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rethink Sans",
                  color: "#FFFFFF",
                }}
              >
                Browse our doctor directory to explore profiles and check
                experience.
              </Typography>
              <Link href={"/components/doctor-directory"}>
                <Button
                  sx={{
                    marginTop: "40px",
                    width: "158px",
                    height: "40px",
                    bgcolor: "#FFFFFF",
                    color: "#078CDF",
                    textTransform: "none",
                    borderRadius: "99px",
                  }}
                >
                  View All Doctors
                  <ArrowForwardIcon
                    sx={{
                      color: "#078CDF",
                      width: "16px",
                      height: "16px",
                      marginLeft: "5px",
                    }}
                  />
                </Button>
              </Link>
            </Stack>
            <Box sx={{ left: "202px", position: "relative" }}>
              <Image
                width={527}
                height={352}
                src={"/images/Doctor.png"}
                alt="..."
                objectFit="cover"
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  background:
                    "linear-gradient( rgba(49,131,255,0) , rgba(49,131,255,1))",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default DashPage;
