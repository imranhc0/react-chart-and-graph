import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

const date = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getUTCDate()} ${new Date().getHours()}:${new Date().getMinutes()}`

const rows = [
  {
    timestamp: date,
    threat: "Hijacked and Criminal Network",
    ip: "190.168.0.1",
    web : "www.google.com"
  },
  {
    timestamp: date,
    threat: "Crypto Currency",
    ip: "190.168.0.1",
    web : "www.nasa.com"
  },
  {
    timestamp: date,
    threat: "Crypto Currency",
    ip: "190.168.0.1",
    web : "www.nasa.com"
  }

  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{marginTop:"30px"}}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time Stamp</TableCell>
            <TableCell align="right">Threat Type</TableCell>
            <TableCell align="right">Source ip</TableCell>
            <TableCell align="right">website </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.threat}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.timestamp}
              </TableCell>
              <TableCell align="right">{row.threat}</TableCell>
              <TableCell align="right">{row.ip}</TableCell>
              <TableCell align="right">{row.web}</TableCell>
    

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}