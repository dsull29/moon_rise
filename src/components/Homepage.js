import React, { useState, useEffect } from 'react';
import SunCalc from 'suncalc';
import MoonPhase from './MoonPhase';
import Header from './Header';
import Footer from './Footer';
import MoonriseSunset from './MoonriseSunset';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: "2rem",
  },
});

function Homepage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [moonrise, setMoonrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [moonIllumination, setMoonIllumination] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const date = new Date()
      const moonriseTime = SunCalc.getMoonTimes(date, latitude, longitude).rise;
      const sunsetTime = SunCalc.getTimes(date, latitude, longitude).sunset;
      const moonIllumination = SunCalc.getMoonIllumination(date);

      setMoonrise(moonriseTime);
      setSunset(sunsetTime);
      setMoonIllumination(moonIllumination);
    }
  }, [latitude, longitude, timezone]);

  const classes = useStyles();

  return (
    <div>
      <Header />
      {timezone && moonrise && sunset ? (
        <div className={classes.container}>
          <MoonriseSunset moonrise={moonrise.toLocaleTimeString("en-US", {timeZone: timezone })} sunset={sunset.toLocaleTimeString("en-US", {timeZone: timezone })} />
          <MoonPhase moonIllumination={moonIllumination} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}

export default Homepage;
