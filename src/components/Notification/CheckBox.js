import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function CheckboxLabels(props) {

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox icon={props.icon}  checkedIcon={props.checkedIcon}  onChange={props.onChange} value={props.value} checked={props.checked}/>}
        label={props.label}
      />
    </FormGroup>
      
  );
}