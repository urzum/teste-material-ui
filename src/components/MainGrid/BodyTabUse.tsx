import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';

interface IHeadCells {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  disableSorting?: false | true;
}

interface IBodyTabProps {
  headUse: IHeadCells[];
  bodyUse: any[];
  page: number;
  rowsPerPage: number;
}

const useStyles = makeStyles(theme => ({
  tableRow: {
    color: '#282A36',
    background: '#fff',
    '&:nth-child(odd)': {
      background: '#f2f4fc',
    },
  },
  actions: {
    display: 'flex',
  },
  button: {
    marginRight: 6,
    size: 'small',
  },
}));

const BodyTabUse: React.FC<IBodyTabProps> = ({
  headUse,
  bodyUse,
  page,
  rowsPerPage,
}) => {
  const classes = useStyles();

  return (
    <TableBody>
      {bodyUse
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
                      className={classes.actions}
                      key={column.id}
                      align={column.align}
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
  );
};

export default BodyTabUse;
