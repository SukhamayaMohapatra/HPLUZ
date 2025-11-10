"use client";
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const PopUp = () => {
  const [open, setOpen] = useState(true); // Start as open

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              background: `radial-gradient(at bottom right, #078CDF80, #FFFFFF 60%),
               radial-gradient(at bottom left , #FFFFFF , #FFFFFF 50%),
         radial-gradient(at top right , #FFFFFF , #FFFFFF 100%),
         radial-gradient(at top left , #FFFFFF , #FFFFFF 100%)`,
              borderRadius: "30px",
            },
          },
          backdrop: {
            sx: {
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
          },
        }}
      >
        <DialogTitle>
          <Stack direction={"row"}>
            <Typography
              sx={{
                marginLeft: "30px",
                textAlign: "center",
                width: "475px",
                fontFamily: "Rethink Sans",
                fontSize: "36px",
                fontWeight: "600",
                color: "#2E2E2E",
              }}
            >
              Download the HPluz App & Get Started Instantly
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ marginTop: "-80px" }}
            >
              <CloseIcon sx={{ color: "#2E2E2E" }} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                width: "475px",
                fontFamily: "Rethink Sans",
                fontSize: "14px",
                fontWeight: "400",
                color: "#2E2E2E",
              }}
            >
              Consult trusted doctors, book lab tests, order medicines, and
              manage your health all in one app.
            </Typography>
          </Box>

          <Box
            sx={{
              paddingTop: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction={"row"} sx={{ gap: "15px" }}>
              <CardMedia
                image="./images/App Store.png"
                sx={{ width: "152px", height: "44px" }}
              />
              <CardMedia
                image="./images/Google Play.png"
                sx={{ width: "152px", height: "44px" }}
              />
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
