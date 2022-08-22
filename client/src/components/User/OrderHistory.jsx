import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { 
	// getOrders, 
	getUsersById } from "../../redux/actions/userActions";

export default function OrderHistory() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { history } = useSelector((state) => state.users);
  //const {orders} = useSelector((state)=> state.orders);
  const [orderDetails, setOrderDetails] = useState([]);

  const params = useParams();

  useEffect(() => {
    dispatch(getUsersById(user._id));
  }, [user]);

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      history.forEach((items) => {
        if (user._id === params.id) setOrderDetails(items);
      });
    }
  }, [params.id, history]);

  if (orderDetails.length === 0) return null;

  //    { orderDetails.history.map(item =>(
  //         <tr key={item._id}>

  //             <td>{item.first_name}</td>
  //             <td>{item.last_name}</td>
  //             <td>$ {item.price * item.quantity}</td>
  //         </tr>
  //         ))

  //    }

  //      const columns = [
  //         { field: 'id', headerName: 'ID', width: 90 },
  //         {
  //           field: 'fullName',
  //           headerName: 'Full name',
  //           description: 'This column has a value getter and is not sortable.',
  //           sortable: false,
  //           width: 160,
  //           valueGetter: (params) =>
  //             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //         },
  //         {
  //           field: 'email',
  //           headerName: 'email',
  //           type: 'email',
  //           width: 150,
  //           editable: true,
  //         },
  //         {
  //           field: 'box',
  //           headerName: 'BoxLast name',
  //           width: 150,
  //           editable: true,
  //         },
  //         {
  //           field: 'product',
  //           headerName: 'product',
  //           type: 'text',
  //           width: 110,
  //           editable: true,
  //         },
  //          {
  //         field: 'expiration_date',
  //         headerName: 'Expiration_date',
  //         type: 'date',
  //         width: 110,
  //         editable: true,
  //           },
  //         {
  //         field: 'Price',
  //         headerName: 'price',
  //         type: 'number',
  //         width: 110,
  //         editable: true,
  //           },
  //       ];

  //       const rows =

  //       [
  //         { id: i, fullName: '', email: '', box: '', product: '', },
  //         { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //         { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //         { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //         { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //         { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //         { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //         { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //         { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  //       ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
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
