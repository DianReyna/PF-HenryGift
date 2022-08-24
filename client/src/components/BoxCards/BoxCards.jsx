import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoxesPerPage } from "../../redux/actions/boxesActions";
import BoxCard from "../BoxCard/BoxCard";
import AppPagination from "../AppPagination/AppPagination";
import { Grid, Stack,Typography } from "@mui/material";
import { queryPage } from "../../redux/actions/queryActions";
import { getCart } from "../../redux/actions/cartActions";
import axios from "axios";
import URL from "../../utils/backRoutes";
export default function BoxCards() {
  const dispatch = useDispatch();
  const { boxes } = useSelector((state) => state.boxes);
  const query = useSelector((state) => state.query);
  const [page, setPage] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(queryPage(page));
  }, [page]);

  useEffect(() => {
    user && dispatch(getCart(user._id));
  }, []);

  useEffect(() => {
    dispatch(getBoxesPerPage(query));
  }, [query]);

  const saveCart = async () => {
    
    user &&
      (await axios.post(`${URL}/orders/cart`, { ...cart, user_id: user._id }));
    //console.log(2)
  };

  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart]);

  const allBoxes = boxes.rows?.filter((item) => item.active === true);

  const renderBoxes = () => {
    if(boxes.rows){
      if(boxes.rows.length>0){
        return allBoxes?.map((box) => (
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
              box={box}
            />
          </Grid>
        ))
      }else {
        return <Typography variant="h3">No Results Found</Typography>
      }
    }
  }

  return (
    <div className="Cards-container">
      <Stack direction="row" justifyContent="space-evenly" paddingTop={3}>
        {renderBoxes()}
      </Stack>
      <AppPagination setPage={setPage} page={page} />
    </div>
  );
}
