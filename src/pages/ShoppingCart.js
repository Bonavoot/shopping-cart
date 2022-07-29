//import { useState } from "react";

const ShoppingCart = (name) => {
  // const { name, price } = products;

  console.log(name);
  return <div className="receipt">{`${name}`}</div>;
};

export default ShoppingCart;

//const [quantity, setQuantity] = useState(0);
// const handleOnChange = (e) => {
//     setQuantity(e.target.value);
//   };
// const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//     };
//     const decrementQuantity = () => {
//     setQuantity(quantity - 1);
//     };
// <button onClick={decrementQuantity}>-</button>
// <button onClick={incrementQuantity}>+</button>
