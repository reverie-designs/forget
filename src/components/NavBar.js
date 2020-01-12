import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from './SideMenu';
import LogoutButton from './LogoutButton.js';
import './NavBar.scss';
import Logo from '../forgetmenot.png'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen({ ...drawerOpen, [side]: open });
  };

  const checkForUser = (user) => {
    if (user === "") {
      return (<div><NavLink to="/sign-in"><Button color="inherit" className="button-pop">Login</Button></NavLink>
      |
      <NavLink to="/sign-up"><Button color="inherit" className="button-pop">Sign Up</Button></NavLink></div>)
    } else {
      return (<LogoutButton onClick={props.onClick}/>)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <NavLink to="/"><img alt="Forget me Not Logo" src={Logo} className="logo"/></NavLink>
          <Typography variant="h6" className={classes.title}>
            Forget Me Not
          </Typography>
          {checkForUser(props.user)}
          {/* <LogoutButton onClick={props.onClick}/>
          <NavLink to="/sign-in"><Button color="inherit" className="button-pop">Login</Button></NavLink>
          |
          <NavLink to="/sign-up"><Button color="inherit" className="button-pop">Sign Up</Button></NavLink> */}
        </Toolbar>
      </AppBar> 

      <Drawer open={drawerOpen.left} onClose={toggleDrawer('left', false)}>
      <SideMenu toggleDrawer={toggleDrawer} user={props.user}/>
      </Drawer>    
    </div>
  );
}
