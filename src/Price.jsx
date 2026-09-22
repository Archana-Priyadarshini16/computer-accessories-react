import React from "react";
import "./Price.css";
import "./Product.jsx";

const Price = (props) => {
  return (
    <div className="Price">
      <div className="old">₹{props.oldPrice}</div>
      <div className="new">₹{props.newPrice}</div>
    </div>
  );
};

export default Price;
