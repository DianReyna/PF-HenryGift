import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getBoxesAdmin,
  putStateBoxes,
} from "../../../redux/actions/boxesActions";
import EditBox from "./EditBoxes";
import DeleteBoxes from "./DeleteBoxes";
import { toast } from "react-toastify";
import { Action, View, ImageContainer } from "../CommonStyled";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, CircularProgress } from "@mui/material";

export default function BoxesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsBox = useSelector((state) => state.boxes);

  useEffect(() => {
    dispatch(getBoxesAdmin());
  }, [dispatch]);

  const handleActive = (id, acti) => {
    if (acti) {
      acti = false;
      toast.success("Disabled box", {
        position: "top-right",
      });
    } else {
      acti = true;
      toast.success("Activated box", {
        position: "top-right",
      });
    }
    const data = {
      id,
      boxes: { active: acti },
    };
    dispatch(putStateBoxes(data));
    setTimeout(() => {
      dispatch(getBoxesAdmin());
    }, 2000);
  };

  const rows =
    itemsBox &&
    itemsBox.boxes?.map((item, index) => {
      let activeBox;
      if (item.active) {
        activeBox = "Active";
      } else {
        activeBox = "Disabled";
      }
      return {
        id: index + 1,
        id_box: item.id,
        name: item.name,
        price: item.price,
        image: item.image.url,
        person: item.person,
        detail: item.detail,
        ranking: item.ranking,
        expiration_date: item.expiration_date,
        active: activeBox,
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
    { field: "person", headerName: "Person", width: 60 },
    { field: "detail", headerName: "Detail", width: 180 },
    { field: "expiration_date", headerName: "Expiration Date", width: 130 },
    { field: "ranking", headerName: "Ranking", width: 100 },
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
                handleActive(params.row.id_box, params.row.isActive);
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
            <EditBox boxId={params.row.id_box} />
            <View
              onClick={() => {
                navigate(`/box/${params.row.id_box}`);
              }}
            >
              <VisibilityIcon />
            </View>
            <DeleteBoxes idBox={params.row.id_box} />
          </Action>
        );
      },
    },
  ];

  return (
    <div>
      {itemsBox.length === 0 ? (
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
