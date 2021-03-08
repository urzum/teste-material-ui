import React, { useState, ChangeEvent } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

interface IPagTabProps {
  linhas: number;
}

const PagTabUse: React.FC<IPagTabProps> = ({ linhas }) => {
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
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={linhas}
      rowsPerPage={rowsPerPage}
      page={page}
      labelRowsPerPage="Registros por pagina"
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default PagTabUse;
