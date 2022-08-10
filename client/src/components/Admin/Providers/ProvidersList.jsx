import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProvider } from "../../../redux/actions/providerActions";
import { DataGrid } from "@mui/x-data-grid";
import { Action, Delete, View } from "../CommonStyled.js";

export default function ProvidersList() {
  const dispatch = useDispatch();
  const itemsProvider = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  const rows =
    itemsProvider &&
    itemsProvider.providers?.map((item, index) => {
      return {
        id: index + 1,
        name: item.name,
        phone: item.phone,
        address: item.address,
        email: item.email,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "address", headerName: "Address", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 300,
      renderCell: (params) => {
        return (
          <Action>
            <Delete>Delete</Delete>
            <View>View</View>
          </Action>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
