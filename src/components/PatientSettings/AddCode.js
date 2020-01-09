import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddCode(props) {
  const classes = useStyles();

  return (
      <div>
          <Button
            type="submit"
            width={1/4}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Code
          </Button>
          
      </div>
  );
}

