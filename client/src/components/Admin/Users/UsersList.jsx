import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAdmin,
  putUsersAdmin,
} from "../../../redux/actions/userActions";
import { Action } from "../CommonStyled.js";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import "./Users.css";
import { toast } from "react-toastify";

export default function UsersList() {
  const dispatch = useDispatch();

  const itemsUser = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  const handleAccess = (id, access) => {
    if (access) {
      access = false;
      toast.success("User role changed to Client", {
        position: "top-right",
      });
    } else {
      access = true;
      toast.success("User role changed to Admin", {
        position: "top-right",
      });
    }
    const data = {
      id,
      access_level: access,
    };
    dispatch(putUsersAdmin(data));
  };
  const handleBanned = (id, banned) => {
    if (banned) {
      banned = false;
      toast.success("Activated user", {
        position: "top-right",
      });
    } else {
      banned = true;
      toast.success("Banned user", {
        position: "top-right",
      });
    }
    const value = {
      id,
      banned: banned,
    };
    dispatch(putUsersAdmin(value));
  };
  const rows =
    itemsUser &&
    itemsUser.users?.map((item, index) => {
      let access;
      let bann;
      if (item.access_level) {
        access = "Admin";
      } else {
        access = "Client";
      }
      if (item.banned) {
        bann = "Banned";
      } else {
        bann = "Active";
      }
      return {
        id: index + 1,
        first_name: item.first_name,
        last_name: item.last_name,
        phone: item.phone,
        email: item.email,
        banned: bann,
        access_level: access,
        level_access: item.access_level,
        ban: item.banned,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "first_name", headerName: "First Name", width: 140 },
    { field: "last_name", headerName: "Last Name", width: 140 },
    { field: "phone", headerName: "Phone", width: 140 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "access_level",
      headerName: "Rol",
      width: 100,
      renderCell: (params) => {
        return (
          <Action>
            <Button
              className={`${params.row.access_level}`}
              onClick={() => {
                handleAccess(params.row.email, params.row.level_access);
              }}
            >
              {params.row.access_level}
            </Button>
          </Action>
        );
      },
    },
    {
      field: "banned",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <Action>
            <Button
              className={`${params.row.banned}`}
              onClick={() => {
                handleBanned(params.row.email, params.row.ban);
              }}
            >
              {params.row.banned}
            </Button>
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
