import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    pills: true,
    food: true,
    appointment: true,
  });
  const { pills, food, appointment } = state;
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox icon={<EnhancedEncryptionIcon />}  checkedIcon={<EnhancedEncryptionIcon />} onChange={handleChange('pills')} value="pills" />}
        label="Pills"
      />
      <FormControlLabel
        control={<Checkbox icon={<RestaurantIcon />}  checkedIcon={<RestaurantIcon />}  onChange={handleChange('food')} value="food" />}
        label="Food"
      />
      <FormControlLabel
        control={<Checkbox icon={<EventAvailableIcon />}  checkedIcon={<EventAvailableIcon />}  onChange={handleChange('appointment')} value="appointment" />}
        label="Appointment"
      />
    </FormGroup>
      
  );
}