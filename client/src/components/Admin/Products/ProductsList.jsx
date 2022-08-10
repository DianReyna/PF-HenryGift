import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productsActions";

export default function ProductsList() {
  const dispatch = useDispatch();
  const itemsProducts = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="providerinfo">
        <span className="containerspanid">ID</span>
        <span className="containerspan">Name</span>
        <span className="containerspan">location</span>
        <span className="containerspan">description</span>
      </div>
      {itemsProducts.products?.map((e, i) => {
        return (
          <div key={i} className="providerinfo">
            <div className="containerspanid">
              <span className="span">{i}</span>
            </div>
            <div className="containerspan">
              <span className="span">{e.name}</span>
            </div>
            <div className="containerspan">
              <span className="span">{e.location}</span>
            </div>
            <div className="containerspandescription">
              <span className="span">{e.description}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
