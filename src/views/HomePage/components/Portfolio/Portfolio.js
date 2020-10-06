import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Ticker from "react-ticker";
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
  Typography,
  Box,
} from "@material-ui/core";
import { ProjectCard } from "./components";

import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "white",
    // height: "500px",
    //overflow:'auto'
    //marginTop:"50px",
    paddingBottom: 50,
    paddingTop: "65px",
    // margin:0,
    // padding:0

    width: "100%",
  },
  cardsContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  clients: {
    height: "200px",
    backgroundColor: "#1a1b41",
    marginBottom: 20,
  },
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const Portfolio = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={0}>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <div className={classes.clients}>
            <Typography
              variant="h5"
              style={{
                color: "#e3e3e3",
                marginLeft: 50,
                fontWeight: 600,
                paddingTop: 20,
                fontSize: 24,
                marginBottom:20
              }}
              gutterBottom
            >
              Happy Clients
            </Typography>
            <Ticker>

            {() => <div style={{display:'flex'}}>
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'red'}} />
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'orange'}} />
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'yellow'}} />
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'green'}} />
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'blue'}} />
              <div style={{height:100,width:100,marginRight:50, backgroundColor:'purple'}} />
              </div>}
              {/* {({ index }) => (
                <>
                  <h1>This is the Headline of element #{index}!</h1>
                  <img src="www.my-image-source.com/" alt="" />
                </>
              )} */}
            </Ticker>
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Typography
            variant="h5"
            color="primary"
            style={{
              //color: '',
              marginLeft: 50,
              fontWeight: 600,
              paddingTop: 20,
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            Portfolio
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Grid container spacing={3} className={classes.cardsContainer}>
            <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
              <ProjectCard />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
              <ProjectCard />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
              <ProjectCard />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
              <ProjectCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
};

export default Portfolio;
