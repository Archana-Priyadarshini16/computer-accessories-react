import React from "react";
import "./Product.css";
import Title from "./Title";
import Image from "./Image";
import Description from "./Description";
import Price from "./Price";
import "./ProductTab.jsx";

const Product = (props) => {
  return (
    <div className="Product">
      <Title title={props.title} />
      <Image image={props.image} />
      <Description description={props.description} />
      <Price oldPrice={props.oldPrice} newPrice={props.newPrice} />
    </div>
  );
};

export default Product;
