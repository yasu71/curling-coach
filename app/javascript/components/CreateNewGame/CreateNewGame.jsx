import React, { useState, useEffect } from 'react';
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

const CreateNewGame = () => {
  const classes = useStyles();
  const [gameList, setGameList] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [teamOne, setTeamOne] = useState();
  const [teamTwo, setTeamTwo] = useState();
  
  // console.log('setState: ', setState());
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    axios.get(`/api/games`).then((res) => {
      setGameList(res.data);
    });
  }, []);
  
  const save = (team_name, team_one, team_two) => {
    const newGame = {
    team_name,
    team_one,
    team_two
    }
console.log(newGame)
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
            {/* <DateTime /> */}
          </Box>
          <Box mt={2}>
            <TextField
              classes={{ root: classes.locationField }}
              className={classes.overrides}
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
              id="standard-basic"
              label="Team Name"
              required={true}
              // inputProps={{
              //   name: 'team_name',
              // }}
              // team_name="team_name"
            />
          </Box>
          <Box mt={2}>
            {/* <Location /> */}
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true} required={true} >
              <InputLabel htmlFor="age-native-simple">Team One</InputLabel>
              <Select
                native
                value={teamOne}
                onChange={(event) => setTeamOne(event.target.value)}
                inputProps={{
                  // name: 'team_one',
                  id: 'age-native-simple',
                }}
                required={true}
                // team_one={setTeamOne}
              >
                <option aria-label="None" value="" />
                <option value={1}>Team 1</option>
                <option value={2}>Team 2</option>
                <option value={3}>Team 3</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true} required={true} >
              <InputLabel htmlFor="age-native-simple">Team Two</InputLabel>
              <Select
                native
                value={teamTwo}
                onChange={(event) => setTeamTwo(event.target.value)}
                inputProps={{
                  // name: 'team_two',
                  id: 'age-native-simple',
                }}
                required={true}
                // team_two={setTeamTwo}
              >
                <option aria-label="None" value="" />
                <option value={4}>Team 4</option>
                <option value={5}>Team 5</option>
                <option value={6}>Team 6</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2} align="right">
            <Button variant="contained" color="primary" onClick={(teamName, teamOne, teamTwo) => save(teamName, teamOne, teamTwo)}>
              Start Game
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default CreateNewGame;
