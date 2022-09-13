import './App.css';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

function App() {

  const [origem, setOrigem] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOrigem(event.target.value as string);
  };

  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            <Box display='flex' flexDirection='column' sx={{ minWidth: 20 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Origem</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={origem}
                  label='Origem'
                  onChange={handleChange}
                >
                  <TableCell >
                    <MenuItem value={1}> Goiania</MenuItem>
                    <MenuItem value={2}> Acreuna</MenuItem>
                  </TableCell>
                </Select>
              </FormControl>
<s></s>

            </Box>
            <Box sx={{ minWidth: 20 }}>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destino</InputLabel>
                <Select>
                  <TableCell>São Paulo</TableCell>
                </Select>
              </FormControl>
            </Box>

          </TableRow>
        </TableHead>

        <TableBody>

          <TableRow>
            <TableCell>de novo</TableCell>
            <TableCell>de novo</TableCell>

          </TableRow>
        </TableBody>

      </Table>
    </TableContainer>



  );
}

export default App;
