import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';

function MoonriseCard({ moonriseTime, timezone, latitude, longitude }) {
  return (
    <Card sx={{ backgroundColor: '#3f51b5', borderRadius: 8 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <NightsStayIcon sx={{ color: '#fff', marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Moonrise Time
        </Typography>

        <Box sx={{ marginLeft: 'auto' }}>
          {moonriseTime &&
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
 
              { moonriseTime}
            </Typography>}
        </Box>
      </CardContent>
    </Card>
  );
}

export default MoonriseCard;