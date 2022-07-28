import React, { useState } from "react";
import ShoppingCart from "../pages/ShoppingCart";

const AddToCart = (products) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  console.log(products.props.price);

  console.log(cartQuantity);
  const handleAddToCartButton = () => {
    <ShoppingCart />;
    setCartQuantity(cartQuantity + 1);
    console.log(cartQuantity);
  };

  return (
    <>
      <button onClick={handleAddToCartButton}>Add to Cart</button>
    </>
  );
};

export default AddToCart;
