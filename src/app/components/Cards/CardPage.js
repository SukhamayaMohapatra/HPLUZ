import { Box, Divider, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CardPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Stack direction={"column"} sx={{ gap: "40px" }}>
        <Stack direction={"row"} sx={{ gap: "20px" }}>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction={"row"} sx={{ gap: "20px" }}>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction={"row"} sx={{ gap: "20px" }}>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "370px",
              height: "250px",
              marginTop: "50px",
              boxShadow: "8px 8px 10px rgba(221, 244, 239, 1)",
              p: 2,
            }}
          >
            <Stack direction={"row"} sx={{ gap: "30px", marginLeft: "15px" }}>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontFamily: "Rethink Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "16px",
                  }}
                >
                  Dr. Soumya Ranjan Sahoo
                </Typography>
                <Stack direction={"row"} sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                    }}
                  >
                    Cardiologist
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      marginTop: "-2px",
                      width: "65px",
                      marginLeft: "10px",
                      gap: "7px",
                      bgcolor: "#EAFBF8",
                      borderRadius: "8px",
                      fontFamily: "Rethink Sans",
                    }}
                  >
                    <StarIcon
                      fontSize="small"
                      sx={{ color: "#00A388", marginTop: "3px" }}
                    />
                    <Typography
                      sx={{
                        marginTop: "2px",
                        fontWeight: 700,
                        fontStyle: "Bold",
                        fontSize: "16px",
                        color: "#00A388",
                      }}
                    >
                      4.4
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={"row"}
                  sx={{ gap: "10px", marginTop: "15px" }}
                >
                  <CalendarMonthIcon sx={{ color: "#717171" }} />
                  <Typography
                    sx={{
                      fontFamily: "Rethink Sans",
                      fontWeight: 500,
                      fontStyle: "Bold",
                      fontSize: "12px",
                      color: "#717171",
                      marginTop: "5px",
                    }}
                  >
                    3Yrs Experience
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={"./images/Avatar.png"}
                alt="..."
                style={{
                  borderRadius: "59px",
                  width: "46px",
                  height: "46px",
                  marginLeft: "25px",
                }}
              />
            </Stack>
            <Divider
              sx={{
                borderStyle: "dashed",
                color: "#5A6672",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            />
            <Stack direction={"column"}>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                Sadhana Clinic
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rethink Sans",
                  fontWeight: "400",
                  fontSize: "12px",
                  color: "#5A6672",
                }}
              >
                14/24, BDA colony, Chandrashekh-arpur, Bhubane...
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardPage;
