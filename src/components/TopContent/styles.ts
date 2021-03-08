import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 3,
    padding: 0,
    justifyContent: 'flex-start',
    background: '#c8ccde',
    borderRadius: 2,
    borderBottom: 'solid 1.5px #282A36',
  },
  text: {
    marginLeft: 8,
    color: '#282A36',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default useStyles;
