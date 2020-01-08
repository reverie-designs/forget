import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {
  

 

  return (
    <div className="">
      <Switch 
            checked={props.value} 
            value={props.checked} 
            onChange={props.onChange} 
            inputProps={{ 'aria-label': 'primary checkbox' }} 
      />
    </div>
  );
}