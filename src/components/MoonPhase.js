import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Moon from "react-moon";
import { getMoonPhase } from "../utils/moon_functions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh",
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
});

function MoonPhase({ moonIllumination }) {
  const classes = useStyles();
  var moonPhaseText = getMoonPhase(moonIllumination.phase);

  return (
    <div className={classes.container}>
      <div className={classes.moonContainer}>
          <Moon phase={moonIllumination.phase} size={128} className={classes.moon}/>
      </div>
      <Typography className={classes.label} variant="h5">
        {moonPhaseText}
      </Typography>
    </div>
  );
}

export default MoonPhase;
