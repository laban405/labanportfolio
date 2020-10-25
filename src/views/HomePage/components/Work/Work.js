import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Ticker from "react-ticker";
import {
  
  Grid,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import { WorkCard } from "./components";

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
  header:{
    //color: '',
    marginLeft: 50,
    fontWeight: 600,
    paddingTop: 20,
    fontSize: 30,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
    },
  }
}));

const statusColors = {
  delivered: "success",
  pending: "info",
  refunded: "danger",
};

const Work = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  

  let work=[
    {
      duration:"January 2020 to August 2020",
      title:'UI/UX Designer and Software Developer',
      company:'',
      duties:['UI/UX design for mobile and web products.',
      'Cross platform mobile apps development.',
      'Web apps development.',
  
      ],
  
    },
    {
      duration:"August 2019 to December 2019",
      title:'IT Assistant Graduate Trainee',
      company:'Izone Africa Ltd',
      duties:[
       'IT help desk support.',
   'IT hardware and software installation.' ,
   'Asset project management',
   'LAN and WAN Management'
  
      ],
  
    },
    {
      duration:"January 2019 to June 2019",
      title:'Graphics Designer',
      company:'Sleek Ideas',
      duties:['Web design',
         'Print graphics design','Branding'],
  
    }
  ]

  const [workitems, setWorkItems]=useState(work);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={0}>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Typography
            variant="h5"
            color="primary"
            className={classes.header}
          >
            Work
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Grid container spacing={3} className={classes.cardsContainer}>
           {workitems.map(workitem=>{
             return (<Grid item  lg={12} md={12} sm={12} xs={12} xl={12}>
             <WorkCard workitem={workitem} />
           </Grid>);
           })} 
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Work.propTypes = {
  className: PropTypes.string,
};

export default Work;
