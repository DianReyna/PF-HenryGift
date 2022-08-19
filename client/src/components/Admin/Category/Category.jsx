import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export default function Category() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="categoryTitle">Category</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/categories/create-categories")}
        >
          <LibraryAddIcon />
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
