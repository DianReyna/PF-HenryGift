import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "../CommonStyled.js";

export default function Category() {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeaders>
        <h2 className="categoryTitle">Category</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/categories/create-categories")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
}
