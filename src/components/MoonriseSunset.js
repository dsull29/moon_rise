import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "left",
    flexDirection: "column",
    color: "white",
    padding: "1rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: "4rem",
    textShadow: "2px 2px #000",
    marginBottom: "2rem",
  },
  text: {
    fontSize: "1.5rem",
    margin: "1rem",
    textShadow: "2px 2px #000",
  },

  // Responsive styles
  "@media (max-width: 600px)": {
    title: {
      fontSize: "2.5rem",
    },
    text: {
      fontSize: "1.2rem",
      margin: "0.5rem",
    },
  },
});

function MoonriseSunset({ moonrise, sunset }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.text} variant="h5">
        Moonrise: {moonrise}
      </Typography>
      <Typography className={classes.text} variant="h5">
        Sunset: {sunset}
      </Typography>
    </Box>
  );
}

export default MoonriseSunset;
