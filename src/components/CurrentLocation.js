import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const CurrentLocation = ({ latitude, longitude }) => {
  return (
    <Card sx={{ backgroundColor: "#333333", borderRadius: 8 }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <RoomIcon sx={{ color: "#fff", marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Current Location
        </Typography>

        <Box sx={{ marginLeft: "auto" }}>
          {latitude && longitude ? (
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                "@media screen and (max-width: 600px)": {
                  fontSize: "1.5rem", // change font size on screens smaller than 600px
                },
              }}
            >
              {`${latitude.toFixed(4)}° ${
                latitude >= 0 ? "N" : "S"
              } / ${longitude.toFixed(4)}° ${longitude >= 0 ? "E" : "W"}`}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "error.main", fontWeight: "bold" }}
            >
              Location not available
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentLocation;
