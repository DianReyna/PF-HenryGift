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
        { field: 'amount', headerName: 'Amount (UDS)', width: 150 },
       ];

       const rows = orderDetail.map((row)=>({
        id: row.id,
        amount: row.amount,       
       }))

      return (
      <Box sx={{ height: 400, width: '50%' }}>
      <DataGrid
        style={{ color: "white", textAlign:'center' }}
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


