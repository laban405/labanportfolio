import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
 
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'transparent',
    // height: "500px",
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 20,
    // paddingLeft: "100px",
    // paddingRight: "100px",
    flexGrow: 1,
    //minWidth:500,
    minHeight: 200,
    padding:20,
    borderRadius:0

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardtitle: {
    fontWeight: 500,
    fontSize: 28,
  },
  subtitle: {
    fontWeight: 600,
    fontSize: 14,
    color:'#454545'
  },
  duties:{
    marginLeft:5
  }
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const WorkCard = (props) => {
  const { className,workitem,  ...rest } = props;

  const classes = useStyles();

  return (
    <motion.div whileHover={{ scale: 1.02 ,backgroundColor: "#ffe2d1", color:'white'}} whileTap={{ scale: 0.98 }} >
    <Card className={classes.root}>
      <CardContent style={{padding:5, margin:0}}>
        <Typography variant='h5' gutterBottom>
          {workitem.duration}
        </Typography>
        <Typography variant='h4' color='primary' >
        {workitem.title}
        </Typography>
        <Typography variant='h5' color='primary'  gutterBottom>
        {workitem.company}
        </Typography >
        <Typography className={classes.subtitle}>
        Duties and responsibilities:
        </Typography>

       {workitem.duties.map(duty=> <Typography className={classes.duties}>
        {duty}
        </Typography>)}
       
     
      </CardContent>
    </Card>
    </motion.div>
  );
};

WorkCard.propTypes = {
  className: PropTypes.string,
};

export default WorkCard;
