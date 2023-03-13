const PHASE_MAP = [
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

export function getMoonPhase(fraction) {

  
    let closestPhase = PHASE_MAP[0];
  
    for (let i = 1; i < PHASE_MAP.length; i++) {
      if (
        Math.abs(fraction - PHASE_MAP[i].illumination) <
        Math.abs(fraction - closestPhase.illumination)
      ) {
        closestPhase = PHASE_MAP[i];
      }
    }
  
    return closestPhase.name;
  }