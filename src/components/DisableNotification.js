import React, { useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NotificationToggleButton(props) {

  return (
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
        label="Off"
      />
    </FormGroup>
  );
}