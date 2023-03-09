import React from 'react';
import { Card, CardContent, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get current year

  return (
    <Card sx={{ backgroundColor: '#000', color: 'white', paddingTop : "10rem" }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="https://github.com/dsull29/moon_rise" underline="none" color="inherit" sx={{ mb: 1 }}>
          <GitHubIcon></GitHubIcon>
        </Link>
        <div>
          <span>&copy; {currentYear} <Link href="https://www.doversummit.dev" underline="none" color="inherit">Dover Summit LLC.</Link></span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
