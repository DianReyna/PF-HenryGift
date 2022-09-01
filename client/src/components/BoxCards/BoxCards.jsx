import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoxesPerPage } from "../../redux/actions/boxesActions";
import BoxCard from "../BoxCard/BoxCard";
import AppPagination from "../AppPagination/AppPagination";
import { Grid, Typography } from "@mui/material";
import { queryPage } from "../../redux/actions/queryActions";
import { getCart } from "../../redux/actions/cartActions";
import axios from "axios";

export default function BoxCards() {
  const dispatch = useDispatch();

  const { boxes } = useSelector((state) => state.boxes);
  const query = useSelector((state) => state.query);
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(queryPage(page));
  }, [page]);

  useEffect(() => {
    user && dispatch(getCart(user._id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBoxesPerPage(query));
  }, [query]);

  const saveCart = async () => {
    // const URL = " https://henrygift-api.herokuapp.com";
    const URL = "http://localhost:3001";
    user &&
      (await axios.post(`${URL}/orders/cart`, { ...cart, user_id: user._id }));
  };

  useEffect(() => {
    setTimeout(saveCart, 1000);
  }, [cart]);

  const allBoxes = boxes.rows?.filter((item) => item.active === true);

  const renderBoxes = () => {
    if (allBoxes) {
      if (allBoxes.length > 0) {
        return (
          allBoxes &&
          allBoxes?.map((box) => (
            <Grid item 
            key={box.id}
            sx={{ mb: '2rem'}}
            // xs={12} 
            // // sm={6} 
            // md={4} 
            // // lg={3} 
            // sx={{ border: '1px solid blue' }}
            >
              <BoxCard
                image={box.image.url}
                id={box.id}
                ranking={box.ranking}
                name={box.name}
                detail={box.detail}
                person={box.person}
                price={box.price}
                box={box}
              />
            </Grid>
          ))
        );
      } else {
        return (
          <Grid item>
          <Typography variant="h3" sx={{ mx: "auto" }}>
            No Results Found
          </Typography>
          </Grid>
        );
      }
    }
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {renderBoxes()}
      </Grid>
      <AppPagination setPage={setPage} page={page} />
    </div>
  );
}
