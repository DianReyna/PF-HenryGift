import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";

export default function Boxes() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="boxTitle">Boxes</h2>
        <PrimaryButton onClick={() => navigate("/admin/boxes/create-box")}>
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
