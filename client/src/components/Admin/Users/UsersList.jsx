import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdmin } from "../../../redux/actions/userActions";
import { DataGrid } from "@mui/x-data-grid";

export default function UsersList() {
  const dispatch = useDispatch();
  const itemsUser = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);
  console.log("entreee");
  console.log(itemsUser);

  const rows =
    itemsUser &&
    itemsUser.users?.map((item, index) => {
      let access;
      if (item.access_level) {
        access = "Admin";
      } else {
        access = "Client";
      }
      return {
        id: index + 1,
        first_name: item.first_name,
        last_name: item.last_name,
        phone: item.phone,
        email: item.email,
        access_level: access,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "access_level", headerName: "Rol", width: 100 },
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
