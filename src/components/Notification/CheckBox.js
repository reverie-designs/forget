import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox icon={<EnhancedEncryptionIcon />}  checkedIcon={<EnhancedEncryptionIcon />} value="checkedH" />}
        label="Pills"
      />
      <FormControlLabel
        control={<Checkbox icon={<RestaurantIcon />}  checkedIcon={<RestaurantIcon />} value="food" />}
        label="Food"
      />
      <FormControlLabel
        control={<Checkbox icon={<EventAvailableIcon />}  checkedIcon={<EventAvailableIcon />} value="appointment" />}
        label="Appointment"
      />
    </FormGroup>
      
  );
}