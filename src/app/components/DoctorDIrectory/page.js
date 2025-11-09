import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CardPage from "../Cards/CardPage";
import Page from "../Header/Page";
import FotterPage from "../Fotter/FotterPage";
import { CheckBox } from "@mui/icons-material";
import SubHeader from "../SubHeader";

const DocPage = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  return (
    <>
      <SubHeader />
      <Typography
        sx={{
          marginTop: "100px",
          marginLeft: "40px",
          fontFamily: "Rethink Sans",
          fontSize: "40px",
          fontWeight: "600",
          color: "#2E2E2E",
        }}
      >
        Discover Verified Doctors
      </Typography>
      <Typography
        sx={{
          marginLeft: "40px",
          fontFamily: "Rethink Sans",
          fontSize: "14px",
          fontWeight: "400",
          color: "#2E2E2E",
        }}
      >
        Connect with specialists, view profiles, and schedule consultations
        instantly anytime, anywhere from the mobile app.
      </Typography>
      <Stack direction={"row"} sx={{ marginLeft: "40px", marginTop: "50px" }}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          placeholder="Search Doctor"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            },
            bgcolor: "#F3F5F7",
            width: "400px",
            height: "48px",
            borderRadius: "12px",
          }}
        />
        <FormControl sx={{ marginLeft: "700px" }}>
          <InputLabel
            id="my-select-label"
            sx={{
              marginTop: "-2px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Rethink Sans",
              color: "#333333",
            }}
          >
            City
          </InputLabel>
          <Select
            slotProps={{
              root: {
                sx: {
                  "&::before": {
                    borderBottom: "none", // Removes the default underline
                  },
                  "&::after": {
                    borderBottom: "none", // Removes the focused underline
                  },
                  "&:hover:not(.Mui-disabled)::before": {
                    borderBottom: "none", // Removes the hover underline
                  },
                },
              },
            }}
            label="City"
            variant="filled"
            sx={{
              width: "86px",
              height: "48px",
              bgcolor: "#D8D8D8",
              borderRadius: "12px",
            }}
          >
            <MenuItem>
              <CheckBox />
              <ListItemText>Bhubaneswar</ListItemText>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: "50px" }}>
          <InputLabel
            id="my-select-label"
            sx={{
              marginTop: "-2px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Rethink Sans",
              color: "#333333",
            }}
          >
            Speciality
          </InputLabel>
          <Select
            slotProps={{
              root: {
                sx: {
                  "&::before": {
                    borderBottom: "none", // Removes the default underline
                  },
                  "&::after": {
                    borderBottom: "none", // Removes the focused underline
                  },
                  "&:hover:not(.Mui-disabled)::before": {
                    borderBottom: "none", // Removes the hover underline
                  },
                },
              },
            }}
            label="City"
            variant="filled"
            sx={{
              width: "118px",
              height: "48px",
              bgcolor: "#D8D8D8",
              borderRadius: "12px",
            }}
          >
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                General Physician
              </ListItemText>
            </MenuItem>{" "}
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Cardiologist
              </ListItemText>
            </MenuItem>{" "}
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Neurologist
              </ListItemText>
            </MenuItem>{" "}
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Dermatologist
              </ListItemText>
            </MenuItem>{" "}
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Gynecologist
              </ListItemText>
            </MenuItem>{" "}
            <MenuItem sx={{ gap: "8px" }}>
              <CheckBox
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "4px",
                  bgcolor: "#FFFFFF",
                  color: "#078CDF",
                }}
              />
              <ListItemText
                sx={{
                  fontFamily: "Rethink Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Dentist
              </ListItemText>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: "50px" }}>
          <InputLabel
            id="my-select-label"
            sx={{
              marginTop: "-2px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Rethink Sans",
              color: "#333333",
            }}
          >
            Experience
          </InputLabel>
          <Select
            slotProps={{
              root: {
                sx: {
                  "&::before": {
                    borderBottom: "none", // Removes the default underline
                  },
                  "&::after": {
                    borderBottom: "none", // Removes the focused underline
                  },
                  "&:hover:not(.Mui-disabled)::before": {
                    borderBottom: "none", // Removes the hover underline
                  },
                },
              },
            }}
            label="City"
            variant="filled"
            sx={{
              width: "129px",
              height: "48px",
              bgcolor: "#D8D8D8",
              borderRadius: "12px",
            }}
          >
            <MenuItem>Bhubaneswar</MenuItem>
            <MenuItem>Bhubaneswar</MenuItem>
            <MenuItem>Bhubaneswar</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: "50px" }}>
          <InputLabel
            id="my-select-label"
            sx={{
              marginTop: "-2px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Rethink Sans",
              color: "#333333",
            }}
          >
            Ratings
          </InputLabel>
          <Select
            slotProps={{
              root: {
                sx: {
                  "&::before": {
                    borderBottom: "none", // Removes the default underline
                  },
                  "&::after": {
                    borderBottom: "none", // Removes the focused underline
                  },
                  "&:hover:not(.Mui-disabled)::before": {
                    borderBottom: "none", // Removes the hover underline
                  },
                },
              },
            }}
            label="City"
            variant="filled"
            sx={{
              width: "105px",
              height: "48px",
              bgcolor: "#D8D8D8",
              borderRadius: "12px",
            }}
          >
            <MenuItem>Bhubaneswar</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            color: "#078CDF",
            bgcolor: "transparent",
            textTransform: "none",
            fontFamily: "Rethink Sans",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Clear All
        </Button>
      </Stack>
      <CardPage />
      <FotterPage />
    </>
  );
};

export default DocPage;
