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
    marginTop: theme.spacing(1),
    backgroundColor: "#003366",
    color: "white",
  },
}));

export default function AuthorizationCode(props) {
  const classes = useStyles();
  
    return (
      <div>
        <Typography component="h2" variant="h6">
          Authorization Code
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
          id="outlined-disabled"
          label=""
          value={props.code}
          onChange={(event) => props.onChange(event.target.value)}
          variant="outlined"
        />
        </form>
        <Button
            type="submit"
            variant="contained"
            
            className={classes.submit}
            disabled={props.disableButton}
            onClick={props.onClick}
          >
            Generate Code
          </Button>
      </div>
  );
}

