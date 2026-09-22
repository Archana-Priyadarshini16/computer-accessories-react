import React from "react";
import "./Product.jsx";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="Title">
      <h3>{props.title}</h3>
    </div>
  );
};

export default Title;
