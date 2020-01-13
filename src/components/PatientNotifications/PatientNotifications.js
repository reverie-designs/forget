import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';


// const checkPatientTime = () => {
//   const today = new Date()
//   const patientCurrentTime = today.getHours()

//   return patientCurrentTime;
// }

// const splitTime = () => {
//   const timeArray = data.notification.time.toString().split(":");
//   console.log(timeArray)
//   return timeArray[0]
// }


export default function PatientNotifications(props) {
  
  const notifications = props.today
  // console.log("THIS IS NOTIFICATIONS...", notifications) // Array of notification objects
  // console.log("THIS IS TIME AND DATE...", props.today.time, props.today.date)

  const shouldShowNotifcation = (notification) => {
    console.log("this is a notification part 2", notification)
    console.log("this is something...", new Date() >= new Date(`${notification.date} ${notification.time}`), new Date(), new Date(`${notification.date} ${notification.time}`))
    return new Date() >= new Date(`${notification.date} ${notification.time}`);
  }

  const setPopUps = (notifications) => {
    const newNotifications = notifications.map((notification) => {
      // console.log("This is a notification......", notification)
      console.log("does today have notifications", shouldShowNotifcation(notification));
        if (shouldShowNotifcation(notification)) {
          console.log("Found notifications for Today", notification);
          return <p key={notification.id}>id: {notification.id}</p>
        }
        return null;
      }
    )
    console.log("these are newwww...", newNotifications)
    return newNotifications
  };

  // setPopUps(props.today)
  
  return (
    <div>
      {/* iterate through notification, if (shouldShowNotification()), show it */}
      {setPopUps(notifications)}
    </div>
  );
}



  // function PatientNotification(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }
  
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     width: '100%',
  //     '& > * + *': {
  //       marginTop: theme.spacing(2),
  //     },
  //   },
  // }));
  
  // export default function CustomizedSnackbars() {
  //   const classes = useStyles();
  
  
  //   const [open, setOpen] = React.useState(false);
  
  //   const handleClick = () => {
  //     setOpen(true);
  //   };
  
  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return;
  //     }
  
  //     setOpen(false);
  //   };
  
  //   return (
  //     <div className={classes.root}>
  //       <Button variant="outlined" onClick={handleClick}>
  //         Open success snackbar
  //       </Button>
  //       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  //         <PatientNotification onClose={handleClose} severity="success">
  //           This is a success message!
  //         </PatientNotification>
  //       </Snackbar>
  //     </div>
  //   );