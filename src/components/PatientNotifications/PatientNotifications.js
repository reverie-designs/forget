import React from 'react';
import moment from 'moment';
import PopUpNotification from './PopUpNotification';

// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

export default function PatientNotifications(props) {
  
  // const notifications = props.today
  // console.log("this is todays notification....", props.today)

  
  // const shouldShowNotifcation = (notification) => {
    
  //   const notificationToday = new Date(`${notification.date} ${notification.time}`)

  //   const splitTime =(fullDate) =>{
  //     const dateArray = fullDate.toString().split(" ");
  //     const time = [];
  //     time.push(dateArray[4][0]);
  //     return time.toString();
  //   }
  //   const timeToday = splitTime(today)
  //   console.log("this is split time...", timeToday)

  //   const today = new Date();
  //   console.log('this is today...', today)


  //   const updateHour = new Date(today.setHours(today.getHours() + 1));
  //   console.log("this is update hour....", updateHour)

  //   const addHour = splitTime(updateHour);
  //   console.log('this adds the hour...', addHour)
    
  //   // console.log("is later more than now", compareNotificationTime(today, updateHour));
  
  //   // if (notification.completed) {
  //   //   return false;
  //   // }
    
  //   // isTooEarly = timestamp <= new Date();
  //   // isTooLate = timestamp >= new Date().getHours("+1")
  //   // return !isTooEarly && !isTooLate;

  //   // return new Date() <= new Date(`${notification.date} ${notification.time}`);
  // }

  const myNotifications =[{id: 666,
    date: "Jan 14 2020",
    time: "12:10:00",
    pills: true,
    appointment: false,
    food: true,
    info: "Eat pills with dinner",
    patient: false,
    completed: false},
     {id: 0,
      date: "Jan 13 2020",
      time: "21:45:34",
      pills: true,
      appointment: false,
      food: true,
      info: "text",
      patient: false,
      completed: false},
      {id: 999,
      date: "Jan 13 2020",
      time: "22:35:34",
      pills: true,
      appointment: false,
      food: true,
      info: "text",
      patient: false,
      completed: false}];
    // console.log("this is update hour....", updateHour)

  const deconstructedNotification = (notification) => {
    const notificationTime = new Date(`${notification.date} ${notification.time}`)
    console.log("THIS IS NOTIFICATION DEPLOYMENT TIME", notificationTime);
    const newNotificationObj = {
      id: notification.id,
      completed: notification.completed,
      time: notificationTime,
      pills: notification.pills,
      appointment: notification.appointment,
      food:notification.food,
      info: notification.info,
      patient: notification.patient
    }
    // console.log("This is our update note object", newNotificationObj);
    return newNotificationObj;
  }

  const ourNotifications = props.today;
  const setPopUps = (notifications) => {
     let today = new Date();
    // let prior = today
    console.log("TIME NOW",today)

    today = today.getTime();
    console.log("TIME NOW miliseconds",today)
    // console.log(today)
    // console.log(updateHour);

    // let updateHour = new Date(prior.setHours(prior.getHours() + 1)); //it works-ish. Off by 1/2 hour
    
    // let minusHour = new Date(prior.setHours(prior.getHours() - 1)); 
    // moment(prior).add(30, 'm').toDate();

    // updateHour = updateHour.getTime();
    // console.log("this is update hour...", updateHour);
    // console.log("update hour to date", new Date(updateHour))

    
    const newNotifications = notifications.map((notification) => {return deconstructedNotification(notification)});
    return newNotifications.map((notification) => {
      // console.log("notification time",notification.time);
      let startTime = notification.time.getTime()
      let endTime = startTime + 1000 * 60 * 60;
      console.log("This is notification time", startTime);
      // console.log("This is time now", today)
      // console.log(notification.completed)
      // console.log("boolean",(notification.completed === false))
      // Show Conditions
      // if ((today >= minusHour && (!notification.completed) && time <= updateHour) || (time <= today && (!notification.completed) && time >= minusHour)){
        if (today >= startTime && today <= endTime && !notification.completed) {

          console.log("Found notifications for Today", notification);
          return <p key={notification.id}> <PopUpNotification info={notification.info} pills={notification.pills} appointment={notification.appointment} food={notification.food} completed={notification.completed} />{notification.id}</p>
        }
        // Not show conditions 
        // else (today > updateHour || time < today || notification.completed){
        //   console.log("nope");
        // }
        //  else {
        //   console.log("You lose")
        // }
        return null;
      }
    )
    // return newNotifications
  };
  

  return (
    <div>
      {/* iterate through notification, if (shouldShowNotification()), show it */}
      {/* {setPopUps(notifications)} */}
      {props.user && props.today ? setPopUps(ourNotifications): console.log("Hello")}
    </div>
  );
}
