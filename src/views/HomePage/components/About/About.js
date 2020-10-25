import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Ticker from "react-ticker";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import { EducationCard } from "./components";
import Chip from "@material-ui/core/Chip";
import GestureIcon from "@material-ui/icons/Gesture";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    // height: "500px",
    //overflow:'auto'
    //marginTop:"50px",
    paddingBottom: 50,
    paddingTop: "85px",
    paddingLeft:'50px',
    paddingRight:'50px',
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
  content: {
    color: "white",
  },

  title: {
    color: "white",
    marginLeft: 0,
    fontWeight: 600,
    paddingTop: 0,
    fontSize: 36,
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
    fontWeight:700
  },
  subhead: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    marginBottom: 10,
    marginTop:30,
  },
  chips:{
    margin:10,
    marginLeft:0,
    color:'white',
    borderColor:'white'
  },
  icon:{
    color:'white'
  }
}));

const About = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  let educationitems = [
    {
      school: "Jomo Kenyatta University of Agriculture and Technology",
      course: "BSc. Computer Science",
      grade: "",
      time: "2014 - 2018",
    },
    {
      school: "Kaumoni Boys’ High School",
      course: "KCSE",
      grade: "",
      time: "2010 - 2013",
    },
    {
      school: "Birongo Mixed Academy Primary School",

      course: "KCPE",
      grade: "",
      time: "2002 - 2009",
    },
  ];
  const [education, setEducation] = useState(educationitems);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
       <Typography variant="h5" className={classes.title}>
            About Me
          </Typography>
      <Grid container spacing={5}>
        
       
        <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
        
           
              <Typography  className={classes.content} variant="h5">
                I have been working in the software design and development
                industry with my most recent experience being a UI/UX Designer
                and Developer at Ciphercom Ltd. I possess valuable skills such
                as good communication and creativity. I am dedicated to meeting
                customer requirements with innovative solutions that maximize
                efficiency and exceed capability targets.
              </Typography>
           
              <Typography gutterBottom className={classes.subhead} variant="h4">
                {" "}
                Skills
              </Typography>

              <Typography  className={classes.subtitle} variant="h5">
                {" "}
                Design
              </Typography>
              <Chip
              className={classes.chips}
                icon={<GestureIcon className={classes.icon} />}
                label=" Material UI"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon className={classes.icon} />}
                label="Adobe XD
          
       "
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon className={classes.icon}  />}
                label="Adobe Photoshop"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="Adobe Illustrator"
                variant="outlined"
              />
              <Chip  className={classes.chips} icon={<GestureIcon className={classes.icon}/>} label="Figma" variant="outlined" />

              <Typography  className={classes.subtitle} variant="h5">
                {" "}
                Languages
              </Typography>

              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="Dart"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="JavaScript"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="Java"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="Python"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="CSS"
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="HTML"
                variant="outlined"
              />



              <Typography   className={classes.subtitle} variant="h5">
                {" "}
                Frameworks
              </Typography>
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="Flutter "
                variant="outlined"
              />
              <Chip
               className={classes.chips}
                icon={<GestureIcon  className={classes.icon}/>}
                label="React JS"
                variant="outlined"
              />
              
              {/* <Typography className={classes.subtitle} variant="h5">
                {" "}
                Process
              </Typography> */}
            
            

           
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} xl={6}>
              <Typography style={{marginTop:0}} className={classes.subhead} variant="h4" >
                {" "}
                Education
              </Typography>

              {education.map((eduitem) => {
                return (
                  <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                    <EducationCard eduitem={eduitem} />
                  </Grid>
                );
              })}
            </Grid>
        
        
        
        
        
        </Grid>
      
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
