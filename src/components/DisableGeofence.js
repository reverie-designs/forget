import React, { useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function GeofenceToggleButton() {
  const [toggleGeofence, setGeofence] = useState({
    checkedB: false,
  });

  const handleChange = name => event => {
    setGeofence({ ...toggleGeofence, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={toggleGeofence.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Off"
      />
    </FormGroup>
  );
}
