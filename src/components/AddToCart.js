import React, { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <div className="cart-buttons">
        <button onClick={decrementQuantity}>-</button>
        <label htmlFor="quantity">
          <input
            name="quantity"
            pattern="^[0-99]*$"
            value={quantity}
            onChange={handleOnChange}
          ></input>
        </label>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button>Add to Cart</button>
    </>
  );
};

export default AddToCart;
