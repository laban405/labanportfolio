import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
//import ModeToggle, { Menu } from './ModeToggle';

import {
  Menu,
  LandingSection,
  Portfolio
} from './components';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const useStyles = makeStyles(theme => ({
  root: {
    width:"100",
    //paddingTop: theme.spacing(1),
    heght:"auto",
    //backgroundColor:"green",
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ScrollingProvider>
   <Menu />
   
  
    <Section id="home"  >
      <LandingSection/>
    </Section>
    <Section id="portfolio" >
     <Portfolio/>
    </Section>
    <Section id="work">
    <div style={{height:"100vh", width:'100%', backgroundColor:'yellow'}}>

</div>
    </Section>
    <Section id="about">
    <div style={{height:"100vh", width:'100%', backgroundColor:'purple'}}>

</div>
    </Section>
    <Section id="fun">
    <div style={{height:"100vh", width:'100%', backgroundColor:'orange'}}>

</div>
    </Section>
  </ScrollingProvider>
      {/* <Grid
        container
        //spacing={4}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <Carousel/>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
        >
          <AboutUs/>
        </Grid>
       
       
      </Grid> */}
    </div>
  );
};

export default HomePage;
