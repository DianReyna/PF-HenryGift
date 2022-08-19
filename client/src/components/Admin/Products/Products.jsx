import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export default function Products() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="productsTitle">Products</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          <LibraryAddIcon />
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
