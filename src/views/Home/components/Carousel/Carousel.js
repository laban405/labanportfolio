import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Paper,
  Grid,
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
  TableSortLabel,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    height: 500,
   // marginBottom: 3,
    paddingTop: 80,
    //marginBottom: 30,
    paddingLeft: 40,
  },
  name: {
    color: theme.palette.white,
    //marginTop: 80,
    //marginBottom: 30,
    //marginLeft: 40,
    fontSize: 24,
  },
  title: {
    color: theme.palette.secondary.dark,
    marginTop: 20,
    //marginBottom: 30,
    //marginLeft: 40,
    fontSize: 24,
    //fontWeight:
  },
  photo: {
    height: 300,
    width: 300,
    marginTop: 20,
    //marginLeft: 40,
    marginBottom: 30,
    //marginLeft: 40,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const Carousel = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
    
       <Grid container 
       //spacing={2}
       >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper
          elevation={3}
          //  variant="outlined"
          className={classes.photo}
        >


        <Typography className={classes.name}> Hi, I am Laban</Typography>
        <Typography className={classes.title}>
         
          Software Developer | UI/UX Designer
        </Typography>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper
          elevation={3}
          //  variant="outlined"
          className={classes.photo}
        >


        </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
};

export default Carousel;
