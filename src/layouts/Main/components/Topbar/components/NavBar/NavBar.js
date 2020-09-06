/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  flexDirection: 'row',
  padding: 0,
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    marginRight:10,
    minWidth:80
  },
  button: {
    
    color: colors.grey[400],
    padding: '10px 8px',
    justifyContent: 'center',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: colors.grey[200],
     color: colors.grey[400],
      '& $icon': {
        color: colors.grey[400],
      },}
   
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    backgroundColor:theme.palette.primary.dark,
    color: theme.palette.white,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.white
    },
    '&:hover': {
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.secondary.dark,
      color:  "#ffffff",
      '& $icon': {
        color:"#ffffff",
      },}
    
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const NavBar = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            {/* <div className={classes.icon}>{page.icon}</div> */}
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default NavBar;
