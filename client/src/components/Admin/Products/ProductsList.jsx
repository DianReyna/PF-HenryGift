import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productsActions";
import { DataGrid } from "@mui/x-data-grid";
import { Action, Delete, View, ImageContainer } from "../CommonStyled";

export default function ProductsList() {
  const dispatch = useDispatch();
  const itemsProducts = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const rows =
    itemsProducts &&
    itemsProducts.products?.map((item, index) => {
      return {
        id: index + 1,
        name: item.name,
        price: item.price,
        image: item.image,
        location: item.location,
        description: item.description,
        provider: item.Provider.name,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "price", headerName: "Price", width: 100 },
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
    { field: "location", headerName: "Location", width: 140 },
    { field: "description", headerName: "Description", width: 180 },
    { field: "provider", headerName: "Provider", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 300,
      renderCell: (params) => {
        return (
          <Action>
            <Delete>Delete</Delete>
            <View>View</View>
          </Action>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
