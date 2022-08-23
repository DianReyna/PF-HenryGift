import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions/favActions";
import BoxCard from "../BoxCard/BoxCard";

const Favs = () => {
  const dispatch = useDispatch();

  const favItems = useSelector((state) => state.fav.favItems);
  const userEmail = useSelector((state) => state.auth);
  const email = userEmail.user._id;

  useEffect(() => {
    dispatch(getFavorites(email));
  }, []);
  console.log(favItems);
  return (
    <div>
      {favItems.length === 0 ? (
        <div>Sorry not Found </div>
      ) : (
        favItems &&
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
      )}
    </div>
  );
};

export default Favs;
