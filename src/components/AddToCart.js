//import React, { useState } from "react";
import ShoppingCart from "../pages/ShoppingCart";

const AddToCart = (products) => {
  // const { name, price } = products.props;
  let quant = products.props.quant;

  const handleAddToCartButton = () => {
    quant = quant + 1;
    <ShoppingCart />;
  };

  return (
    <>
      <button onClick={handleAddToCartButton}>Add to Cart</button>
    </>
  );
};

export default AddToCart;
