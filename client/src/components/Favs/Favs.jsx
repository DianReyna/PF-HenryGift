import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions/favActions";
import BoxCard from "../BoxCard/BoxCard";

const Favs = () => {
  const dispatch = useDispatch();

  const favItems = useSelector((state) => state.fav.favItems);
  console.log(favItems);
  const userEmail = useSelector((state) => state.auth.user._id);

  // useEffect(() => {
  //   dispatch(getFavorites(userEmail));
  // }, []);

  return (
    <div>
      {
        favItems && favItems.length > 0 ? (
      favItems?.map((item) => {
        return (
          <BoxCard
            key={item.Box.id}
            id={item.Box.id}
            name={item.Box.name}
            price={item.Box.price}
            ranking={item.Box.ranking}
            person={item.Box.person}
            expiration_date={item.Box.expiration_date}
            detail={item.Box.detail}
            image={item.Box.image}
          />
        );
      })
        ) : (
          <div>
            <h1>No Favorites</h1>
          </div>
        )
      }
      sarasa
    </div>
  );
};

export default Favs;
