import React from "react";
import "./HomeAdmin.css";

export default function HomeAdmin() {
  return (
    <>
      <h1>Welcome Home</h1>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Users</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">815</span>
            <span className="featuredMoneyRate">registered</span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sale</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,115</span>
            <span className="featuredMoneyRate">-1.4</span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,015</span>
            <span className="featuredMoneyRate">+2.34</span>
          </div>
          <span className="featuredSub">Compare to last month</span>
        </div>
      </div>
    </>
  );
}
