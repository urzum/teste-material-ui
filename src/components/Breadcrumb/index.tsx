import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';

interface IBreadProps {
  description: string;
  pathOld: string[];
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    fontSize: 10,
    color: '#282A36',
  },
  bread: {
    marginLeft: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bolder',
    color: '#282A36',
  },
}));

const Breadcrumb: React.FC<IBreadProps> = ({ pathOld, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        className={classes.bread}
        separator="›"
        aria-label="breadcrumb"
      >
        {pathOld.map((item, index) => (
          <Typography key={item} className={classes.link}>
            {item}
          </Typography>
        ))}
        <Typography className={classes.text}>{description}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
