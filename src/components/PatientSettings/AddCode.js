import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddCode(props) {
  const classes = useStyles();

  return (
      <div className={classes.paper}>
          <Button
            type="submit"
            width={1/4}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.onClick}
          >
            Add Code
          </Button>
          
      </div>
  );
}

