import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getOrders } from "../../redux/actions/userActions";
import { Button } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import UserReview from "../UserReview/UserReview";
import { Action } from "../Admin/CommonStyled";

export default function OrderHistory() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { orderDetail } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOrders(user._id));
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Box", width: 150 },
    { field: "amount", headerName: "Amount (UDS)", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    { field: "person", headerName: "Persons", width: 150 },
    { field: "ranking", headerName: "ranking ", width: 150 },
    {
      field: "expiration_date",
      headerName: "Expiration date",
      width: 150,
    },
    { field: "active", headerName: "Active", width: 150 },
    { field: "is_gift", headerName: "Gift", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <Action>
            <UserReview box_id={params.row.id_box} user_id={user._id} />
          </Action>
        );
      },
    },
  ];

  const rows = orderDetail.map((row) => ({
    id: row.id,
    id_box: row.OrderDetails[0].Box.id,
    amount: row.amount,
    quantity: row.OrderDetails[0].quantity,
    is_gift: row.OrderDetails[0].is_gift,
    name: row.OrderDetails[0].Box.name,
    active: row.OrderDetails[0].Box.active,
    detail: row.OrderDetails[0].Box.detail,
    expiration_date: row.OrderDetails[0].Box.expiration_date,
    person: row.OrderDetails[0].Box.person,
    ranking: row.OrderDetails[0].Box.ranking,
  }));

  return (
    <Box sx={{ height: 400, width: "95%" }}>
      <DataGrid
        style={{ color: "white", textAlign: "center" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />

      <Button variant="Abrir mi Box" href="/userprofile">
        <KeyboardBackspaceOutlinedIcon />
        Back
      </Button>
    </Box>
  );
}
