import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProvider } from "../../../redux/actions/providerActions";
import "./Providers.css";

export default function ProvidersList() {
  const dispatch = useDispatch();
  const itemsProvider = useSelector((state) => state.providers);
  useEffect(() => {
    dispatch(getProvider());
  }, [dispatch]);

  return (
    <>
      <div className="providerinfo">
        <span className="containerspanid">ID</span>
        <span className="containerspan">Name</span>
        <span className="containerspan">Phone</span>
        <span className="containerspan">Address</span>
      </div>
      {itemsProvider.providers?.map((e, i) => {
        return (
          <div key={i} className="providerinfo">
            <div className="containerspanid">
              <span className="span">{i}</span>
            </div>
            <div className="containerspan">
              <span className="span">{e.name}</span>
            </div>
            <div className="containerspan">
              <span className="span">{e.phone}</span>
            </div>
            <div className="containerspan">
              <span className="span">{e.address}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
