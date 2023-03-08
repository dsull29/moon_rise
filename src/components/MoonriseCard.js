import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#0d47a1",
    color: "#fff",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "6rem",
    marginBottom: "1rem",
  },
});

function MoonriseCard({ moonriseTime, timezone, latitude, longitude }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <WbSunnyIcon className={classes.icon} />
        <Typography variant="h5" component="h2">
          Moonrise Time:
        </Typography>
        <Typography variant="h6">
          {moonriseTime &&
            moonriseTime.toLocaleTimeString("en-US", {
              timeZone: timezone,
            })}
        </Typography>
        <Typography variant="subtitle1">
          (at your current location: {latitude}, {longitude})
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MoonriseCard;