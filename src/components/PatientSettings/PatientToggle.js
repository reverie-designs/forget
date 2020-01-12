import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function PatientToggle(props) {
  const classes = useStyles();

  return (

    <div className={classes.paper}>
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={props.checked}
            onChange={props.onChange}
            value={props.checked}
            color="primary"
          />
        }
        label="Patient"
      />
    </FormGroup>
  </div>
  );
}
