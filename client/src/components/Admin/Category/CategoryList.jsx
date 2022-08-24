import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux/actions/categoryActions";
import { DataGrid } from "@mui/x-data-grid";
import { Action } from "../CommonStyled";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

export default function CategoryList() {
  const dispatch = useDispatch();
  const itemsCategory = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const rows =
    itemsCategory &&
    itemsCategory.categories?.map((item, index) => {
      return {
        id: index + 1,
        id_category: item.id,
        name: item.name,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      renderCell: (params) => {
        return (
          <Action>
            <EditCategory catId={params.row.id_category} />
            <DeleteCategory idCat={params.row.id_category} />
          </Action>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: "50%" }}>
      <DataGrid
        style={{ color: "white" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[4]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
