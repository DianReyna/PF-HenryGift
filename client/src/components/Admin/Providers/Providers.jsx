import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export default function Providers() {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2 className="providerTitle">Providers</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/providers/create-provider")}
        >
          <LibraryAddIcon />
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
