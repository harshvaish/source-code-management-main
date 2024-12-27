import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RepoTable({tableData}) {
    console.log('Jay Final data', tableData)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Repositry Name</TableCell>
            <TableCell align="right">Clone url</TableCell>
            <TableCell align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.full_name}</TableCell>
              <TableCell align="right">{row.clone_url}</TableCell>
              <TableCell align="right">{row.owner.login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
