import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function StateTextFields(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <div className="flex-center">
        <p>Notes:</p>
        <TextField value={props.value} onChange={props.onChange} />
      </div>
     </div>
  );
}