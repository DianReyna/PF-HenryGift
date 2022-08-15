import React from "react";
import "./HomeAdmin.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAdmin } from "../../../redux/actions/userActions";
export default function HomeAdmin() {
  const dispatch = useDispatch();
  const itemsUser = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAdmin());
  }, [dispatch]);

  return (
    <>
      <h1>Welcome Home</h1>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Users</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{itemsUser.users.length}</span>
            <span className="featuredMoneyRate">registered</span>
          </div>
          <span className="featuredSub">in this month</span>
        </div>
      </div>
    </>
  );
}
