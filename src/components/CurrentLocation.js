import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const CurrentLocation = ({ latitude, longitude }) => {
  return (
    <Card sx={{ backgroundColor: '#333333', borderRadius: 8 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <RoomIcon sx={{ color: '#fff', marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Current Location
        </Typography>
 
        <Box sx={{ marginLeft: 'auto' }}>
          {latitude && longitude ? (
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
              <Box component="span" sx={{ color: '#fff', fontWeight: 'normal' }}>
                {`Latitude: `}
              </Box>
              {`${latitude.toFixed(4)}`}
              <Box component="span" sx={{ color: '#fff', fontWeight: 'normal' }}>
                {` / Longitude: `}
              </Box>
              {`${longitude.toFixed(4)}`}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ color: 'error.main', fontWeight: 'bold' }}>
              Location not available
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentLocation;
