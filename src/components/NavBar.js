import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from './SideMenu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Forget Me Not
          </Typography>
          <Button color="inherit">Login</Button>
          |
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar> 

      <Drawer open={drawerOpen.left} onClose={toggleDrawer('left', false)}>
      <SideMenu toggleDrawer={toggleDrawer}></SideMenu>
      </Drawer>    
    </div>
  );
}
