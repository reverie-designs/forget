import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsIcon from '@material-ui/icons/Settings';
import GeofenceToggleButton from './DisableGeofence';
import NotificationToggleButton from './DisableNotification';
import ImageAvatars from './Avatar';
import './SideMenu.scss';
import {
  NavLink
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideMenu(props) {
  const classes = useStyles()

  const [toggleNotification, setNotification] = useState({
    notification: false,
  });
  console.log("HELLO GEO",props.geofence);
  const [toggleGeofence, setGeofence] = useState({
    geofence: props.geofence.radius_on,
  });
  console.log("toggle on or off", toggleGeofence.geofence)
  useEffect(()=>{
    const radiusToggleObject = {user_id: props.user.user_id, radius_on: toggleGeofence.geofence, radius: props.geofence.radius, patient_id: props.user.patient_id}
    console.log("radius object",radiusToggleObject);
    props.updateRadius(radiusToggleObject);
  },[toggleGeofence])

  const handleChange = name => event => {
    setNotification({ ...toggleNotification, [name]: event.target.checked });
    setGeofence({ ...toggleGeofence, [name]: event.target.checked });
  };

  return (
    <div className={classes.list}>
      <ImageAvatars></ImageAvatars>
      <ListItemText primary={`Hello: ${props.user.name}`} className="userName"/>
      {/* <ListItemText primary={props.user.username} /> */}
         <Divider></Divider>
      <List component="nav" aria-label="main mailbox folders"> 
        <ListItem button>
            <NavLink to="/settings" className="no-link-style"> <ListItemText primary="Settings" /></NavLink>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        <ListItem button>
        <NavLink to="/create-notification" className="no-link-style"><ListItemText primary="Create Notification" /></NavLink>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
        <NavLink to="/calendar" className="no-link-style"><ListItemText primary="All Notifications" /></NavLink>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Disable Notifications" />
          <ListItemIcon>
            <NotificationToggleButton checked={toggleNotification.notification} onChange={handleChange('notification')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Geofence" />
          <ListItemIcon>
            <GeofenceToggleButton checked={toggleGeofence.geofence} onChange={handleChange('geofence')} />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}
