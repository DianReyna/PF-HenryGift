import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions/favActions";
import BoxCard from "../BoxCard/BoxCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Favs.css";
import { Link } from "react-router-dom";

const Favs = () => {
  const dispatch = useDispatch();

  const favItems = useSelector((state) => state.fav.favItems);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getFavorites(user._id));
  }, []);

  return (
    <div className="container-all-fav">
      {favItems.length === 0 ? (
        <div className="fav-empty">
          <p>You haven't faved anything yet</p>
          <div className="start-shopping">
            <Link to="/">
              <ArrowBackIcon />
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        favItems &&
        favItems?.map((item) => {
          return (
            <div className="fav-container-card">
              <BoxCard
                className="card-fav"
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
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favs;
