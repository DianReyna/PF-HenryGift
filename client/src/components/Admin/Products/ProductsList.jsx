import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  destroyProduct,
  putStateProduct,
} from "../../../redux/actions/productsActions";
import EditProduct from "./EditProduct";
import { Action, Delete, View, ImageContainer } from "../CommonStyled";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import DeleteProduct from "./DeleteProduct";

export default function ProductsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleActive = (id, acti) => {
    if (acti) {
      acti = false;
      toast.success("Disabled product", {
        position: "top-right",
      });
    } else {
      acti = true;
      toast.success("Activated product", {
        position: "top-right",
      });
    }
    const data = {
      id,
      product: { active: acti },
    };
    dispatch(putStateProduct(data));
    setTimeout(() => {
      dispatch(getProducts());
    }, 2000);
  };
  const rows =
    itemsProducts &&
    itemsProducts.products?.map((item, index) => {
      let activeProd;
      if (item.active) {
        activeProd = "Active";
      } else {
        activeProd = "Disabled";
      }
      return {
        id: index + 1,
        id_product: item.id,
        name: item.name,
        price: item.price,
        image: item.image.url,
        location: item.location,
        description: item.description,
        provider: item.Provider.name,
        active: activeProd,
        isActive: item.active,
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
    { field: "location", headerName: "Location", width: 140 },
    { field: "description", headerName: "Description", width: 180 },
    { field: "provider", headerName: "Provider", width: 160 },
    {
      field: "active",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <Action>
            <Button
              className={`${params.row.active}`}
              onClick={() => {
                handleActive(params.row.id_product, params.row.isActive);
              }}
            >
              {params.row.active}
            </Button>
          </Action>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 300,
      renderCell: (params) => {
        return (
          <Action>
            <EditProduct prodId={params.row.id_product} />
            <View
              onClick={() => {
                navigate(`/product/${params.row.id_product}`);
              }}
            >
              <VisibilityIcon />
            </View>
            <DeleteProduct idProd={params.row.id_product} />
          </Action>
        );
      },
    },
  ];

  return (
    <div>
      {itemsProducts.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
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
      )}
    </div>
  );
}
