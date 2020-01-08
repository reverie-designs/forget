import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [info, setInfo] = React.useState('');
  const handleChange = event => {
    setInfo(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="flex-center">
        <p>Notes:</p>
        <TextField id="standard-name" className="text" label="" value={info} name="info" onChange={handleChange} />
      </div>
     </form>
  );
}