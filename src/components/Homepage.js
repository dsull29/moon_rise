import React, { useState, useEffect } from 'react';
import SunCalc from 'suncalc';

function Homepage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [moonrise, setMoonrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [moonphase, setMoonphase] = useState(null);

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
      const moonPhase = getMoonPhase(SunCalc.getMoonIllumination(date).phase);

      console.log(sunsetTime);
      setMoonrise(moonriseTime);
      setSunset(sunsetTime);
      setMoonphase(moonPhase);
      
    }
  }, [latitude, longitude, timezone]);

  return (
    <div>
      {timezone && moonrise && sunset ? (
      <div><p>
          The moon {moonphase} will rise at { moonrise.toLocaleTimeString('en-US', { timezone })} today at your current location ({latitude}, {longitude}).
        </p>
        <p>
          The sun will set at { sunset.toLocaleTimeString('en-US', { timezone })} today at your current location ({latitude}, {longitude}).
        </p>
</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Homepage;


function getMoonPhase(fraction) {
  console.log(fraction)
  const phaseMap = [
    { name: 'New Moon', illumination: 0 },
    { name: 'Waxing Crescent', illumination: 0.125 },
    { name: 'First Quarter', illumination: 0.25 },
    { name: 'Waxing Gibbous', illumination: 0.375 },
    { name: 'Full Moon', illumination: .5 },
    { name: 'Waning Gibbous', illumination: 0.675 },
    { name: 'Last Quarter', illumination: 0.75 },
    { name: 'Waning Crescent', illumination: 0.875 },
    { name: 'New Moon', illumination: 1}
  ];

  let closestPhase = phaseMap[0];

  for (let i = 1; i < phaseMap.length; i++) {
    if (Math.abs(fraction - phaseMap[i].illumination) < Math.abs(fraction - closestPhase.illumination)) {
      closestPhase = phaseMap[i];
    }
  }

  return closestPhase.name;
}