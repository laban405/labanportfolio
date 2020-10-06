import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
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
  TableSortLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:theme.palette.primary.dark,
    // height: "500px",
    //marginTop:"50px",
    paddingBottom: 10,
    paddingTop: 30,
    paddingLeft: "100px",
    paddingRight: "100px",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const AboutUs = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xl={4}>
          <div style={{ backgroundColor: "#efefef", height: "500px" }}></div>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xl={8}>
          <div style={{ backgroundColor: "#efefef", height: "500px" }}></div>
        </Grid>
      </Grid>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
