import React, { useState } from 'react';
import Clock from './Clock';
import './PatientHomepage.scss'

export default function PatientHomepage() {

  const [isDay, setIsDay] = useState(false);
  const [greeting, setGreeting] = useState("");

  // Messages
  const MORNING = "Good Morning";
  const AFTERNOON = "Good Afternoon";
  const EVENING = "Good Evening";
  const NIGHT = "Good Night";

  const timeToStatus = (time) => {
    const hour = time.getHours();
    if (hour >= 3 && hour <= 12) { //Morning
      setIsDay(true);
      setGreeting(MORNING);
    } else if (hour >= 13 && hour <= 17) {//Afternoon
      setIsDay(true); 
      setGreeting(AFTERNOON);
    } else if (hour >= 18 && hour <= 20) { //Evening
      setIsDay(false); 
      setGreeting(EVENING);
    } else { //Night 
      setIsDay(false);
      setGreeting(NIGHT);
    }
  }

  return (
    <div>
      <div className={ isDay ? "patient-homepage-day" : "patient-homepage-night"}>
        <h3 className={ isDay ? "greeting" : "greeting greeting-night"}>{greeting}</h3>
        <Clock handleUpdate={timeToStatus} />
      </div>
    </div>
  )
}