import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root:{
      backgroundColor:"#EFEFEF",
      height:400,
      marginBottom:3
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const Carousel = props => {
  const { className, ...rest } = props;

  const classes = useStyles();



  return (
  
    <div {...rest}
    className={clsx(classes.root, className)} >

    </div>
    
  );
};

Carousel.propTypes = {
  className: PropTypes.string
};

export default Carousel;
