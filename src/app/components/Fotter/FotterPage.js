import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            <Image src={"/images/Logo.png"} alt="..." width={121} height={33} />
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
              <Image
                src={"/images/location.png"}
                alt="..."
                width={16}
                height={16}
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
              <Image
                src={"/images/call.png"}
                alt="..."
                width={16}
                height={16}
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
              <Image src={"/images/sms.png"} alt="..." width={16} height={16} />
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

            <Button
              variant="outlined"
              sx={{
                color: "#000000",
                borderRadius: "8px",
                width: "152px",
                height: "44px",
                border: "1px solid #000000",
              }}
            >
              <Stack direction={"row"} sx={{ gap: "10px" }}>
                <Image
                  src={"/images/Apple1.png"}
                  alt="..."
                  width={23}
                  height={28}
                  style={{
                    backgroundSize: "contain",
                    marginLeft: "-10px",
                  }}
                />
                <Stack direction={"column"} sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontSize: "10px",
                      fontWeight: "400",
                      textTransform: "none",
                      marginTop: "-2px",
                    }}
                  >
                    Download on the
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "-5px",
                      fontFamily: "Rethink Sans",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "none",
                    }}
                  >
                    App Store
                  </Typography>
                </Stack>
              </Stack>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#000000",
                borderRadius: "8px",
                width: "152px",
                height: "44px",
                border: "1px solid #000000",
              }}
            >
              <Stack direction={"row"} sx={{ gap: "5px" }}>
                <Image
                  src={"/images/Play.png"}
                  alt="..."
                  width={28}
                  height={30}
                  style={{
                    backgroundSize: "contain",
                    marginTop: "3px",
                    marginLeft: "-5px",
                  }}
                />
                <Stack direction={"column"} sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Get it on
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "-5px",
                      fontFamily: "Rethink Sans",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "none",
                    }}
                  >
                    Google Play
                  </Typography>
                </Stack>
              </Stack>
            </Button>
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
          <Image
            src={"/images/Facebook.png"}
            alt="..."
            width={16}
            height={16}
          />
          <Image
            src={"/images/Instagram.png"}
            alt="..."
            width={16}
            height={16}
          />
          <Image
            src={"/images/Linkedin.png"}
            alt="..."
            width={16}
            height={16}
          />
          <Image src={"/images/Twitter.png"} alt="..." width={16} height={16} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FotterPage;
