import { Card, CardContent, Typography } from '@mui/material';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const SunsetCard = ({ sunsetTime }) => {
  return (
    <Card sx={{ backgroundColor: '#ff8c00', borderRadius: 8 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <WbTwilightIcon sx={{ color: '#fff', marginRight: 1 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Sunset Time
        </Typography>
        <Typography variant="h4" sx={{ color: '#fff', marginLeft: 'auto' }}>
          {sunsetTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SunsetCard;
