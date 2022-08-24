import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function UserBuy({ props }) {
  const rows =
    props &&
    props.userBuy.orderDetail?.map((item, index) => {
      const order = props.userBuy.order?.find(
        (el) => el.UserEmail === item.UserEmail
      );
      const sale = props.userBuy.sale?.find(
        (elem) => elem.UserEmail === item.UserEmail
      );
      let bann;
      if (order.User.banned) {
        bann = "Banned";
      } else {
        bann = "Active";
      }
      return {
        id: index + 1,
        name: `${order.User.first_name} ${order.User.last_name}`,
        banned: bann,
        amount: `$ ${sale.total}`,
        count: item.count,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "amount", headerName: "Amount", width: 160 },
    { field: "count", headerName: "Count", width: 160 },
    { field: "banned", headerName: "Status", width: 160 },
  ];

  return (
    <div>
      {props.userBuy.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            style={{ color: "white" }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      )}
    </div>
  );
}
