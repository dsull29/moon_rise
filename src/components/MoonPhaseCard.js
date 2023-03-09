import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Brightness2Icon from '@mui/icons-material/Brightness2';


function MoonPhaseCard({ moonPhase }) {
  return (
    <Card sx={{ backgroundColor: '#777777', borderRadius: 8 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Brightness2Icon sx={{ color: '#fff', marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Moon Phase
        </Typography>

        <Box sx={{ marginLeft: 'auto' }}>
          {moonPhase &&
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
               { moonPhase }
            </Typography>}
        </Box>
      </CardContent>
    </Card>
  );
}

export default MoonPhaseCard;