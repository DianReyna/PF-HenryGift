import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders } from "../CommonStyled.js";

export default function Users() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="userTitle">Users</h2>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
