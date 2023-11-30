import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Avatar from '../components/images/NFT.png';
import Avatar2 from '../components/images/avatar.png';
import auction from '../components/images/auction.png';

function createData(
  id: number,
  name: string,
  price: string,
  offer: string,
  offer2: string,
  time: string,
  action: symbol,
) {
  return { id, name, price, offer, offer2, time, action };
}

const rows = [
  createData('Cute Cube Cool', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s'),
  createData('Liquid Wave', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Cute Cube Cool', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Liquid Wave', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Liquid Wave', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Cute Cube Cool', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Cute Cube Cool', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  createData('Cute Cube Cool', '0.0025ETH', '0.025ETH', '0.025ETH', '2 Hours 1 min 30s	'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item List</TableCell>
            <TableCell className='table-cell'>Open Price</TableCell>
            <TableCell className='table-cell'>Your Offer</TableCell>
            <TableCell className='table-cell'>Recent Offer</TableCell>
            <TableCell className='table-cell'>Time Left</TableCell>
            <TableCell className='table-cell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className='cell-wrapper'>
                    <img src={Avatar} alt='cell-avatar' className='cell-image' />
                    {row.id}
                </div>
               
              </TableCell>
              <TableCell className='table-cell'>{row.name}</TableCell>
              <TableCell className='table-cell'>{row.price}</TableCell>
              <TableCell className='table-cell'>
              <div className='cell-wrapper'>
                    <img src={Avatar2} alt='cell-avatar' className='cell-image' />
                    {row.offer}
                </div>
              </TableCell>
              <TableCell className='table-cell'>{row.offer2}</TableCell>
              <TableCell className='table-cell'>{row.time}</TableCell>
              <TableCell className='table-cell'>
                <div className='cell-wrapper'>
                    <img src={auction} alt='cell-avatar' className='cell-auction' />
                    {row.action}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
