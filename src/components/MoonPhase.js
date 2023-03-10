import React, { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Moon from "react-moon";

function getMoonPhase(fraction) {
  const phaseMap = [
    { name: "New Moon", illumination: 0 },
    { name: "Waxing Crescent", illumination: 0.125 },
    { name: "First Quarter", illumination: 0.25 },
    { name: "Waxing Gibbous", illumination: 0.375 },
    { name: "Full Moon", illumination: 0.5 },
    { name: "Waning Gibbous", illumination: 0.675 },
    { name: "Last Quarter", illumination: 0.75 },
    { name: "Waning Crescent", illumination: 0.875 },
    { name: "New Moon", illumination: 1 },
  ];

  let closestPhase = phaseMap[0];

  for (let i = 1; i < phaseMap.length; i++) {
    if (
      Math.abs(fraction - phaseMap[i].illumination) <
      Math.abs(fraction - closestPhase.illumination)
    ) {
      closestPhase = phaseMap[i];
    }
  }

  return closestPhase.name;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    // backgroundImage: 'url("https://i.imgur.com/PIzdCov.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  moonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  moon: {
    filter: "drop-shadow(0px 0px 30px white)",
    transform: "translateY(100%)",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px #000",
  },

  moon_rise: {
    transition: "transform 5s ease-in-out",
    transform: "translateY(-200px)",
  },
});

function MoonPhase({ moonIllumination }) {
  const classes = useStyles();
  const [isRising, setIsRising] = useState(true);
  var moonPhaseText = getMoonPhase(moonIllumination.phase);

  return (
    <div className={classes.container}>
      <div className={classes.moonContainer}>
        <Moon
          phase={moonIllumination.phase}
          size={256}
          className={isRising ? classes.moon_rise : classes.moon}
          onAnimationEnd={() => setIsRising(false)}
        />
      </div>
      <Typography className={classes.label} variant="h4">
        {moonPhaseText}
      </Typography>
    </div>
  );
}

export default MoonPhase;
