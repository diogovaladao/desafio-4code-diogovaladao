import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function App() {

  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Teste</TableCell>
            <TableCell>Teste outro</TableCell>
            <TableCell>Teste outro</TableCell>
            <TableCell>Teste outro</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>de novo</TableCell>
            <TableCell>de novo</TableCell>
            <TableCell>de novo</TableCell>
            <TableCell>de novo</TableCell>
          </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
      

       
  );
}

export default App;
