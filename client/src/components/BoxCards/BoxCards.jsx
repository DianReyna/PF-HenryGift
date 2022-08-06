import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoxesPerPage } from "../../redux/actions/boxesActions";
import BoxCard from "../BoxCard/BoxCard";
import AppPagination from "../AppPagination/AppPagination";
import { Grid, Stack } from "@mui/material";

export default function BoxCards() {
  const dispatch = useDispatch();
  const { boxes } = useSelector((state) => state.boxes);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getBoxesPerPage(page));
  }, [page]);

  return (
    <div className="Cards-container">
      <Stack direction="row" justifyContent="space-evenly" paddingTop={3}>
        {boxes?.map((box) => (
          <Grid key={box.id} item xs={3}>
            <BoxCard
              key={box.id}
              image={box.image}
              id={box.id}
              ranking={box.ranking}
              name={box.name}
              detail={box.detail}
              person={box.person}
              price={box.price}
              expiration_date={box.expiration_date}
            />
          </Grid>
        ))}
      </Stack>
      <AppPagination setPage={setPage} page={page} />
    </div>
  );
}
