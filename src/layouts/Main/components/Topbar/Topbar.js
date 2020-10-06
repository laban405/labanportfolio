import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {Typography} from '@material-ui/core';

import { NavBar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    //boxShadow: 'none'
    backgroundColor:theme.palette.primary.dark,
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <DashboardIcon />
    },
    {
      title: 'Services',
      href: '/transactions',
      icon: <PeopleIcon />
    },
    {
      title: 'Skills',
      href: '/products',
      icon: <ShoppingBasketIcon />
    },
    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },
    {
      title: 'Projects',
      href: '/typography',
      icon: <TextFieldsIcon />
    },
    {
      title: 'About',
      href: '/icons',
      icon: <ImageIcon />
    },
    // {
    //   title: 'Projects',
    //   href: '/account',
    //   icon: <AccountBoxIcon />
    // },
    // {
    //   title: 'Settings',
    //   href: '/settings',
    //   icon: <SettingsIcon />
    // }
  ];
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      elevation="0"
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
        <Typography color="secondary" variant="h4">Laban</Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
        <NavBar
          className={classes.nav}
          pages={pages}
        />
          {/* <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton> */}
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
