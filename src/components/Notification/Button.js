import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   paper: {
//       margin: theme.spacing(1),
//       display: 'flex',
//       flexDirection: 'row',
//       alignItems: 'center',
//   },
// }));

//PRIMARY SECONDARY
function MyButton(props) {
  // const classes = useStyles()

  return (
    // <div classesName={classes.paper}>
    <Button variant="contained" className={props.className} onClick={props.onClick} color={props.buttonColor} disableElevation>
      {props.buttonText}
    </Button>
    // </div>
  );
}

export default MyButton;
