import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

const d = new Date();

const data = {
  notifications: [{
    id: 1,
    date: "Jan 11 2020",
    time: "14:00:00",
    pills: false,
    appointment: true,
    food: true,
    patient: true
  },
  {
    id: 2,
    date: "Jan 11 2020",
    time: `${d.getHours()}:0${d.getMinutes()}:${d.getSeconds()}`,
    pills: false,
    appointment: true,
    food: true,
    patient: true
  },
  {
    id: 3,
    date: "Jan 14 2020",
    time: "14:45:00",
    pills: false,
    appointment: true,
    food: true,
    patient: true
  },
  {
    id: 4,
    date: "Jan 17 2020",
    time: "21:30:00",
    pills: false,
    appointment: true,
    food: true,
    patient: true
  }
]
}

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

function shouldShowNotifcation(notification) {
  return new Date() >= new Date(`${notification.date} ${notification.time}`);
}

export default function PatientNotifications() {

  return (
    <div>
      {/* iterate through notification, if (shouldShowNotification()), show it */}
      {data.notifications.map((notification) => {
        if (shouldShowNotifcation(notification)) {
          return <p key={notification.id}>id: {notification.id}</p>
        }
      })}
    </div>
  )
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