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
    { field: "name", headerName: "Box", width: 150 },
    { field: "price", headerName: "Price (UDS)", width: 150 },
    { field: "person", headerName: "Persons", width: 150 },
    { field: "ranking", headerName: "Ranking ", width: 150 },
    { field: "recipient", headerName: "Recipient ", width: 150 },
    {
      field: "expiration_date",
      headerName: "Expiration date",
      width: 150,
    },
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
    price: row.Box.price,
    name: row.Box.name,
    detail: row.Box.detail,
    expiration_date: row.Box.expiration_date,
    person: row.Box.person,
    ranking: row.Box.ranking,
    recipient: row.recipient
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
