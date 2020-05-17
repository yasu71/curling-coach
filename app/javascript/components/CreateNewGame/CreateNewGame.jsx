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

const CreateNewGame = ({ gameList }) => {
  const classes = useStyles();
  console.log('new: ', gameList);
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

  const userTeams = [];
  const opposingTeams = [];
  // const games = () => {
  //   for (const games of gameList) {
  //     console.log('games.teams: ', games.teams);
  //     for (const team of games.teams) {
  //       console.log('team: ', team);
  //       if(!userTeams.includes(team.team_name)){
  //         userTeams.push(team.team_name);
  //       console.log('team.team_name: ', team.team_name);
  //       }
  //     }
  //   }
  //   console.log("teams: ",userTeams)
  //   return userTeams;
  // };

  const games = () => {
    const games = [];
    gameList.map((games) => {
      games.push(games)
      console.log("games: ", games)
      games.map((teams, index) => {
      console.log("teams: ", teams)
      if(index === 0){
        userTeams.push(teams)
        console.log("userTeams: ", userTeams)
        return userTeams;
      } else {
        opposingTeams.push(teams)
        console.log("opposingTeams: ", opposingTeams)
        return opposingTeams;
      }
    })
    })
    console.log("teams: ",userTeams)
    return userTeams;
  };

  games();

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
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel htmlFor="age-native-simple">Your Team</InputLabel>
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
                {/* {gameList.map((game) => (
                  {game.map((teams => (
                <option key={game.id} value={game.teams.team_name}>{game.teams.team_name}</option>
                  ))}
                ))} */}
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel htmlFor="age-native-simple">Opposing Team</InputLabel>
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
