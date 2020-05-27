import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';

import Logo from '../../assets/logo_white.svg';
import CreateNewGame from '../CreateNewGame';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    fontFamily: "'Roboto Slab', 'serif'",
    color: theme.palette.text.titles
  },
  logo: {
    width: 'auto',
    padding: 2,
    maxWidth: 65,
    marginRight: 10,
    cursor: 'pointer',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  navBar: {
    color: theme.palette.text.secondary,
  },
  listItemText: {
    cursor: 'pointer',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '56%',
    left: '59%',
    transform: 'translate(-56%, -59%)', 
  },
}));

const NavBar = ({ handleHome }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newGame = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">New Game</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <CreateNewGame />
    </div>
  );
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon onClick={handleHome}>
            <HomeIcon cursor="pointer" />
          </ListItemIcon>
          <ListItemText
            onClick={handleHome}
            classes={{ root: classes.listItemText }}
            variant="body1"
          >
            Home
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={handleHome}>
            <CreateNewFolderIcon cursor="pointer" />
          </ListItemIcon>
          <ListItemText
            // onClick={handleHome}
            onClick={handleOpen}
            classes={{ root: classes.listItemText }}
            variant="body1"
          >
            New Game
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <React.Fragment key={'right'}>
        <AppBar position="static" classes={{ root: classes.navBar }}>
          <Toolbar>
            <CardMedia
              edge="start"
              image={Logo}
              component="img"
              classes={{ img: classes.logo }}
              onClick={handleHome}
            />
            <Typography
              variant="h6"
              className={classes.title}
              onClick={handleHome}
            >
              Curling Coach
            </Typography>
            <IconButton
              onClick={toggleDrawer('right', true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </Toolbar>
        </AppBar>
      </React.Fragment>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {newGame}
        </Modal>
    </div>
  );
};

export default NavBar;
