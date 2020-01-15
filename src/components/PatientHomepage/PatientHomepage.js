import React, { useState } from 'react';
import Clock from './Clock';
import './PatientHomepage.scss'
import PatientNotifications from '../PatientNotifications/PatientNotifications'


export default function PatientHomepage(props) {

  // Messages
  const MORNING = "Good Morning";
  const AFTERNOON = "Good Afternoon";
  const EVENING = "Good Evening";
  const NIGHT = "Good Night";

const getStatus = (time) => {
  const hour = time.getHours();
  if (hour >= 3 && hour <= 11) { //Morning
    return {isDay: true, greeting: MORNING} 
    // setIsDay(true);
    // setGreeting(MORNING);
  } else if (hour >= 12 && hour <= 17) {//Afternoon
    return {isDay: true, greeting: AFTERNOON} 
    // setIsDay(true); 
    // setGreeting(AFTERNOON);
  } else if (hour >= 18 && hour <= 20) { //Evening
    return {isDay: false, greeting: EVENING} 
    // setIsDay(false); 
    // setGreeting(EVENING);
  } else { //Night 
    return {isDay: false, greeting: NIGHT} 
    // setIsDay(false);
    // setGreeting(NIGHT);
  }
}

const timeToStatus = (time) => {
  const {isDay, greeting} = getStatus(time)
  setIsDay(isDay)
  setGreeting(greeting)
}

  const [isDay, setIsDay] = useState(() => getStatus(new Date()).isDay);
  const [greeting, setGreeting] = useState(() => getStatus(new Date()).greeting);

return (
    <div>
      <div className={ isDay ? "patient-homepage-day" : "patient-homepage-night"}>
        <h3 className={ isDay ? "greeting" : "greeting greeting-night"}>{greeting}</h3>
        <Clock handleUpdate={timeToStatus} />
        <PatientNotifications user={props.user} today={props.today}/>
      </div>
    </div>
  )
}