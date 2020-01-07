import React, { useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function NotificationToggleButton() {
  const [toggleNotification, setNotification] = useState({
    checkedB: false,
  });

  const handleChange = name => event => {
    setNotification({ ...toggleNotification, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={toggleNotification.checkedB}
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