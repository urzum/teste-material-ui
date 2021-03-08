import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    gridArea: 'MH',
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

export default useStyles;
