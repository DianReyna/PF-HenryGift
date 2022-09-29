import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions/favActions";
import BoxCard from "../BoxCard/BoxCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Redeem2 from "../../assets/Redeem2.png";
=======
import "./Favs.css";
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611

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
          <div className="favs-img">
            <img src={Redeem2} alt="gift-img" />
          </div>
        </div>
      ) : (
        favItems &&
        favItems?.map((item) => {
          return (
            <div key={item.Box.id} className="fav-container-card">
              <BoxCard
                className="card-fav"
                id={item.Box.id}
                name={item.Box.name}
                price={item.Box.price}
                ranking={item.Box.ranking}
                person={item.Box.person}
                expiration_date={item.Box.expiration_date}
                detail={item.Box.detail}
<<<<<<< HEAD
                image={item.Box.image && item.Box.image.url}
=======
                image={item.Box.image}
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
                box={item.Box}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favs;
