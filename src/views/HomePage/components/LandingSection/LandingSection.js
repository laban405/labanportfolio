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
  Typography,
  Box,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Particles from "react-particles-js";
import GlitchText from 'react-glitch-effect/core/Text';
import GlitchClip from 'react-glitch-effect/core/Clip';

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

    // paddingLeft: "50px",
    // paddingRight: "50px",
    //flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  marginAutoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: "30%",
  },
    //  backgroundColor: "gold",
  },
  marginAutoItem: {
    margin: "auto",
    paddingTop: "150px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
    },
  },
  landingtext:{
    marginLeft: 50,
    marginTop: 300,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
        marginTop: 50,
    },
  }
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const LandingSection = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container>
      {/* <div style={{position: 'relative'}}> */}
  {/* <div style={{position: 'absolute'}}> */}
  <Particles
        style={{ position: "absolute" }}
        height="100%"
        //width="100%"
        params={{
          particles: {
            color: {
              value: "#fb5012",
            },
            line_linked: {
              color: {
                value: "#1a1b41",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
        },
        }}
      />
  {/* </div> */}
  {/* </div> */}

        <Grid container spacing={0}>
          <Grid item lg={7} md={7} sm={12} xs={12} xl={7}>
            <div
              className={classes.landingtext}
            >
         
              <Typography variant="h1" style={{fontWeight:700}} color="primary">
                Hi there. I am Laban, a UI/UX Designer and Developer based in
                Nairobi, Kenya.
              </Typography>

              <Typography variant="h3"  style={{fontWeight:600}} color="secondary">
                I create better experiences for people.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} xl={5}>
            <div className={classes.marginAutoContainer}>
              <div className={classes.marginAutoItem}>
              <GlitchClip duration={"5s"}>
     <img height="300px" width="300px" src={"images/laban.png"} />  
     </GlitchClip>
              </div>{" "}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

LandingSection.propTypes = {
  className: PropTypes.string,
};

export default LandingSection;
