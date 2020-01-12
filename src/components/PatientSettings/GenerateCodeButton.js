import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    marginTop: theme.spacing(1),
  },
}));

export default function AuthorizationCode(props) {
  const classes = useStyles();
  
    return (
      <div className={classes.paper}>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={props.disableButton}
            onClick={props.onClick}
          >
            Generate Code
          </Button>
      </div>
  );
}
