import React from "react";
import "./Image.css";
import "./Product.jsx";

const Image = (props) => {
  return (
    <div className="Image">
      <img src={props.image} alt="" />
    </div>
  );
};

export default Image;
