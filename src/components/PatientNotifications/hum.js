import React, {useState, useEffect} from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function PatientNotifications(props) {
  const [todaysNotes, setNotes] = useState([]);
  const myNotifications = props.today;

  //reconstruct each notification to fit specific requirements
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

  const setPopUps = (notifications) => {
    console.log("setPopUps function call", notifications);
   let notesToPrint = [];
   let today = new Date();
   today = today.getTime();
   if(notifications){
    const newNotifications = notifications.map((notification) => {return deconstructedNotification(notification)});
        return newNotifications.map((notification) => {
          console.log("notifications that are being passed", notification)
            let startTime = notification.time.getTime()
            let endTime = startTime + 1000 * 60 * 60;
            if (today >= startTime && today <= endTime && !notification.completed) {
              console.log("Found notifications for Today", notification);
              notesToPrint.push(notification)
              console.log('All notes that should be going to state',notesToPrint);
              const notificationPopUp = toast(notification.info, {containerId: `${notification.id}`})
              setTimeout(() => notificationPopUp, 2000);
              if (todaysNotes.length <= notesToPrint.length){
                setNotes(notesToPrint)
              }
              return printNotifications(todaysNotes)
            }
                return null;
        })
   }
   return null;
  };


  const printNotifications = (notifications)=>{
    notifications.map((notification)=>{
      console.log("printing notifications", notification)
              return <ToastContainer 
                    key={notification.id} 
                    isActive={true}
                    transition={Slide} 
                    autoClose={false} 
                    enableMultiContainer 
                    containerId={`${notification.id}`} 
                    newestOnTop={true} 
                    onClick={() => saySomething(notification.id)} 
                    position={toast.POSITION.BOTTOM_LEFT} 
              />
            }
  )}

  const saySomething = (id)=>{console.log("HELLO", id)}


  // useEffect(()=>{setInterval(setPopUps, 1000, myNotifications)}, [props.today])
  useEffect(()=>{setPopUps(myNotifications)}, [])
  return (
    
    <>
      {console.log(todaysNotes)}
      {props.user && props.today && todaysNotes.length >0 ? printNotifications(todaysNotes) : clearInterval()}
    </>
  );
}

useEffect(()=>{setInterval(setPopUps, 10000, myNotifications)}, [props.today])