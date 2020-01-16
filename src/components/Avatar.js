import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar id = "Avatar" alt="Avatar Image" src={props.src} className={classes.large} />
    </div>
  );
}