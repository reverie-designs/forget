import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

export default function PatientToggle(props) {
  const classes = useStyles();

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'left',
    },
  }));
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
