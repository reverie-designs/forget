import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import "./cv-notifications.scss"
const useStyles = makeStyles(theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  "& > svg": {
    margin: theme.spacing(2)
  }
}));

export default function CvAlerts(props) {
  const classes = useStyles();

  const generate = notes => {
    return notes.map(note => (
      <div className="cv-notifications">
        <ListItem className="rounded">
          <ListItemIcon>
            <AccessAlarmIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={note.title} />
        </ListItem>
      </div>
    ));
  };
  return (
    <div className={classes.root} className="cv-note-box">
      {/* <Grid container spacing={2} className="cv-notifications"> */}
        {/* <Grid item xs={12} md={6}> */}
          <Typography variant="h6" className={classes.title} className="text-center">
            Today's Notifications:
          </Typography>

          {generate(props.notes)}
        {/* </Grid> */}
      {/* // </Grid> */}
    </div>
  );
}
