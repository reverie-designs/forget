import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthorizationCode(props) {
  const classes = useStyles();
  
    return (
      <div>
        <Typography component="h2" variant="h6">
          Authorization Code
        </Typography>
        <Typography component="h2">
          Please add authentication code to patient's device prior to their entering address below.
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
          id="outlined-disabled"
          label=""
          value={props.code}
          variant="outlined"
        />
        </form>
        <Button
            type="submit"
            width={1/4}
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={props.disableButton}
            onClick={props.onClick}
          >
            Generate Code
          </Button>
        {/* <Button
          type="submit"
          width={1/4}
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={}
        >
          Add Code
        </Button> */}
      </div>
  );
}

