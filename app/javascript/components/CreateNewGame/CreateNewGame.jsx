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
  const [location, setLocation] = useState('');
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

  const onSave = () => {
    console.log('Did this work?')
    console.log('direct location is:',location)

    const newGame = {
      date_time: "2009-03-10 01:30:00",
      location,
      completed: false,
      team1_id: 1,
      team2_id: 2,
      }
    console.log(newGame);

    axios
      .post('/api/games', newGame)
      .then((res) => {
        console.log("res.data", res.data)
        return res.data;
      })
      .catch((err) => {
        console.err(err);
      });
  };
  

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
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              id="location-text-field"
              label="Game Location"
              required={true}
            />
          </Box>
          <Box mt={2}>
            {/* <Location /> */}
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true} required={true} >
              <InputLabel htmlFor="team-one-select">Team One</InputLabel>
              <Select
                native
                value={teamOne}
                onChange={(event) => setTeamOne(event.target.value)}
                inputProps={{
                  id: 'team-one-select',
                }}
                required={true}
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
              <InputLabel htmlFor="team-two-select">Team Two</InputLabel>
              <Select
                native
                value={teamTwo}
                onChange={(event) => setTeamTwo(event.target.value)}
                inputProps={{
                  id: 'team-two-select',
                }}
                required={true}
              >
                <option aria-label="None" value="" />
                <option value={4}>Team 4</option>
                <option value={5}>Team 5</option>
                <option value={6}>Team 6</option>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2} align="right">
            <Button variant="contained" color="primary" onClick={onSave}>
              Start Game
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default CreateNewGame;
