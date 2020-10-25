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
    color:'white',
    // height: "500px",
    marginTop: 10,
    marginBottom:30,
    flexGrow: 1,
    //minWidth:500,
    minHeight: 80,
    padding:10,
    borderLeft: "10px solid #ffffff"

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardtitle: {
    fontWeight: 500,
    fontSize: 28,
    color:'white',
  },
  subtitle: {
    fontWeight: 600,
    fontSize: 14,color:'white',
  },
  duties:{
    marginLeft:5,
    color:'white',
  }
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const EducationCard = (props) => {
  const { className,eduitem,  ...rest } = props;

  const classes = useStyles();

  return (
    <motion.div whileHover={{ scale: 1.02 , backgroundColor:"#0f1038"}} whileTap={{ scale: 0.98 }} >
    <Card className={classes.root}>
      <CardContent style={{padding:5, margin:0}}>
        <Typography variant='h5' gutterBottom style={{color:'white'}}>
          {eduitem.school}
        </Typography>
        <Typography variant='h4' style={{color:'white'}} >
        {eduitem.course}
        </Typography>
        <Typography variant='h5' style={{color:'white'}} >
        {eduitem.time}
        </Typography >
      
        
       
     
      </CardContent>
    </Card>
    </motion.div>
  );
};

EducationCard.propTypes = {
  className: PropTypes.string,
};

export default EducationCard;
