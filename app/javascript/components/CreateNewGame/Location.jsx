import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CreateNewGameStyles from './CreateNewGameStyles';

const useStyles = makeStyles(CreateNewGameStyles);

const Location = () => {
  const classes = useStyles();
  const [location, setLocation] = useState();

  return (
    <TextField
      classes={{ root: classes.locationField }}
      className={classes.overrides}
      value={location}
      onChange={(event) => setLocation(event.target.value)}
      id="standard-basic"
      label="Location"
      required={true}
    />
  );
};

export default Location;
