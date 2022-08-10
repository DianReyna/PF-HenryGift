import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";

export default function Providers() {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2 className="providerTitle">Providers</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/providers/create-provider")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
