import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';

import logoAfill from '../../../public/assets/logo_afill.png';

// import useStyles from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    // gridArea: 'MH',
    background: theme.palette.primary.dark,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    background: '#282A36',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatar: {
    marginLeft: 26,
  },
  logo: {
    height: 50,
  },
  icon: {
    color: '#fcf4eb',
  },
}));

const MainHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <img
            src="/assets/logo_afill.png"
            alt="Logo aFill"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <IconButton color="inherit">
            <HomeIcon className={classes.icon} />
          </IconButton>
          <IconButton color="inherit">
            <FiberNewIcon className={classes.icon} />
          </IconButton>
          <IconButton color="inherit">
            <ContactPhoneIcon className={classes.icon} />
          </IconButton>
          <IconButton color="inherit">
            <HelpOutlineIcon className={classes.icon} />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon className={classes.icon} />
          </IconButton>

          <Avatar src="/assets/rezinaldim.jpeg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
