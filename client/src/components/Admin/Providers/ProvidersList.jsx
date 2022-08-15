import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProvider,
  destroyProvider,
  putActiveProvider,
} from "../../../redux/actions/providerActions";
import { DataGrid } from "@mui/x-data-grid";
import { Action, Delete } from "../CommonStyled.js";
import EditProvider from "./EditProvider";
import { Button } from "@mui/material";
import "./Providers.css";
export default function ProvidersList() {
  const dispatch = useDispatch();
  const itemsProvider = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(destroyProvider(id));
  };
  const handleActive = (id, acti) => {
    acti ? (acti = false) : (acti = true);
    const data = {
      id,
      active: acti,
    };
    dispatch(putActiveProvider(data));
  };
  const rows =
    itemsProvider &&
    itemsProvider.providers?.map((item, index) => {
      let activeProv;
      if (item.active) {
        activeProv = "Active";
      } else {
        activeProv = "Disabled";
      }
      return {
        id: index + 1,
        id_provider: item.id,
        name: item.name,
        phone: item.phone,
        address: item.address,
        email: item.email,
        active: activeProv,
        isActive: item.active,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "address", headerName: "Address", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "active",
      headerName: "Active",
      width: 80,
      renderCell: (params) => {
        return (
          <Action>
            <Button
              className={`${params.row.active}`}
              onClick={() => {
                handleActive(params.row.id_provider, params.row.isActive);
              }}
            >
              {params.row.active}
            </Button>
          </Action>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 90,
      renderCell: (params) => {
        return (
          <Action>
            <EditProvider provId={params.row.id_provider} />
            {/* <Delete onClick={() => handleDelete(params.row.id_provider)}>
              Delete
            </Delete> */}
          </Action>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        style={{ color: "white" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
