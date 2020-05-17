import React, { useState } from 'react';
import axios from 'axios';

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

const CreateNewGame = ({ gameList }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    team_name: '',
    team_one: '',
    team_two: '',
  });
  
  console.log('setState: ', setState());
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  const save = (team_name, team_one, team_two) => {
    const newGame = {
    team_name,
    team_one,
    team_two
    }

    axios
      .post('/api/games', newGame)
      .then((res) => {
        console.log("res.data", res.data)
        return res.data;
      })
      .catch((err) => {
        console.err(err);
      });
  }

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
              value={state.team_name}
              onChange={handleChange}
              id="standard-basic"
              label="Team's Name"
              required={true}
              inputProps={{
                name: 'teamName',
              }}
              team_name={state.team_name}
            />
          </Box>
          <Box mt={2}>
            <Location />
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel htmlFor="age-native-simple">Your Team</InputLabel>
              <Select
                native
                value={state.team_one}
                onChange={handleChange}
                inputProps={{
                  name: 'team1',
                  id: 'age-native-simple',
                }}
                required={true}
                team_one={state.team_one}
              >
                <option aria-label="None" value="" />
                <option value={1}>Team 1</option>
                <option value={2}>Team 2</option>
                <option value={3}>Team 3</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel htmlFor="age-native-simple">Opposing Team</InputLabel>
              <Select
                native
                value={state.team_two}
                onChange={handleChange}
                inputProps={{
                  name: 'team2',
                  id: 'age-native-simple',
                }}
                required={true}
                team_two={state.team_two}
              >
                <option aria-label="None" value="" />
                <option value={4}>Team 4</option>
                <option value={5}>Team 5</option>
                <option value={6}>Team 6</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2} align="right">
            <Button variant="contained" color="primary" onSave={(team_name, team_one, team_two) => save(team_name, team_one, team_two)}>
              Start Game
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default CreateNewGame;
