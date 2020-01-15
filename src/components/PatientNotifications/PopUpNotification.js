import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PopUpNotification(props) {
  const classes = useStyles();
  const [openPopUp, setOpenPopUp] = useState(false);

  useEffect(() => {
    props.onSetCompleted && setOpenPopUp(true); // if props onSetCompleted is defined then only open pop up
  }, [])

  const handleClose = (event, reason) => {
    // event.preventDefault();
    // console.log("this is event prevent default...", event)
    props.onSetCompleted && props.onSetCompleted(true); // set complete to true upon click of the x (on close)
    // console.log("this is handle close")

    if (reason === 'clickaway') {
      return;
    }

    setOpenPopUp(false);
  };
// get notification to show up according to current notification
// upon onClose, change completed state from false to true
  return (
    <div className={classes.root}>
      <Snackbar open={openPopUp} onClose={handleClose}>
        {
          // check if notification is not checked, then only show
        !props.notificationCompleted && <Alert onClose={handleClose} severity="info"> 
          {props.info} {props.pills} {props.food} {props.appointment}
          {/* Note from appointment and picture of category */}
        </Alert>
        }
      </Snackbar>
    </div>
  );
}