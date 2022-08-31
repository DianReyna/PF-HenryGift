import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesBox } from "../../../redux/actions/adminAction";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Analytics() {
  const dispatch = useDispatch();
  const { salesBox } = useSelector((state) => state.salesBox);

  useEffect(() => {
    dispatch(getSalesBox());
  }, [dispatch]);

  const rows =
    salesBox &&
    salesBox.orders?.map((item, index) => {
      let status;
      if (item.Box.GiftLists[0].redeemed) {
        status = "Open";
      } else {
        status = "Closed";
      }
      const find = item.createdAt.indexOf("T");
      const dateBox = item.createdAt.slice(0, find);
      return {
        id: index + 1,
        box: item.Box.name,
        quantity: item.quantity,
        redeemed: status,
        created: dateBox,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "box", headerName: "Box name", width: 160 },
    { field: "quantity", headerName: "Quantity", width: 160 },
    { field: "redeemed", headerName: "Redeemed", width: 160 },
    { field: "created", headerName: "Registration date ", width: 160 },
  ];

  return (
    <div>
      <h2>Box analytics</h2>
      {salesBox.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
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
