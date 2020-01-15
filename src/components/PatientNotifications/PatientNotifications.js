import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUpNotification from './PopUpNotification';

// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

export default function PatientNotifications(props) {
  // const [notificationCompleted, setNotificationCompleted] = useState(false);

  // useEffect(() => {
  //   console.log('notificationCompleted: ', notificationCompleted);
  // }, [notificationCompleted])


  //   // return new Date() <= new Date(`${notification.date} ${notification.time}`);
  // }
  
  //takes in notification and restructures to add new fields
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

  //generates POP UPS
  const setPopUps = (notifications) => {
     let today = new Date();
      today = today.getTime();
      // console.log(today)
    
    const newNotifications = notifications.map((notification) => {return deconstructedNotification(notification)});
    return newNotifications.map((notification) => {
      let startTime = notification.time.getTime()
      let endTime = startTime + 1000 * 60 * 60;
      const notificationPopUp = toast(notification.info, {containerId: 'notification.id'})
      setTimeout(() => notificationPopUp, 2000);
      console.log("This is notification time", startTime);
        if (today >= startTime && today <= endTime && !notification.completed) {
          console.log("Found notifications for Today", notification);
          return   <ToastContainer 
                      key={notification.id} 
                      transition={Slide} 
                      autoClose={false} 
                      enableMultiContainer 
                      containerId={'notification.id'} 
                      newestOnTop={true} 
                      onClick={() => saySomething(notification.id)} 
                      position={toast.POSITION.BOTTOM_LEFT} 
                      />
          // return <PopUpNotification key={notification.id} notificationCompleted={notificationCompleted} onSetCompleted={setNotificationCompleted} info={notification.info} pills={notification.pills} appointment={notification.appointment} food={notification.food} completed={notification.completed} />
        }
        return null;
      }
    )
    // return newNotifications
  };
  //  const getNotifications = 

  // useEffect(()=>{

  // }, [props.notifications])

  // const gimmie = setInterval(()=> {return setPopUps(ourNotifications)}, 6000);
//setInterval(()=> {return setPopUps(ourNotifications)}, 6000)
  const saySomething = (id)=>{console.log("HELLO", id)}
  const story = (words)=>{setTimeout(story(words), 1000); return  };
  // const showToast = () => {
  //   toast("Look at me!", {containerId: "A"})
  // }
  console.log("HECK YEA", )
  return (
    <>
      {/* iterate through notification, if (shouldShowNotification()), show it */}
      {/* {setPopUps(notifications)} */}
      {/* {props.user && props.today ?  gimmie : null} */}
      {props.user && props.today ? setPopUps(ourNotifications) : clearInterval()}
      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        containerId="A"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        />
      <button onClick={showToast}>Show Toast</button> */}
    </>
  );
}
