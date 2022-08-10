import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";

export default function Users() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="userTitle">Users</h2>
        <PrimaryButton onClick={() => navigate("/admin/users/create-user")}>
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
