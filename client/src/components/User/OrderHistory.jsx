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
import { Typography } from "@mui/material";
import styled from "styled-components";

export default function OrderHistory() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { orderDetail } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOrders(user._id));
  }, [dispatch]);

  const columns = [
    { field: "name", headerName: "Box", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "person", headerName: "Persons", width: 150 },
    { field: "ranking", headerName: "Ranking ", width: 150 },
    { field: "recipient", headerName: "Recipient ", width: 250 },
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
            <UserReview
              box_id={params.row.id_box}
              user_id={user._id}
              box_name={params.row.name}
            />
          </Action>
        );
      },
    },
  ];

  const rows = orderDetail.map((row) => ({
    id: row.id,
    id_box: row.Box.id,
    price: row.Box.price,
    name: row.Box.name,
    detail: row.Box.detail,
    expiration_date: row.Box.expiration_date,
    person: row.Box.person,
    ranking: row.Box.ranking,
    recipient: row.recipient,
  }));

  const Group = styled.div`
    height: 100%;
    width: auto;
  `;

  return (
    <Box
      sx={{
        height: "50vh",
        width: "80%",
        margin: "auto",
      }}
    >
      <Button variant="text" href="/userprofile">
        <KeyboardBackspaceOutlinedIcon />
        Back
      </Button>

      <Group>
        <div>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Shopping history
          </Typography>
        </div>
        <DataGrid
          style={{ textAlign: "center", height: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Group>
    </Box>
  );
}
