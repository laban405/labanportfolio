import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Carousel,
  AboutUs,
  ChampionBonus,
  VIPAward,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    heght:"auto",
    backgroundColor:"white"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
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
       
       
      </Grid>
    </div>
  );
};

export default Home;
