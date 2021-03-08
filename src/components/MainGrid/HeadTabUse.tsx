import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

interface IHeadLabels {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  disableSorting?: false | true;
}

interface IHeadProps {
  label: IHeadLabels[];
}

const useStyles = makeStyles({
  tableRow: {
    background: '#282A36',
    color: '#fcf4eb',

    '&:first-child': {
      borderRadius: '6px 0 0 6px',
    },
    '&:last-child': {
      borderRadius: '0 6px 6px 0',
    },
  },
  tableSort: {
    '&:hover': {
      color: '#c8ccde',
    },
    '&.MuiTableSortLabel-root.MuiTableSortLabel-active': {
      color: '#c8ccde',
    },
  },
});

const HeadTabUse: React.FC<IHeadProps> = ({ label }) => {
  const classes = useStyles();
  const [order, setOrder] = useState<any>();
  const [orderBy, setOrderBy] = useState();

  const handleSortRequest = useCallback(
    (cellId = '') => {
      const isAsc = orderBy === cellId && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(cellId);
    },
    [orderBy, order],
  );

  return (
    <TableHead>
      <TableRow>
        {label.map(column => (
          <TableCell
            key={column.id}
            className={classes.tableRow}
            align={column.align}
            style={{ minWidth: column.minWidth }}
            sortDirection={orderBy === column.id ? order : 'desc'}
          >
            {column.disableSorting ? (
              column.label
            ) : (
              <TableSortLabel
                className={classes.tableSort}
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={() => {
                  handleSortRequest(column.id);
                }}
              >
                {column.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTabUse;
