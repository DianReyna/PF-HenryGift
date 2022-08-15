import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoxesAdmin, destroyBox } from "../../../redux/actions/boxesActions";
import { Outlet, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Action, Delete, View, ImageContainer } from "../CommonStyled";
import EditBox from "./EditBoxes";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function BoxesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsBox = useSelector((state) => state.boxes);
  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(destroyBox(id));
  };

  const rows =
    itemsBox &&
    itemsBox.boxes?.map((item, index) => {
      return {
        id: index + 1,
        id_box: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        person: item.person,
        detail: item.detail,
        ranking: item.ranking,
        expiration_date: item.expiration_date,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "price", headerName: "Price", width: 90 },
    {
      field: "image",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.image} alt="image" />
          </ImageContainer>
        );
      },
    },
    { field: "person", headerName: "Person", width: 60 },
    { field: "detail", headerName: "Detail", width: 180 },
    { field: "expiration_date", headerName: "Expiration Date", width: 130 },
    { field: "ranking", headerName: "Ranking", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 300,
      renderCell: (params) => {
        return (
          <Action>
            <EditBox boxId={params.row.id_box} />
            <View
              onClick={() => {
                navigate(`/box/${params.row.id_box}`);
              }}
            >
              <VisibilityIcon />
            </View>
            <Delete onClick={() => handleDelete(params.row.id_box)}>
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
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
