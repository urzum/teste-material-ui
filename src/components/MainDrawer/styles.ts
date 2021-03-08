import { makeStyles } from '@material-ui/core';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    gridArea: 'MD',
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#282A36',
    color: '#fcf4eb',
    borderRight: 'none',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
  list: {
    padding: 0,
  },
  icon: {
    color: theme.palette.primary.main,
    marginLeft: 16,
  },
  listItem: {
    padding: 0,
  },
  divider: {
    background: '#666b8a',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  dividerMBottom: {
    background: '#666b8a',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },

  subTextList: {
    padding: 0,
    fontSize: 13,
    marginLeft: 70,
  },
  iconOpenClose: {
    marginRight: 10,
  },
  titulo: {
    marginLeft: 16,
    marginBottom: 10,
  },
}));

export default useStyles;
