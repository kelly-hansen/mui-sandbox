import React, { useState } from 'react';

import { Box, Chip } from '@mui/material';
import { Check, Warning } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid'

const Table = () => {

  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'Status of item.',
      sortable: true,
      width: 110,
      renderCell: (params) => {
        const status = params.row.status
        return <Chip icon={status ? <Check /> : <Warning />} label={status ? 'Yay!' : 'Boo'} color={status ? 'success' : 'error'} size='small' />
      },
      valueGetter: (params) => params.row.status ? 'Yay!' : 'Boo',
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: false },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: false },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: true },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: false },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: false },
  ];

  return(
    <Box sx = {{ height: 400, mt: 8, mx: 4 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  )
};

export default Table;
