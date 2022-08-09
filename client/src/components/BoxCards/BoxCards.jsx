import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoxesPerPage } from "../../redux/actions/boxesActions";
import BoxCard from "../BoxCard/BoxCard";
import AppPagination from "../AppPagination/AppPagination";
import { Grid, Stack } from "@mui/material";
import { queryPage } from "../../redux/actions/queryActions";
export default function BoxCards() {
  const dispatch = useDispatch();
  const { boxes } = useSelector((state) => state.boxes);
  const query = useSelector((state)=>state.query)
  const [page, setPage] = useState(0);
  console.log(query)
  useEffect(() => {
    dispatch(queryPage(page))
  }, [page]);

  useEffect(()=>{
    dispatch(getBoxesPerPage(query))
  },[query])

  return (
    <div className="Cards-container">
      <Stack direction="row" justifyContent="space-evenly" paddingTop={3}>
        {boxes.rows?.map((box) => (
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
