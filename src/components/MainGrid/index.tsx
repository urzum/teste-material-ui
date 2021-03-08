import React, { useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';

import HeadTabUse from './HeadTabUse';
import BodyTabUse from './BodyTabUse';
import PagTabUse from './PagTabUse';

import { headCells, cargaProduto } from './dic';

const head = headCells;
const linhas = cargaProduto;

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  disableSorting?: false | true;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20,
    borderRadius: 6,
    background: '#c8ccde',
    border: 'solid 1.5px #c8ccde',
    padding: 4,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60,
    maxHeight: '100%',
    height: '100%',
  },
  pagination: {
    background: '#282A36',
    color: '#fcf4eb',
    '&:first-child': {
      borderRadius: '6px 0 0 6px',
    },
    '&:last-child': {
      borderRadius: '0 0 6px 6px',
    },
    '& .MuiSelect-icon': {
      color: '#fcf4eb',
    },
  },
});

const MainGrid: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <HeadTabUse label={head} />
          <BodyTabUse
            headUse={head}
            bodyUse={linhas}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={linhas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage="Registros por pagina"
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MainGrid;
