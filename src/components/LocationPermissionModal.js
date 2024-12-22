import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Backdrop,
  Fade,
  TextField,
} from "@mui/material";

const LocationPermissionModal = ({
  open,
  onClose,
  onAllowLocation,
  latitude,
  longitude,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: 24,
              width: 350, // Adjusted the width slightly for better form appearance
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Allow Location Access
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please allow location access to automatically fill in your Address
              with the help of latitude and longitude.
            </Typography>
            {/* Button to Allow Location Access */}
            <Button
              variant="contained"
              color="primary"
              onClick={onAllowLocation}
              sx={{
                width: "100%",
                padding: "12px",
                borderRadius: "20px", // Rounded button edges
                fontSize: "16px",
              }}
            >
              Allow Location Access
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default LocationPermissionModal;
