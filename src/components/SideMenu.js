import React, { useState } from 'react';
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
    checkedB: false,
  });

  const handleChange = name => event => {
    setNotification({ ...toggleNotification, [name]: event.target.checked });
  };


  return (
    <div className={classes.list}>
      <ImageAvatars></ImageAvatars>
      <ListItemText primary="Bob Smith" />
      <ListItemText primary="bob.smith@gmail.com" />
         <Divider></Divider>
      <List component="nav" aria-label="main mailbox folders"> 
        <ListItem button>
            <ListItemText primary="Settings" />
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        <ListItem button>
          <ListItemText primary="Create Notification" />
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="All Notifications" />
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Disable Notifications" />
          <ListItemIcon>
            <NotificationToggleButton checked={toggleNotification.checkedB} onChange={handleChange('checkedB')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Disable Geofence" />
          <ListItemIcon>
            <GeofenceToggleButton></GeofenceToggleButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
}
