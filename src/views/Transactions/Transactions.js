import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TransactionsToolbar,TransactionsTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TransactionsList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      {/* <TransactionsToolbar /> */}
      <div className={classes.content}>
        <TransactionsTable users={users} />
      </div>
    </div>
  );
};

export default TransactionsList;
