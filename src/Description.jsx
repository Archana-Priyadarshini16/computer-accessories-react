import React from "react";
import "./Product.jsx";
import "./Description.css";

const Description = (props) => {
  return (
    <div className="Description">
      <p>{props.description}</p>
    </div>
  );
};

export default Description;
