import React from "react";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getOrders  } from "../../redux/actions/userActions";

export default function OrderHistory() {
    const dispatch = useDispatch();

    const {user}  = useSelector((state) => state.auth);
    const {orderDetail} = useSelector((state)=> state.users);
        
    useEffect(()=>{
        dispatch(getOrders(user._id))
        },[dispatch])
    
         
      const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'quantity', headerName: ' Quantity', width: 150 },
        { field: 'is_gift', headerName: 'Gift', width: 150 },
        { field: 'recipient', headerName: 'Recipient', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'ranking', headerName: 'Ranking', width: 150 },
        { field: 'expiration_date', headerName: 'Expiration Date', width: 150 },
        { field: 'person', headerName: 'Person', width: 150 },
        { field: 'active', headerName: 'Active', width: 150 },
       ];

       const rows = orderDetail.map((row)=>({
        id: row.id,
        quantity: row.quantity,
        is_gift: row.is_gift,
        recipient: row.recipient,
        amount: row.amount,
        name: row.name,
        price: row.price,
        ranking: row.ranking,
        expiration_date: row.expiration_date,
        person: row.person,
        active: row.active,
        
       }))

      return (
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
      );
 }

