import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    daily: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="">
      <Switch 
            checked={state.daily} 
            value="daily" 
            onChange={handleChange('daily')} 
            inputProps={{ 'aria-label': 'primary checkbox' }} 
      />
    </div>
  );
}