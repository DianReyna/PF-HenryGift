import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  destroyCategory,
} from "../../../redux/actions/categoryActions";
import { DataGrid } from "@mui/x-data-grid";
import { Action, Delete } from "../CommonStyled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCategory from "./EditCategory";

export default function CategoryList() {
  const dispatch = useDispatch();
  const itemsCategory = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(destroyCategory(id));
  };
  console.log(itemsCategory);
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
      width: 300,
      renderCell: (params) => {
        return (
          <Action>
            <EditCategory catId={params.row.id_category} />
            <Delete onClick={() => handleDelete(params.row.id_category)}>
              <DeleteIcon />
            </Delete>
          </Action>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: "100%" }}>
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
