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
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor:theme.palette.primary.dark,
    // height: "500px",
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 20,
    // paddingLeft: "100px",
    // paddingRight: "100px",
    flexGrow: 1,
    //minWidth:500,
    height: 500,
    padding:0,
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
  cardsubtitle: {
    fontWeight: 500,
    fontSize: 14,
    color:'#454545'
  },
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const ProjectCard = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} >
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography
            color="primary"
            variant="h3"
            className={classes.cardtitle}
            gutterBottom
          >
            Project Title Here
          </Typography>
        }
        subheader={
          <Typography
            color="primary"
           // variant="h6"
            className={classes.cardsubtitle}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        }
      />
      <CardContent style={{padding:5, margin:0}}>
      <div style={{ height: 300, width: '100%',borderRadius:0, backgroundColor:'#5a6870' }}> </div>
      </CardContent>
     
    </Card>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
};

export default ProjectCard;
