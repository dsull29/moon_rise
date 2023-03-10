import React, { useState, useEffect } from 'react';
import SunCalc from 'suncalc';
import MoonriseCard from './MoonriseCard';
import SunsetCard from './SunsetCard';
import MoonPhase from './MoonPhase';
import Header from './Header';
import Footer from './Footer';

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
      // const moonPhase = getMoonPhase(SunCalc.getMoonIllumination(date));

      setMoonrise(moonriseTime);
      setSunset(sunsetTime);
      setMoonIllumination(moonIllumination);
      
    }
  }, [latitude, longitude, timezone]);

  return (
    <div>
      <Header />
      {timezone && moonrise && sunset ? (
        <div>
          <MoonPhase moonIllumination = {moonIllumination} />
          <MoonriseCard moonriseTime={ moonrise.toLocaleTimeString("en-US", {timeZone: timezone })} timezone = {timezone}/>
          <SunsetCard sunsetTime= { sunset.toLocaleTimeString("en-US", {timeZone: timezone }) } />

        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}

export default Homepage;


