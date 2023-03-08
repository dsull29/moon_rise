import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function MoonriseCard({ moonriseTime, timezone, latitude, longitude }) {
  return (
    <Card sx={{ backgroundColor: '#3f51b5', borderRadius: 8 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <WbSunnyIcon sx={{ color: '#fff', marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Moonrise Time
        </Typography>

        <Box sx={{ marginLeft: 'auto' }}>
          {moonriseTime &&
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
 
              { moonriseTime.toLocaleTimeString("en-US", {timeZone: timezone })}
            </Typography>}
        </Box>
      </CardContent>
    </Card>
  );
}

export default MoonriseCard;