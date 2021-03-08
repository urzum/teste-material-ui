import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  Typography,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Container,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';

const useStyles = makeStyles(theme => ({
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
  paperPagination: {
    display: 'flex',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    background: '#e4e7f7',
    borderRadius: '0 0 6px 6px',
  },
  paperPag: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 6,
    padding: 4,
    justifyContent: 'space-between',
    background: '#e4e7f7',
    color: '#282A36',
  },
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
  tableHead: {
    background: '#282A36',
    color: '#fcf4eb',

    '&:first-child': {
      borderRadius: '6px 0 0 0',
    },
    '&:last-child': {
      borderRadius: '0 6px 0 0',
    },
  },
  tableRow: {
    color: '#282A36',
    background: '#fff',
    '&:nth-child(odd)': {
      background: '#f2f4fc',
    },
  },
  actions: {
    display: 'grid',
    flexDirection: 'column',
  },
  button: {
    marginRight: 6,
  },
}));

interface IHeadProps {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  disableSorting?: false | true;
}

interface IMainTableProps {
  headUse: IHeadProps[];
  records: any[];
}

const MainTable: React.FC<IMainTableProps> = ({ headUse, records }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const rowsPerPage = 15;
  const regPages = records.length / rowsPerPage;
  const numberPages =
    Math.round(regPages) + (records.length % rowsPerPage <= 5 ? 1 : 0);

  console.log(records.length % rowsPerPage);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage - 1);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headUse.map(column => (
                <TableCell
                  key={column.id}
                  className={classes.tableHead}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {records
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(linha => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={linha.id}
                    className={classes.tableRow}
                  >
                    {headUse.map(column => {
                      const value = linha[column.id];
                      if (column.id === 'actions') {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ width: 170, minWidth: 170 }}
                          >
                            <IconButton size="small" className={classes.button}>
                              <FiEdit color="#2196f3" />{' '}
                            </IconButton>
                            <IconButton size="small" className={classes.button}>
                              <BiSearchAlt />{' '}
                            </IconButton>
                            <IconButton size="small" className={classes.button}>
                              <AiOutlineDelete color="#d90766" />{' '}
                            </IconButton>
                            <IconButton size="small" className={classes.button}>
                              <HiOutlineViewGridAdd />{' '}
                            </IconButton>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper className={classes.paperPagination}>
        <Paper elevation={0} className={classes.paperPag}>
          <Typography variant="subtitle2">
            Total Registros: {records.length}
          </Typography>
        </Paper>
        <Paper elevation={0} className={classes.paperPag}>
          <Typography variant="subtitle2">
            Regístros de: {page === 0 ? 1 : page * rowsPerPage + 1} até{' '}
            {page * rowsPerPage + rowsPerPage > records.length
              ? records.length
              : page * rowsPerPage + rowsPerPage}
          </Typography>
        </Paper>
        <Pagination
          style={{ padding: 4 }}
          showFirstButton
          showLastButton
          defaultPage={1}
          page={page + 1}
          count={numberPages}
          color="primary"
          onChange={handleChangePage}
        />
      </Paper>
    </Paper>
  );
};

export default MainTable;
