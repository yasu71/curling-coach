import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CreateNewGameStyles from './CreateNewGameStyles';

const useStyles = makeStyles(CreateNewGameStyles);

const Location = () => {
  const classes = useStyles();

  return (
    <TextField
      classes={{ root: classes.locationField }}
      className={classes.overrides}
      id="standard-basic"
      label="Location"
    />
  );
};

export default Location;
