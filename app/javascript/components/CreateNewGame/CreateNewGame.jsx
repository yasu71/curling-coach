import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DateTime from './DateTime';
import Location from './Location';
import CreateNewGameStyles from './CreateNewGameStyles';

const useStyles = makeStyles(CreateNewGameStyles, (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

const CreateNewGame = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Box>
          <Box>
            <DateTime />
          </Box>
          <Box mt={2}>
            <TextField
              classes={{ root: classes.locationField }}
              className={classes.overrides}
              id="standard-basic"
              label="Team's Name"
            />
          </Box>
          <Box mt={2}>
            <Location />
          </Box>
          <Box mt={2}>
            <FormControl
              className={classes.formControl}
              fullWidth={true}
            >
              <InputLabel htmlFor="age-native-simple">
                Your Team
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Team 1</option>
                <option value={20}>Team 2</option>
                <option value={30}>Team 3</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl
              className={classes.formControl}
              fullWidth={true}
            >
              <InputLabel htmlFor="age-native-simple">
                Opposing Team
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Team 1</option>
                <option value={20}>Team 2</option>
                <option value={30}>Team 3</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2} align="right">
            <Button variant="contained" color="primary">
              Start Game
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default CreateNewGame;
