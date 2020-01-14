import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

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

export default function PopUpNotification() {
  const classes = useStyles();
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleClick = () => {
    setOpenPopUp(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenPopUp(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={openPopUp} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Don't forget to eat your pills with dinner!
          {/* Note from appointment and picture of category */}
        </Alert>
      </Snackbar>
    </div>
  );
}