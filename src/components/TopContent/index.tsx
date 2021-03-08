import React from 'react';
import Breadcrumb from '../Breadcrumb';
import MainGrid from '../MainGrid';
import MainTable from '../MainTable';

import useStyles from './styles';

import { headCells, cargaProduto } from '../MainGrid/dic';

interface ITopContentProps {
  description: string;
  icon?: any;
  breadcrumb: string[];
}

const TopContent: React.FC<ITopContentProps> = ({
  description,
  icon: Icon,
  breadcrumb,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Breadcrumb pathOld={breadcrumb} description={description} />
        <div className={classes.container}>
          <Icon className={classes.text} />
          <h2 className={classes.text}>{description}</h2>
        </div>
      </div>

      <div>
        <MainTable headUse={headCells} records={cargaProduto} />
      </div>
    </>
  );
};

export default TopContent;
